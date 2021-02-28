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
