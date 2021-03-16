const path = require("path");
const superagent = require("superagent");
const cheerio = require("cheerio");
const h2m = require("h2m");

let title = "";
let content = "";

const defaultDate = new Date();

// 要爬取的页面
const url = `https://github.com/HJY-xh/plantTrees/issues/60`;

/**
 * @returns {String} 返回当天日期 example: [2021-3-16]
 */
const formatDate = () => {
	return `[${defaultDate.getFullYear()}-${defaultDate.getMonth() + 1}-${defaultDate.getDate()}]`;
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

superagent.get(url).end((err, res) => {
	if (err) {
		console.log("抓取失败", err);
	} else {
		title = getTitle(res);
		getContent(res);
		// console.log(title)
	}
});
