## HTML 相关

[1.[2021-2-19] 如何理解 Web 标准以及 W3C](https://github.com/HJY-xh/plantTrees/issues/1)

<details>
<summary>展开查看</summary>
<pre>
标签要闭合，英文小写，且不要嵌套混乱，用标签语义化来提高搜索的概率。使用外链式的CSS和JS脚本，使结构、样式、行为分离，内容能被更广泛的设备所访问，代码精简，开发组件化，代码易维护、可复用，改版、升级方便。
</pre>
</details>

[2.[2021-2-26] 在 div 出现之前用什么做网站布局？](https://github.com/HJY-xh/plantTrees/issues/13)

<details>
<summary>展开查看</summary>
<pre>
div出现之前使用table布局。因为table布局嵌套很多，网站加载慢，布局层级不清晰。
</pre>
</details>

[3.[2021-2-26] 新的 HTML5 文档类型和字符集是什么？](https://github.com/HJY-xh/plantTrees/issues/14)

<details>
<summary>展开查看</summary>
<pre>
文档类型是`<!doctype html>`
字符集是`<meta charset="utf-8">`
</pre>
</details>

[4.[2021-3-2] iframe 框架都有哪些优缺点？](https://github.com/HJY-xh/plantTrees/issues/21)

<details>
<summary>展开查看</summary>
<pre>

**优点**

-   重载页面时不需要重载整个页面，只需要重载页面中的一个框架页
-   技术易于掌握，使用方便，可主要应用于不需搜索引擎来搜索的页面
-   方便制作导航栏

**缺点**

-   会产生很多页面，不容易管理
-   不容易打印
-   对浏览器搜索引擎不友好
-   多框架的页面会增加服务器的 http 请求
</pre>
</details>

[5.[2021-3-3] viewport 常见设置都有哪些？](https://github.com/HJY-xh/plantTrees/issues/25)

<details>
<summary>展开查看</summary>
<pre>

`viewport` 就是视区窗口，也就是浏览器中显示网页的部分。PC 端上基本等于设备显示区域，但在移动端上 `viewport` 会超出设备的显示区域（即会有横向滚动条出现）。设备默认的 `viewport` 在 980 - 1024 之间。

为了让移动端可以很好地显示页面，因此需要对`viewport`进行设置。相关的设置值如下：

| 设置          | 解释                                                               |
| :------------ | :----------------------------------------------------------------- |
| width         | 设置 layout viewport 的宽度，为一个正整数                          |
| initial-scale | 设置页面的初始缩放值，为一个数字，可以带小数                       |
| minimum-scale | 允许用户的最小缩放值，为一个数字，可以带小数                       |
| maximum-scale | 允许用户的最大缩放值，为一个数字，可以带小数                       |
| height        | 设置 layout viewport 的高度，这个属性并不重要，很少使用            |
| user-scalable | 是否允许用户进行缩放，值为"no"或"yes", no 代表不允许，yes 代表允许 |

`viewport` 是在 `meta` 标签内进行控制。

```
// width=device-width, initial-scale=1.0 是为了兼容不同浏览器
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable="no"
/>
```

</pre>
</details>

[6.[2021-3-5] 为什么 HTML5 只需要写`<!DOCTYPE HTML>`就可以被解析？](https://github.com/HJY-xh/plantTrees/issues/29)

<details>
<summary>展开查看</summary>
<pre>

因为 HTML5 与 HTML4 基于的基准不同。HTML4 基于**SGML**，除了`DOCTYPE`外还需要引入`DTD`来告诉浏览器用什么标准进行渲染。`DTD`还分为标准模式、严格模式。如果什么都不写，完全让浏览器自我发挥，会变成怪异模式。

HTML5 不基于**SGML**，因此后面就不用跟`DTD`，但是需要`DOCTYPE`来规范浏览器的渲染行为。

注：**SGML**是通用标记语言的集合。其中有 HTML、XML，因此需要用`DTD`来指定使用哪种规范。

</pre>
</details>
