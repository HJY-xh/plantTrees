const superagent = require("superagent");
const shell = require("shelljs");
const colors = require("colors");
const inquirer = require("inquirer");
const fetch = require("node-fetch");
const { updateReadme, updateQuestionFile } = require("./updateFile");

/**
 * @param {string} url 相关issue评论url
 * @function 获取评论
 */
const getContent = async (url) => {
	const contents = await fetch(url).then((res) => res.json());
	if (contents.length > 0) {
		return contents[0].body;
	}
	return null;
};

/**
 * @param {string} url 请求github api
 * @param {boolean} isUpdateDate 是否需要修改Readme.md文件中的日期
 * @function 开始任务
 */
const runTask = (url, isUpdateDate) => {
	fetch(url, {
		method: "GET",
		Accept: "application/vnd.github.v3+json",
	})
		.then((res) => res.json())
		.then(async (data) => {
			// issue相关信息
			const title = data.title;
			const tag = data.labels[0].name;
			const content = await getContent(data.comments_url);

			if (!tag || !title || !content) {
				console.log(
					"\n",
					colors.red(`命令执行失败, 请检查该Issue名称、内容、相关Tag是否填写`)
				);
				return;
			}

			const issueData = {
				url: data.html_url,
				title,
				tag,
				content,
			};

			console.log(issueData);
			handleHTMLSuccess(issueData, isUpdateDate);
		})
		.catch((err) => {
			console.err("\n", colors.red(`操作失败：${err}`));
		});
};

/**
 * @param {request.Response} res
 * @param {string} url Issue地址
 * @param {boolean} isUpdateDate 是否需要修改Readme.md文件中的日期
 * @function 成功获取数据后的回调
 */
const handleHTMLSuccess = async (res, isUpdateDate) => {
	updateReadme(res, isUpdateDate);
	updateQuestionFile(res);

	console.log("\n", colors.green(`本次操作添加的Issue标题为:${res.title}`));
	console.log("\n", colors.green(`本次操作改动的文件有:${res.tag}.md, README.md`));

	console.log("\n", colors.green("已生成相关文档，请检查格式及日期~"), "\n");

	inquirer
		.prompt([
			{
				type: "confirm",
				name: "commit",
				message: "您需要执行提交操作吗？",
			},
		])
		.then((res) => {
			const msg = [
				`docs(${res.tag.toLowerCase()}.md, readme.md): ${res.title}`,
				`re #${res.url.split("/").pop()}`,
			].join("\n\n");
			res.commit && shell.exec(`git add . && git commit -m '${msg}'`);
		});
};

inquirer
	.prompt([
		// {
		// 	type: "input",
		// 	name: "No",
		// 	message: "请输入issue编号",
		// 	validate: (value) => {
		// 		if (/^[0-9]*$/.test(value)) {
		// 			return true;
		// 		}
		// 		return colors.red("请输入数字");
		// 	},
		// },
		// {
		// 	type: "confirm",
		// 	name: "isUpdateDate",
		// 	message: "是否需要修改Readme.md文件中的日期",
		// },
	])
	.then((res) => {
		// const url = `https://api.github.com/repos/HJY-xh/plantTrees/issues/${res.No}`;
		const url = `https://api.github.com/repos/HJY-xh/plantTrees/issues/310`;
		const isUpdateDate = res.isUpdateDate || false;

		try {
			runTask(url, isUpdateDate);
		} catch (e) {
			shell.echo(e || "发生未知错误");
		}
	});
