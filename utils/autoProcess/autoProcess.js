const superagent = require("superagent");
const shell = require("shelljs");
const colors = require("colors");
const inquirer = require("inquirer");
const { updateReadme, updateQuestionFile } = require("./updateFile");
const { titleDom, tagDom, contentDom, getTag, getTitle, getContent } = require("./dom");

/**
 * @param {string} url 要爬取的Issue地址
 * @param {boolean} isUpdateDate 是否需要修改Readme.md文件中的日期
 * @function 开始任务
 */
const runTask = (url, isUpdateDate) => {
	superagent.get(url).end(async (err, res) => {
		if (err) {
			console.log("抓取失败", err);
		} else {
			await handleHTMLSuccess(res, url, isUpdateDate);
		}
	});
};

/**
 * @param {request.Response} res
 * @param {string} url Issue地址
 * @param {boolean} isUpdateDate 是否需要修改Readme.md文件中的日期
 * @function 成功获取数据后的回调
 */
const handleHTMLSuccess = async (res, url, isUpdateDate) => {
	// issue相关信息
	const tag = getTag(res, tagDom);
	const title = getTitle(res, titleDom);
	const content = getContent(res, contentDom);

	if (!tag || !title || !content) {
		console.log("\n", colors.red(`请检查该Issue名称、内容、相关Tag是否填写`));
		return;
	}

	updateReadme(title, url, isUpdateDate);
	updateQuestionFile(tag, title, content, url);

	console.log("\n", colors.green(`本次操作添加的Issue标题为:${title}`));
	console.log("\n", colors.green(`本次操作改动的文件有:${tag}.md, README.md`));

	console.log("\n", colors.green("已生成相关文档，请检查格式及日期~"));
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
		const url = `https://github.com/HJY-xh/plantTrees/issues/${res.No}`;
		const isUpdateDate = res.isUpdateDate || false;

		try {
			runTask(url, isUpdateDate);
		} catch (e) {
			shell.echo(e || "发生未知错误");
		}
	});
