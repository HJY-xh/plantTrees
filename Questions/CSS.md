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

box-sizing 的默认属性是 **content-box**

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

[8.[2021-3-9] style 标签写在 body 前和 body 后的区别是什么？](https://github.com/HJY-xh/plantTrees/issues/40)

<details>
<summary>展开查看</summary>
<pre>

-   答案一
    **渲染机制**的区别。在 body 前是已经把样式解析一遍，到了对应标签直接渲染样式，显示快；在 body 后是浏览器已经把标签解析了，但基于没有样式，显示的不完全。在把 body 后的样式表扫描后，成为真正的样式。速度会慢，尤其遇到大型网站，效果更差。这都是基于浏览器从上而下的浏览机制导致的。

-   答案二
    首先要明确一点，即浏览器以逐行方式对 html 文档进行解析的。
    -   写在 body 标签前利于浏览器逐步渲染：
              resources downloading->CSSOM+DOM->RenderTree(composite)->Layout->paint
    -   写在 body 标签后：
              可能会导致 FOUC (Flash of Unstyled Content)无样式内容闪烁问题。根据浏览器的解析机制，当解析到写在尾部的样式表（外联或写在 style 标签）会导致浏览器停止之前的渲染，等待加载且解析样式表完成之后重新渲染，也就是说 CSS 未完全加载前，会先渲染显示已经解析的 HTML 内容，然后 CSS 完全加载完成后，再次渲染。

</pre>
</details>

[9.[2021-3-9] 如何完成一个半透明边框效果？](https://github.com/HJY-xh/plantTrees/issues/42)

<details>
<summary>展开查看</summary>
<pre>
很多人会想到：

```
border: 10px solid hsla(0,0%,100%,.5);
background: white;
```

很可惜，出来的效果是这样的：

![](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_42/Transparent_border_before.PNG)

**_为什么呢？_**
因为默认情况下，背景会延伸到边框所在的区域下层。我们所做的事情并没有让 body 的背景从半透明白色边框处透上来，而是在半透明白色边框处透出了这个容器自己的纯白实色背景，这实际上得到的效果跟纯白实色的边框看起来完全一样。

在 CSS 2.1 中，这就是背景的工作原理。我们只能接受它并且向前看。谢天谢地，从背景与边框（第三版）http://w3.org/TR/css3-background开始，我们可以通过 `background-clip` 属性来调整上述默认行为所带来的不便。这个属性的初始值是 `border-box`，意味着背景会被元素的 `border box`（边框的外沿框）裁切掉。如果不希望背景侵入边框所在的范围，我们要做的就是把它的值设为 `padding-box`，这样浏览器就会用内边距的外沿来把背景裁切掉。即：

```
border: 10px solid hsla(0,0%,100%,.5);
background: white;
background-clip: padding-box;
```

效果如下：

![](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_42/Transparent_border_after.PNG)

</pre>
</details>

[10.[2021-3-9] box-sizing 有什么作用？](https://github.com/HJY-xh/plantTrees/issues/43)

<details>
<summary>展开查看</summary>
<pre>

box-sizing 属性可以用来调整如下表现：

-   `content-box` 它是默认值。如果设置一个元素的宽为 100px，那么这个元素的内容区就是 100px，此时任何边框、内边距的宽度都会增加到最后绘制出来的元素宽度中
-   `border-box`该属性将元素的边框和内边距的值包含进 width。即如果设置一个元素的宽为 100px，那么这 100px 包含该元素的 border 和 padding，内容区的实际宽度为 width 减去 border 和 padding 值。大多数情况下，这使得更容易设定一个元素的宽高。

</pre>
</details>
