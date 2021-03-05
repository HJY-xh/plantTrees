## CSS 相关

[1.[2021-2-22] CSS 中的 calc()有什么作用？](https://github.com/HJY-xh/plantTrees/issues/6)

<details>
<summary>展开查看</summary>
<pre>
calc使得开发者能够使用四则运算表达式来填写CSS属性。
px、%、em等不同单位的数值均可参与计算，浏览器会进行自动转换。
注意：当使用calc的时候，运算符号左右需要有空格，否则属性不生效。例如：width: calc(100% - 30px)。
</pre>
</details>

[2.[2021-2-27] rem 的原理是什么？ ](https://github.com/HJY-xh/plantTrees/issues/16)

<details>
<summary>展开查看</summary>
<pre>
在做响应式布局的时候，通过调整HTML的字体大小，页面上所有使用rem单位的元素都会做相应的调整。
</pre>
</details>

[3.[2021-2-28] 什么是 CSS 预处理器/后处理器？ ](https://github.com/HJY-xh/plantTrees/issues/17)

<details>
<summary>展开查看</summary>
<pre>
预处理器（例如，Less、Sass、stylus)是用来把Sass或Less预编译成CSS的工具，增强了CSS代码的复用性。它有层级、mixin、变量、循环、函数等，具有很方便的UI组件模块化开发能力，能极大地提高工作效率。
后处理器（例如PostCSS）通常被视为在完成的样式表中根据CSS规范处理CSS,让其更有效，目前最常做的是给CSS属性添加浏览器私有前缀，解决跨浏览器的兼容性问题。
</pre>
</details>

[4.[2021-3-1] 页面导入样式时，使用 link 和@import 有什么区别？](https://github.com/HJY-xh/plantTrees/issues/19)

<details>
<summary>展开查看</summary>
<pre>

-   link 是 XHTML 标签，除了加载 CSS 外，还可以定义 RSS 等其他事务；@import 属于 CSS 范畴，只能加载 CSS。
-   link 引用 CSS 时，在页面载入时同时加载；@import 需要页面网页完全载入以后加载。因此会出现一开始没有 css 样式，闪烁一下出现样式后的页面(网速慢的情况下)。
-   link 是 XHTML 标签，无兼容问题；@import 是在 CSS2.1 提出的，低版本的浏览器不支持。
-   link 支持使用 Javascript 控制 DOM 去改变样式；而@import 不支持。
</pre>
</details>

[5.[2021-3-2] 盒模型是什么？](https://github.com/HJY-xh/plantTrees/issues/23)

<details>
<summary>展开查看</summary>
<pre>
盒模型的组成，由里向外content,padding,border,margin.

在 IE 盒子模型中，width 表示 content+padding+border 这三个部分的宽度

在标准的盒子模型中，width 指 content 部分的宽度

box-sizing 的使用

-   box-sizing: content-box 是 W3C 盒子模型
-   box-sizing: border-box 是 IE 盒子模型

box-sizing 的默认属性是 content-box

</pre>
</details>

[6.[2021-3-2] <img>的 title 和 alt 有什么区别？](https://github.com/HJY-xh/plantTrees/issues/24)

<details>
<summary>展开查看</summary>
<pre>
- alt属性，是`<img>`的特有属性，是图片内容的等价描述，用于图片无法加载时显示或读屏器阅读图片（帮助盲人了解图片内容）。可提图片高可访问性，除了纯装饰图片外都必须设置有意义的值，搜索引擎会重点分析。
- title属性，是鼠标覆盖时显示的文字，其他一些标签也可以使用。例如：base，basefont，head，html，meta，param，script
</pre>
</details>

[7.[2021-3-5] 为什么要初始化 css 样式？](https://github.com/HJY-xh/plantTrees/issues/30)

<details>
<summary>展开查看</summary>
<pre>
因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。 当然，初始化样式会对SEO有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化。
</pre>
</details>
