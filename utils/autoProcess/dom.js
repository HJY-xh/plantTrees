const cheerio = require("cheerio");

const tagDom = "div#discussion_bucket div#partial-discussion-sidebar div.js-issue-labels a span";

const titleDom =
	"main#js-repo-pjax-container div#repo-content-pjax-container div#show_issue div#partial-discussion-header div div h1 span";

const contentDom = "div#discussion_bucket task-lists table tbody tr td";

/**
 *
 * @param {request.Response} res
 * @param {string} dom 爬取的dom结构
 * @returns {string} 获取标签,如果有多个标签，取第一个
 */
const getTag = (res, dom) => {
	const $ = cheerio.load(res.text);
	let textArr = [];
	$(dom).each((index, element) => {
		textArr.push($(element).html());
	});
	return textArr[0];
};

/**
 *
 * @param {request.Response} res
 * @param {string} dom 爬取的dom结构
 * @returns {string} 获取title
 */
const getTitle = (res, dom) => {
	const $ = cheerio.load(res.text);
	let textArr = [];
	$(dom).each((index, element) => {
		const text = $(element.children[0]).text().split("#")[0].split("\n")[1]?.trim();
		textArr.push(text);
	});

	return textArr[0];
};

/**
 *
 * @param {request.Response} res
 * @param {string} dom 爬取的dom结构
 * @returns {string} Issue的答案
 */
const getContent = (res, dom) => {
	const $ = cheerio.load(res.text);
	let temp = [];

	$(dom).each((index, element) => {
		temp.push(String($(element).html()));
	});

	const reg = new RegExp(/^<\w+[\s]{1}[class\=\"]\w+/);
	const data = temp.filter((element, index) => reg.test(`${element?.trim()}`) === false)[0];

	return data?.trim().replace("<em>", "").replace("</em>", "");
};

module.exports = {
	tagDom,
	titleDom,
	contentDom,
	getTag,
	getTitle,
	getContent,
};
