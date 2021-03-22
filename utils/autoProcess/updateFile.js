const fs = require("fs");
const path = require("path");
const h2m = require("h2m");

/**
 * @param {string} title 题目标题
 * @param {string} url Issue地址
 * @param {boolean} isUpdateDate 是否需要修改Readme.md文件中的日期
 * @function 对readme.md文件进行更新
 */
const updateReadme = (title, url, isUpdateDate) => {
	const readmePath = path.resolve(__dirname, "../../README.md");
	const readmeOldFile = fs.readFileSync(readmePath, "utf-8");

	// 昨天的日期
	const yesterdat = new Date(new Date().getTime() - 86400 * 1000);
	const yesterdatStr = `[${yesterdat.getFullYear()}-${
		yesterdat.getMonth() + 1
	}-${yesterdat.getDate()}]`;

	// 移除##Day至##目录结构之间的内容
	const readmeOldFileArr = readmeOldFile.split("\n");
	const dayIndex = readmeOldFileArr.findIndex((item) => item.includes("## Day"));
	const directoryIndex = readmeOldFileArr.findIndex((item) => item.includes("## 目录结构"));
	let index = dayIndex + 1;
	readmeOldFileArr.some((item) => item.includes(yesterdatStr)) &&
		readmeOldFileArr.splice(index, directoryIndex - dayIndex - 1);

	// 新的日期
	const oldDayTitle = readmeOldFileArr[dayIndex];
	const newDay = Number(oldDayTitle.replace("## Day ", "").replace(":", "")) + 1;
	console.log(oldDayTitle.replace("## Day ", "").replace(":", ""));
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
 * @param {string} url Issue地址
 * @function 将与标签相匹配的目标文件进行更新
 */
const updateQuestionFile = (tag, title, content, url) => {
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

module.exports = {
	updateReadme,
	updateQuestionFile,
};
