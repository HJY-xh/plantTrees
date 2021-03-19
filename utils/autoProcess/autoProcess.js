const fs = require("fs");
const path = require("path");
const superagent = require("superagent");
const cheerio = require("cheerio");
const h2m = require("h2m");
const shell = require("shelljs");
const colors = require("colors");
const inquirer = require("inquirer");

// issue相关信息
let title = "";
let content = "";
let tag = "";

// 要爬取的页面url
let url = `https://github.com/HJY-xh/plantTrees/issues/`;

//是否需要修改Readme.md文件中的日期 ## Day 20
let isUpdateDate = false;

// readme.md路径
const readmePath = path.resolve(__dirname, "../../README.md");

// 昨天的日期
const yesterdat = new Date(new Date().getTime() - 86400 * 1000);
const yesterdatStr = `[${yesterdat.getFullYear()}-${
	yesterdat.getMonth() + 1
}-${yesterdat.getDate()}]`;

// 获取标签,如果有多个标签，取第一个
const getTag = (res) => {
	const $ = cheerio.load(res.text);
	let textArr = [];
	$("div#discussion_bucket div#partial-discussion-sidebar div.js-issue-labels a span").each(
		(index, element) => {
			textArr.push($(element).html());
		}
	);
	return textArr[0];
};

// 获取title
const getTitle = (res) => {
	const $ = cheerio.load(res.text);
	let textArr = [];
	$(
		"main#js-repo-pjax-container div#repo-content-pjax-container div#show_issue div#partial-discussion-header div div h1 span"
	).each((index, element) => {
		const text = $(element.children[0]).text().split("#")[0].split("\n")[1]?.trim();
		textArr.push(text);
	});

	return textArr[0];
};

// 获取content
const getContent = (res) => {
	const $ = cheerio.load(res.text);
	let temp = [];

	$("div#discussion_bucket task-lists table tbody tr td").each((index, element) => {
		temp.push(String($(element).html()));
	});

	const reg = new RegExp(/^<\w+[\s]{1}[class\=\"]\w+/);
	const data = temp.filter((element, index) => reg.test(`${element?.trim()}`) === false)[0];
	console.log(data?.trim().replace("<em>", "").replace("</em>", ""));

	return data?.trim().replace("<em>", "").replace("</em>", "");
};

// 开始任务
const runTask = () => {
	superagent.get(url).end(async (err, res) => {
		if (err) {
			console.log("抓取失败", err);
		} else {
			await handleHTMLSuccess(res);
			console.log("\n", colors.green("已生成相关文档，请检查格式及日期~"));
		}
	});
};

/**
 * @param {request.Response} res
 * @function 成功获取数据后的回调
 */
const handleHTMLSuccess = async (res) => {
	tag = getTag(res);
	title = getTitle(res);
	content = getContent(res);
	return;
	updateReadme(title);
	updateQuestionFile(tag, title, content);

	console.log("\n", colors.green(`本次操作添加的Issue标题为:${title}`));
	console.log("\n", colors.green(`本次操作改动的文件有:${tag}.md, README.md`));
};

/**
 * @param {string} title 题目标题
 * @function 对readme.md文件进行更新
 */
const updateReadme = (title) => {
	const readmeOldFile = fs.readFileSync(readmePath, "utf-8");

	// 移除##Day至##目录结构之间的内容
	const readmeOldFileArr = readmeOldFile.split("\n");
	const dayIndex = readmeOldFileArr.findIndex((item) => item.includes("## Day"));
	const directoryIndex = readmeOldFileArr.findIndex((item) => item.includes("## 目录结构"));
	let index = dayIndex + 1;
	readmeOldFileArr.some((item) => item.includes(yesterdatStr)) &&
		readmeOldFileArr.splice(index, directoryIndex - dayIndex - 1);

	// 新的日期
	const oldDayTitle = readmeOldFileArr[dayIndex];
	const newDay = Number(oldDayTitle.match(/\s+(\d+):$/, "$1")?.[1] || 0) + 1;
	const newDayTitle = readmeOldFileArr[dayIndex].replace(/\d+/, newDay);

	// 更新readme.md文件
	readmeOldFileArr.splice(index, 0, `\n✅ [${title}](${url})\n`);
	let readmeNewFile = readmeOldFileArr.join("\n");
	if (isUpdateDate) {
		readmeNewFile = readmeNewFile.replace(oldDayTitle, newDayTitle);
	}
	fs.writeFileSync(readmePath, readmeNewFile, "utf-8");
};

/**
 * @param {string} tag 题目标签
 * @param {string} title 题目标题
 * @param {string} content 题目答案
 * @function 将与标签相匹配的目标文件进行更新
 */
const updateQuestionFile = (tag, title, content) => {
	// 获取目标文件路径
	const questionDirectoty = path.resolve(__dirname, "../../Questions");
	const files = fs.readdirSync(questionDirectoty, "utf-8");
	const fileIndex = files.findIndex((item) => item.toLowerCase().includes(tag.toLowerCase()));
	const objectFilePath = path.resolve(questionDirectoty, files[fileIndex]);

	// 获取题目编号
	const objectOldFile = fs.readFileSync(objectFilePath, "utf-8");
	const questions = objectOldFile
		.split("\n")
		.filter((item) => /^\[\d+\.\[\d+\-\d+\-\d+\]/.test(item));
	const index = questions.pop().match(/^\[(\d+)\./, "$1")[1];

	// 写入内容
	const text = [
		`\n[${Number(index) + 1}.${title}](${url})\n`,
		`<details>`,
		`<summary>展开查看</summary>`,
		`<pre>`,
		`\n${h2m(content)}\n`,
		`</pre>`,
		`</details>`,
	];
	const objectNewFile = objectOldFile + text.join("\n");
	fs.writeFileSync(objectFilePath, objectNewFile, "utf-8");
};

inquirer
	.prompt([
		{
			type: "input",
			name: "No",
			message: "请输入issue编号",
			validate: (value) => {
				if (/^[0-9]*$/.test(value)) {
					return true;
				}
				return colors.red("请输入数字");
			},
		},
		{
			type: "confirm",
			name: "isUpdateDate",
			message: "是否需要修改Readme.md文件中的日期",
		},
	])
	.then((res) => {
		url += String(res.No);
		isUpdateDate = res.isUpdateDate;
		try {
			runTask();
		} catch (e) {
			shell.echo(e || "发生未知错误");
		}
	});
