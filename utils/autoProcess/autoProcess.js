const fs = require("fs");
const path = require("path");
const superagent = require("superagent");
const cheerio = require("cheerio");
const h2m = require("h2m");

// issue相关信息
let title = "";
let content = "";
let tag = "";

// 默认时间
const defaultDate = new Date();

// 要爬取的页面
const url = `https://github.com/HJY-xh/plantTrees/issues/64`;

/**
 * @returns {String} 返回当天日期 example: [2021-3-16]
 */
const formatDate = () => {
	return `[${defaultDate.getFullYear()}-${defaultDate.getMonth() + 1}-${defaultDate.getDate()}]`;
};

// readme.md路径
const readmePath = path.resolve(__dirname, "../../README.md");

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

	const reg = new RegExp(/<\w+[\s]{1}[class\=\"]\w+/);
	const data = temp.filter((element, index) => reg.test(`${element}`) === false)[0];

	return data.trim().replace("<em>", "").replace("</em>", "");
};

// 爬取页面
superagent.get(url).end((err, res) => {
	if (err) {
		console.log("抓取失败", err);
	} else {
		handleHTMLSuccess(res);
	}
});

/**
 * @param {request.Response} res
 * @function 成功获取数据后的回调
 */
const handleHTMLSuccess = (res) => {
	tag = getTag(res);
	title = getTitle(res);
	content = getContent(res);
	updateReadme(title);
};

/**
 * @param {string} title 题目标题
 * @function 对readme.md文件进行更新
 */
const updateReadme = (title) => {
	const readmeOldFile = fs.readFileSync(readmePath, "utf8");

	// 移除##Day至##目录结构之间的内容
	const readmeOldFileArr = readmeOldFile.split("\n");
	const dayIndex = readmeOldFileArr.findIndex((item) => item.includes("## Day"));
	const directoryIndex = readmeOldFileArr.findIndex((item) => item.includes("## 目录结构"));
	let index = dayIndex + 1;
	readmeOldFileArr.splice(index, directoryIndex - dayIndex - 1);

	// 新的日期
	const oldDayTitle = readmeOldFileArr[dayIndex];
	const newDay = Number(oldDayTitle.match(/\s+(\d+):$/, "$1")[1]) + 1;
	const newDayTitle = readmeOldFileArr[dayIndex].replace(/\d+/, newDay);

	// 更新readme.md文件
	readmeOldFileArr.splice(index, 0, `\n✅ [${title}](${url})\n`);
	const readmeNewFile = readmeOldFileArr.join("\n").replace(oldDayTitle, newDayTitle);
	fs.writeFileSync(readmePath, readmeNewFile, "utf-8");
};
