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
答案一：
-   link 是 XHTML 标签，除了加载 CSS 外，还可以定义 RSS 等其他事务；@import 属于 CSS 范畴，只能加载 CSS。
-   link 引用 CSS 时，在页面载入时同时加载；@import 需要页面网页完全载入以后加载。因此会出现一开始没有 css 样式，闪烁一下出现样式后的页面(网速慢的情况下)。
-   link 是 XHTML 标签，无兼容问题；@import 是在 CSS2.1 提出的，低版本的浏览器不支持。
-   link 支持使用 Javascript 控制 DOM 去改变样式；而@import 不支持。

答案二：

-   link 是 HTML 方式， @import 是 CSS 方式
-   link 最大限度支持并行下载，@import 过多嵌套导致串行下载，出现 FOUC
-   link 可以通过 rel="alternate stylesheet"指定候选样式
-   浏览器对 link 支持早于@import，可以使用@import 对老浏览器隐藏样式
-   @import 必须在样式规则之前，可以在 css 文件中引用其他文件
总体来说：link 优于@import
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

```css
border: 10px solid hsla(0, 0%, 100%, 0.5);
background: white;
```

很可惜，出来的效果是这样的：

![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_75/uri.png)

**_为什么呢？_**
因为默认情况下，背景会延伸到边框所在的区域下层。我们所做的事情并没有让 body 的背景从半透明白色边框处透上来，而是在半透明白色边框处透出了这个容器自己的纯白实色背景，这实际上得到的效果跟纯白实色的边框看起来完全一样。

在 CSS 2.1 中，这就是背景的工作原理。我们只能接受它并且向前看。谢天谢地，从背景与边框（第三版）http://w3.org/TR/css3-background开始，我们可以通过 `background-clip` 属性来调整上述默认行为所带来的不便。这个属性的初始值是 `border-box`，意味着背景会被元素的 `border box`（边框的外沿框）裁切掉。如果不希望背景侵入边框所在的范围，我们要做的就是把它的值设为 `padding-box`，这样浏览器就会用内边距的外沿来把背景裁切掉。即：

```css
border: 10px solid hsla(0, 0%, 100%, 0.5);
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

[11.[2021-3-10] textarea 如何禁止拉伸？](https://github.com/HJY-xh/plantTrees/issues/45)

<details>
<summary>展开查看</summary>
<pre>
使用 CSS 样式可以避免拉伸:
```css
textarea {
  resize: none;
}
```
</pre>
</details>

[12.[2021-3-10] html 标签的默认 display 属性值是什么？](https://github.com/HJY-xh/plantTrees/issues/46)

<details>
<summary>展开查看</summary>
<pre>
block
</pre>
</details>

[13.[2021-3-11] display: none;与 visibility: hidden;有什么区别？](https://github.com/HJY-xh/plantTrees/issues/48)

<details>
<summary>展开查看</summary>
<pre>

相同点：它们都能让元素不可见

区别：

-   `display:none;`会让元素完全从渲染树中消失，渲染的时候不占据任何空间；`visibility: hidden;`不会让元素从渲染树消失，渲染时元素继续占据空间，只是内容不可见
-   `display: none;`是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示；`visibility: hidden;` 是继承属性，子孙节点由于继承了 `hidden` 而消失，通过设置 `visibility: visible;`，可以让子孙节点显示
-   修改常规流中元素的 `display` 通常会造成文档重排。修改 `visibility` 属性只会造成本元素的重绘
-   读屏器不会读取 `display: none;` 元素内容；会读取 `visibility: hidden;` 元素内容

</pre>
</details>

[14.[2021-3-12] CSS sprites 的原理和优缺点是什么？](https://github.com/HJY-xh/plantTrees/issues/51)

<details>
<summary>展开查看</summary>
<pre>

**_1. 简介_**

CSS Sprites 在国内很多人叫 css 精灵，是一种网页图片应用处理方式。它允许将一个页面涉及到的所有零星图片都包含到一张大图中， 利用 CSS 的 `background-image`、`background- repeat`、`background-position` 的组合进行背景定位， 访问页面时避免图片载入缓慢的现象。

**_2. 优点_**

-   CSS Sprites 能很好地减少网页的 http 请求，从而大大的提高页面的性能，这是 CSS Sprites 最大的优点，也是其被广泛传播和应用的主要原因；

-   CSS Sprites 能减少图片的字节；

-   CSS Sprites 解决了网页设计师在图片命名上的困扰，只需对一张集合的图片命名，不需要对每一个小图片进行命名，从而提高了网页制作效率；

-   CSS Sprites 只需要修改一张或少量图片的颜色或样式来改变整个网页的风格；

**_3. 缺点_**

-   图片合并麻烦：图片合并时，需要把多张图片有序的合理的合并成一张图片，并留好足够的空间防止版块出现不必要的背景；

-   图片适应性差：在高分辨的屏幕下自适应页面，若图片不够宽会出现背景断裂；

-   图片定位繁琐：开发时需要通过工具测量计算每个背景单元的精确位置；

-   可维护性差：页面背景需要少许改动，可能要修改部分或整张已合并的图片，进而要改动 css。在避免改动图片的前提下，又只能（最好）往下追加图片，但这样增加了图片字节；

</pre>
</details>

[14.[2021-3-15] position 的 absolute 与 fixed 有什么区别？](https://github.com/HJY-xh/plantTrees/issues/59)

<details>
<summary>展开查看</summary>
<pre>
共同点：
- 改变行内元素的呈现方式，display被置为block
- 让元素脱离普通流，不占据空间
- 默认会覆盖到非定位元素上

不同点：
absolute 的”根元素“是可以设置的，而 fixed 的”根元素“固定为浏览器窗口。当你滚动网页，fixed 元素与浏览器窗口之间的距离是不变的。

</pre>
</details>

[15.[2021-3-17] 如何理解 html 中的置换元素和非置换元素？](https://github.com/HJY-xh/plantTrees/issues/62)

<details>
<summary>展开查看</summary>
<pre>

### **什么是置换元素？**

一个 `内容` 不受 CSS 视觉格式化模型控制，CSS 渲染模型并不考虑对此内容的渲染，且元素本身一般拥有固有尺寸（宽度，高度，宽高比）的元素，被称之为置换元素。

### **什么是非置换元素？**

w3c 并没有给出明确的非置换元素的解释，但能确定的是除置换元素之外，所有的元素都是非置换元素。

### 行内级置换和非置换元素的**宽度**定义

对于行内级`非置换`元素，宽度设置是不适用的。
对于行内级`置换`元素来说，其宽度的设置需遵循以下几点：

-   若宽高的计算值都为 `auto` 且元素有固有宽度，则 `width` 的使用值为该固有宽度；

```html
典型的例子是：拥有默认宽高的 input 当宽度的计算值为auto时，则宽度使用值为其默认的固有宽度
```

-   若宽度的计算值为 `auto` 且高度有 `非auto` 的计算值，并且元素有固有宽高比，则 `width` 的使用值为 `高度使用值 * 固有宽高比`；

```html
典型的例子：img 当只定义了其高度值时，其宽度将会根据固有宽高比进行等比设置
```

-   除此之外，当 `width` 的计算值为 `auto` 时，则宽度的使用值为 `300px`

```html
典型的例子：比如iframe, canvas
```

其它类型的置换元素，其宽度的定义都参照行内置换元素的定义。

### 行内级置换和非置换元素的**高度**定义

对于行内级非置换元素，高度设置是不适用的。
对于行内级置换元素来说，其高度的设置需遵循以下几点：

-   若宽高的计算值都为 `auto` 且元素有固有高度，则 `height` 的使用值为该固有高度；
-   若高度的计算值为 `auto` 且元素有固有高度，则 `height` 的使用值为该固有高度；
-   若高度的计算值为 `auto` 且宽度有 `非auto` 的计算值，并且元素有固有宽高比，则 `height` 的使用值为：`宽度使用值 / 固有宽高比`；
-   若高度的计算值为 `auto` 且上述条件完全不符，则 `height` 的使用值 不能大于 150px，且宽度不能大于长方形高度的 2 倍。

其它类型的置换元素，其高度的定义都参照行内置换元素的定义。

</pre>
</details>

[16.[2021-3-26] 如何通过设置 css 样式的方式实现水平居中与垂直居中？](https://github.com/HJY-xh/plantTrees/issues/86)

<details>
<summary>展开查看</summary>
<pre>

### 1. 水平居中

-   inline 元素：text-align: center
-   block 元素：margin: auto
-   absolute 元素：left: 50% + margin-left 负宽度 1/2

### 2. 垂直居中

-   inline 元素：line-height 的值等于 height 的值
-   absolute 元素：top: 50% + margin-top 负高度 1/2 （需知道元素高度）
-   absolute 元素：transform(-50%, -50%) （不需知道元素高度，但有兼容性问题）
-   absolute 元素：top, left, bottom, right = 0 + margin: auto （不需知道元素高度，且无兼容性问题）

</pre>
</details>

[17.[2021-3-29] CSS 中的 z-index 是什么？](https://github.com/HJY-xh/plantTrees/issues/93)

<details>
<summary>展开查看</summary>
<pre>

当网页上出现多个由绝对定位（position:absolute）或固定定位（position:fixed）所产生的浮动层时，必然就会产生一个问题，就是当这些层的位置产生重合时，谁在谁的上面呢？或者说谁看得见、谁看不见呢？这时候就可以通过设置 z-index 的值来解决，这个值较大的就在上面，较小的在下面。

z-index 的意思就是在 z 轴的顺序，如果说网页是由 x 轴和 y 轴所决定的一个平面，那么 z 轴就是垂直于屏幕的一条虚拟坐标轴，浮动层就在这个坐标轴上，那么它们的顺序号就决定了谁上谁下了

</pre>
</details>

[18.[2021-3-29] 弹性盒子中 flex: 0 1 auto 是什么意思？](https://github.com/HJY-xh/plantTrees/issues/97)

<details>
<summary>展开查看</summary>
<pre>
三个参数分别对应的是 flex-grow, flex-shrink 和 flex-basis，默认值为0 1 auto。

flex-grow: 0; // 增长比例，子项合计宽度小于容器宽度，需要根据每个子项设置的此属性比例对剩下的长度进行分配
flex-shrink: 1; // 回缩比例，子项合计宽度大于容器宽度，需要根据每个子项设置的此属性比例对多出的长度进行分配
flex-basis: auto; // 设置了宽度跟宽度走，没设置宽度跟内容实际宽度走

看个 🌰

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<style>
			.container1 {
				width: 600px;
				height: 300px;
				display: flex;
			}
			.left1 {
				flex: 1 2 300px;
				background: #eaeaea;
			}
			.right1 {
				flex: 2 1 400px;
				background: #33ddee;
			}
			.container2 {
				width: 900px;
				height: 300px;
				display: flex;
			}
			.left2 {
				flex: 1 2 300px;
				background: #eaeaea;
			}
			.right2 {
				flex: 2 1 400px;
				background: #33ddee;
			}
		</style>
	</head>
	<body>
		<div class="container1">
			<div class="left1"></div>
			<div class="right1"></div>
		</div>
		<div class="container2">
			<div class="left2"></div>
			<div class="right2"></div>
		</div>
	</body>
</html>
```

分析 container1： 1.先确定看 flex-grow 还是 flex-shrink：父级宽度(600)<子集宽度之和(`300 + 400 = 700`)，因此子集需要收缩，收缩比`2:1` 2.收缩总量：`700 - 600 = 100`；权重计算:`2 * 300 + 1 * 400 = 1000`，left 最终宽：`300 - 100 * 2 * 300 / 1000 = 240`；right 最终宽度：`400 - 100 * 2 * 300 / 1000 = 360`

分析 container2： 1.先确定看 flex-grow 还是 flex-shrink：父级宽度(900)>子集宽度之和(`300 + 400 = 700`)，因此子集需要扩张，扩张比`1:2` 2.扩张总量：`900 - 700 = 200`；left 最终宽：`300 + 200 * 1 /（1+2) = 366`；right 最终宽度：`400 + 200 * 2 /（1+2） = 533`

</pre>
</details>

[19.[2021-3-30] CSS 优先级有哪些注意事项？](https://github.com/HJY-xh/plantTrees/issues/100)

<details>
<summary>展开查看</summary>
<pre>

-   每个选择器都有权值，权值越大越优先
-   继承的样式优先级低于自身指定样式
-   ！important 优先级最高 js 也无法修改
-   权值相同时，靠近元素的样式优先级高 顺序为内联样式表（标签内部）> 内部样式表（当前文件中）> 外部样式表（外部文件中）

</pre>
</details>

[20.[2021-4-9] BFC 是什么？](https://github.com/HJY-xh/plantTrees/issues/130)

<details>
<summary>展开查看</summary>
<pre>

> BFC 是 Block Formatting Context，也就是块级格式化上下文，是用于布局块级盒子的一块渲染区域。

简单来说，BFC 实际上是一块区域，在这块区域中遵循一定的规则，有一套独特的渲染规则。

文档流其实分为普通流、定位流和浮动流和三种，普通流其实就是指 BFC 中的 FC，也即格式化上下文。

-   普通流：元素按照其在 HTML 中的先后位置从上到下、从左到右布局，在这个过程中，行内元素水平排列，直到当行被占满然后换行，块级元素则会被渲染为完整的一个新行。

-   格式化上下文：页面中的一块渲染区域，有一套渲染规则，决定了其子元素如何布局，以及和其他元素之间的关系和作用。

使用 BFC 的几个注意点：

-   BFC 区域内的元素外边距会发生重叠
-   BFC 区域内的元素不会与浮动元素重叠
-   计算 BFC 区域的高度时，浮动元素也参与计算
-   BFC 区域就相当于一个容器，内部的元素不会影响到外部，同样外部的元素也不会影响到内部

BFC 的应用场景：

-   清除浮动：父元素设置`overflow: hidden`触发 BFC 实现清除浮动，防止父元素高度塌陷，后面的元素被覆盖，实现文字环绕等等。
-   消除相邻元素垂直方向的边距重叠：第二个子元素套一层，并设置 overflow: hidden，构建 BFC 使其不影响外部元素。
-   消除父子元素边距重叠，父元素设置`overflow: hidden`

下列方式会创建块格式化上下文：

-   根元素（）
-   浮动元素（元素的 float 不是 none）
-   绝对定位元素（元素的 position 为 absolute 或 fixed）
-   行内块元素（元素的 display 为 inline-block）
-   表格单元格（元素的 display 为 table-cell，HTML 表格单元格默认为该值）
-   表格标题（元素的 display 为 table-caption，HTML 表格标题默认为该值）
-   匿名表格单元格元素（元素的 display 为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是 HTML table、row、tbody、thead、tfoot 的默认属性）或 inline-table）
-   overflow 计算值(Computed)不为 visible 的块元素
-   display 值为 flow-root 的元素
-   contain 值为 layout、content 或 paint 的元素
-   弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）
-   网格元素（display 为 grid 或 inline-grid 元素的直接子元素）
-   多列容器（元素的 column-count 或 column-width (en-US) 不为 auto，包括 column-count 为 1）
-   column-span 为 all 的元素始终会创建一个新的 BFC，即使该元素没有包裹在一个多列容器中

</pre>
</details>

[21.[2021-4-9] 浮动元素为什么会使高度塌陷?](https://github.com/HJY-xh/plantTrees/issues/131)

<details>
<summary>展开查看</summary>
<pre>

导致高度塌陷的原因 在文档流中，父元素的高度默认是被子元素所撑开的，也就是说子元素有多高，父元素就有多高。

但是当为子元素设置浮动以后，子元素将完全脱离文档流，脱离文档流后子元素将无法撑起父元素的高度， 由于父元素的高度塌陷后，父元素下面的元素就会向上移动，这样将会导致整个页面的布局混乱。

</pre>
</details>

[22.[2021-4-13] CSS3 新增了哪些新特性？](https://github.com/HJY-xh/plantTrees/issues/139)

<details>
<summary>展开查看</summary>
<pre>

### 一、选择器

`CSS3` 中新增了一些选择器：

| 选择器           | 说明                                                                                          |
| ---------------- | --------------------------------------------------------------------------------------------- |
| E[attr^=“xxx”]   | 选择元素 E，其中 E 元素的 attr 属性是以 xxx 开头的任何字符                                    |
| E[attr$=“xxx”]   | 选择元素 E，其中 E 元素的 attr 属性是以 xxx 结尾的任何字符                                    |
| E[attr*=“xxx”]   | 选择元素 E，其中 E 元素的 attr 属性是包含 xxx 的任何字符                                      |
| E:first-child    | 选择父元素下的第一个子元素（该子元素类型为 E，以下类同）                                      |
| E:last-child     | 选择父元素下的最后一个子元素                                                                  |
| E:nth-child(n)   | 选择父元素下的第 n 个子元素或奇偶元素，n 取值有 3 种：数字、odd 和 even，其中 n 从 1 开始     |
| E:only-child     | 选择父元素下唯一的子元素，该父元素只有一个子元素                                              |
| E:first-of-type  | 选择父元素下的第一个 E 类型的子元素                                                           |
| E:last-of-type   | 选择父元素下的最后一个 E 类型的子元素                                                         |
| E:nth-of-type(n) | 选择父元素下的第 n 个 E 类型的子元素或奇偶元素，n 取值有 3 种：数字、odd 和 even，n 从 1 开始 |
| E:only-of-type   | 选择父元素下唯一的 E 类型的子元素，该父元素可以有多个子元素                                   |
| :focus           | 定义元素获取焦点时使用的样式                                                                  |
| ::selection      | 定义页面中被选中文本的样式                                                                    |
| :checked         | 定义单选框或复选框被选中时的样式（兼容性差）                                                  |
| :enabled         | 定义表单元素“可用”时的样式                                                                    |
| :disabled        | 定义表单元素“不可用”时的样式                                                                  |
| :read-write      | 定义表单元素“可读写”时的样式                                                                  |
| :read-only       | 定义表单元素“只读”时的样式                                                                    |
| :root            | 选择 HTML 页面的根元素                                                                        |
| :empty           | 选择一个“不包含任何子元素和内容”的元素                                                        |
| :target          | 选取页面中的某一个 target 元素                                                                |
| :not()           | 选取某一个元素之外的所有元素                                                                  |

### 二、新样式

### **边框**

`CSS3`新增了三个 边框属性，分别是：

-   border-radius：创建圆角边框
-   box-shadow：为元素添加阴影
-   border-image：使用图片来绘制边框

**box-shadow**

设置元素阴影，设置属性如下：

-   水平阴影
-   垂直阴影
-   模糊距离（虚实）
-   阴影尺寸（影子大小）
-   阴影颜色
-   内/外阴影

其中水平阴影和垂直阴影是必须设置的

### **背景**

新增了几个关于背景的属性，分别是`background-clip`、`background-origin`、`background-size`、`background-break`
**background-clip**

用于确定背景画区，有以下几种可能的属性：

-   background-clip: border-box; 背景从 border 开始显示
-   background-clip: padding-box; 背景从 padding 开始显示
-   background-clip: content-box; 背景从 cotent 区域开始显示
-   background-clip: no-clip; 默认属性，等同于 border-box

通常情况，背景都是覆盖整个元素的，利用这个属性可以设定背景颜色或图片的覆盖范围

**background-origin**

当我们设置背景图片时，图片是会以左上角对齐，但是是以`border`的左上角对齐还是以`padding`的左上角或者`content`的左上角对齐? `border-origin`正是用来设置这个的：

-   background-origin: border-box; 从 border 开始计算 background-position
-   background-origin: padding-box; 从 padding 开始计算 background-position
-   background-origin: content-box; 从 content 开始计算 background-position

**background-size**
`background-size`属性常用来调整背景图片的大小，主要用于设定图片本身。有以下可能的属性：

-   background-size: contain; 缩小图片以适合元素（维持像素长宽比）
-   background-size: cover; 扩展元素以填补元素（维持像素长宽比）
-   background-size: 100px 100px; 缩小图片至指定的大小
-   background-size: 50% 100%; 缩小图片至指定的大小，百分比是相对包含元素的尺寸

**background-break**

元素可以被分成几个独立的盒子（如使内联元素 span 跨越多行），`background-break` 属性用来控制背景怎样在这些不同的盒子中显示

-   background-break: continuous; 默认值。忽略盒之间的距离（也就是像元素没有分成多个盒子，依然是一个整体一样）
-   background-break: bounding-box; 把盒之间的距离计算在内；
-   background-break: each-box; 为每个盒子单独重绘背景

### **文字**

**word-wrap**

语法：`word-wrap: normal | break-word`

-   normal：使用浏览器默认的换行
-   break-all：允许在单词内换行

**text-overflow**
`text-overflow`设置或检索当当前行超过指定容器的边界时如何显示，属性有两个值选择：

-   clip：修剪文本
-   ellipsis：显示省略符号来代表被修剪的文本

**text-shadow**
`text-shadow`可向文本应用阴影。能够规定水平阴影、垂直阴影、模糊距离，以及阴影的颜色

**text-decoration**

CSS3 里面开始支持对文字的更深层次的渲染，具体有三个属性可供设置：

-   text-fill-color：设置文字内部填充颜色
-   text-stroke-color：设置文字边界填充颜色
-   text-stroke-width：设置文字边界宽度

### **颜色**

`CSS3`新增了新的颜色表示方式`rgba`与`hsla`

-   rgba 分为两部分，rgb 为颜色值，a 为透明度
-   hsla 分为四部分，h 为色相，s 为饱和度，l 为宽度，a 为透明度

### 三、transition 过渡

`transition`属性可以被指定为一个或多个`CSS`属性的过渡效果，多个属性之间用逗号进行分隔，必须规定两项内容：

-   过渡效果
-   持续时间

语法如下：

transition: css 属性，花费时间，效果曲线（默认 ease），延迟时间（默认 0）

### 四、transform 转换

`transform`属性允许你旋转，缩放，倾斜或平移给定元素

`transform-origin`：转换元素的位置（围绕哪个点进行转换），默认值为`(x, y, z) : (50%, 50%, 0)`

使用方式：

-   transform: translate(120px, 50%)：位移
-   transform: scale(2, 0.5)：缩放
-   transform: rotate(0.5turn)：旋转
-   transform: skew(30deg, 20deg)：倾斜

### 五、animation 动画

动画这个平常用的也很多，主要是做一个预设的动画。和一些页面交互的动画效果，结果和过渡应该一样，让页面不会那么生硬

animation 也有很多的属性：

-   animation-name：动画名称
-   animation-duration：动画持续时间
-   animation-timing-functino：动画时间函数
-   animation-delay：动画延迟时间
-   animation-iteration-count：动画执行次数，可以设置为一个整数，也可以设置为 infinite
-   animation-direction：动画执行方向
-   animation-paly-state：动画播放状态
-   animation-fill-mode：动画填充模式

### 六、渐变

颜色渐变是指在两个颜色之间平稳的过渡，`CSS3`渐变包括：

-   linear-gradient：线性渐变
    `background-image: linear-gradient(direction, color-stop1, color-stop2, ...);`
-   radial-gradient：径向渐变
    `linear-gradient(0deg, red, green);`

### 七、其他

除此之外，还包括 flex 弹性布局、Grid 栅格布局、多列布局、媒体查询、混合模式等等......

</pre>
</details>

[23.[2021-4-14] Grid 网格布局是什么？](https://github.com/HJY-xh/plantTrees/issues/144)

<details>
<summary>展开查看</summary>
<pre>

### 一、是什么

`Grid` 布局即网格布局，是一个**二维**的布局方式，由纵横相交的两组网格线形成的框架性布局结构，能够同时处理行与列

擅长将一个页面划分为几个主要区域，以及定义这些区域的大小、位置、层次等关系

![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_144/1.png)

设置`display:grid/inline-grid`的元素就是网格布局容器，这样就能触发浏览器渲染引擎的网格布局算法

```html
<div class="container">
	<div class="item item-1">
		<p class="sub-item"></p>
	</div>
	<div class="item item-2"></div>
	<div class="item item-3"></div>
</div>
```

上述代码实例中，`.container`元素就是网格布局容器，`.item`元素就是网格的项目，由于网格元素只能是容器的顶层子元素，所以`p`元素并不是网格元素

网格线，即划分网格的线：
![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_144/2.png)
上图是一个 **2 x 3** 的网格，共有**3 根**水平网格线和**4 根**垂直网格线

### 二、属性

`Grid`布局属性可分为两大类：

-   容器属性
-   项目属性

### 容器属性

**display 属性**

-   display：grid 则该容器是一个块级元素

-   display: inline-grid 则容器元素为行内元素

**gird-template-colums 属性，grid-template-rows 属性**

-   `grid-template-columns` 属性设置列宽
-   `grid-template-rows` 属性设置行高

```css
.wrapper {
	display: gird;
	/* 声明了三列，宽度分别为 200px 200px 200px */
	grid-template-columns: 200px 200px 200px;
	grid-gap: 5px;
	/* 声明了两行，行高分别为 50px 50px */
	grid-template-rows: 50px 50 px;
}
```

以上表示固定列宽为 200px 200px 200px，行高为 50px 50px
上述代码可以看到重复写单元格宽高，通过 **repeat()** 函数，可以简写重复的值

-   第一个参数是重复的次数
-   第二个参数是重复的值

```css
.wrapper {
	display: grid;
	grid-template-columns: repeat(3, 200px);
	grid-gap: 5px;
	grid-template-rows: repeat(2, 50px);
}
```

除了上述的`repeat`关键字，还有：

-   auto-fill：自动填充，让一行（或者一列）中尽可能容纳更多的单元格
    `grid-template-columns： repeat(auto-fill, 200px)`
    表示列宽是 200px，但列的数量是不固定的，只要浏览器能够容纳下，就可以放置元素

-   fr：片段，为了方便表示比例关系
    `grid-template-columns: 200px 1fr 2fr`
    表示第一个列宽为 200px，后面剩余的宽度分为两部分，宽度分别为剩余宽度的 1/3 和 2/3

-   minmax：产生一个长度范围，表示长度就在这个范围之中都可以应用到网格项目中。第一个参数是最小值，第二个参数是最大值
    `minmax(100px, 1fr)` 表示列宽不小于 100px，不大于 1fr

-   auto：浏览器自己决定长度
    `grid-template-columns：100px auto 100px`
    表示第一、第三列为 100px，中间由浏览器决定长度

**grid-row-gap 属性，grid-column-gap 属性，grid-gap 属性**
`grid-row-gap`属性、`grid-column-gap`属性分别设置行间距和列间距，`grid-gap`属性是两者的简写形式
`grid-row-gap: 10px` 表示行间距是 10px
`grid-column-gap: 20px` 表示列间距是 20px
`grid-gap: 10px 20px` 等同上述两个属性

**grid-template-areas 属性**
用于定义区域，一个区域由一个或者多个单元格组成

```css
.container {
	display: grid;
	grid-template-columns: 100px 100px 100px;
	grid-template-rows: 100px 100px 100px;
	grid-template-areas:
		" a b c"
		" d e f"
		" g h i";
}
```

上述代码先划分出 9 个单元格，然后将其定名为 a 到 i 的九个区域，分别对应这九个单元格。
多个单元格合并为一个区域的写法如下：

```css
grid-template-areas:
	" a a a"
	" b b b"
	" c c c";
```

上面代码将 9 个单元格分为 a、b、c 三个区域
如果某些区域不需要利用，则使用“点”（`.`）表示

**grid-auto-flow 属性**
划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。
顺序就是由`grid-auto-flow`决定，默认为行，代表“先行后列”，即先填满第一行，再开始放入第二行
![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_144/3.png)
当修改成`column`后，放置变为如下：
![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_144/4.png)

**justify-items 属性，align-items 属性，place-items 属性**
`justify-items`属性设置单元格的内容的水平位置（左中右）
`align-items`属性设置单元格的垂直位置（上中下）
两者属性的值完全相同

```css
.container {
	justify-items: start | end | center | stretch;
	align-items: start | end | center | stretch;
}
```

属性对应如下：

-   start：对齐单元格的起始边缘
-   end：对齐单元格的结束边缘
-   center：单元格内部居中
-   stretch：拉伸，占满单元格的整个宽度（默认值）
    `place-items`属性是`align-items`属性和`justify-items`属性的合并简写形式

**justify-content 属性，align-content 属性，place-content 属性**
`justify-content`属性是整个内容区域在容器里面的水平位置（左中右），`align-content`属性是整个内容区域的垂直位置（上中下）

```css
.container {
	justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
	align-content: start | end | center | stretch | space-around | space-between | space-evenly;
}
```

两个属性的写法完全相同，都可以取下面这些值：

-   start：对齐容器的起始边框
-   end：对齐容器的结束边框
-   center：容器内部居中

![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_144/5.png)

-   space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目容器边框的间隔大一倍
-   space-between：项目与项目的间隔相等，项目与容器边框之间没有间隔
-   space-evenly：项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔
-   stretch：项目大小没有指定时，拉伸占据整个网络容器
    ![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_144/6.png)

**grid-auto-columns 属性和 grid-auto-rows 属性**
有时候，一些项目的指定位置，在现有网格的外部，就会产生显示网格和隐式网格
比如网格只有 3 列，但是某一个项目指定在第 5 行，这时，浏览器会自动生成多余的网格，以便放置项目。超出的部分就是隐式网格
而`grid-auto-rows`与`grid-auto-columns`就是专门用于指定隐式网格的宽高

关于项目属性，有如下;
**grid-column-start 属性、grid-column-end 属性、grid-row-start 属性以及 grid-row-end 属性**
指定网格项目所在的四个边框，分别定位在哪根网络线，从而指定项目的位置

-   grid-column-start 属性：左边框所在的垂直网络线
-   grid-column-end 属性：右边框所在的垂直网格线
-   grid-row-start 属性：上边框所在的水平网格线
-   grid-row-end 属性：下边框所在的水平网格线

👇 举个例子 🌰：

```css
<style>
   #container{
       display: grid;
       grid-template-columns: 100px 100px 100px;
       grid-template-rows: 100px 100px 100px;
   }
   .item-1 {
       grid-column-start: 2;
       grid-column-end: 4;
   }
</style>

<div id="container">
   <div class="item item-1">1</div>
   <div class="item item-2">2</div>
   <div class="item item-3">3</div>
</div>
```

通过设置`grid-column`属性，指定 1 号项目的左边框是第二根垂直网格线，右边框是第四根垂直网格线
![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_144/7.png)

**grid-area 属性**
`grid-area`属性指定项目放在哪一个区域

```css
.item-1 {
	grid-area: e;
}
```

意思为将 1 号项目位于`e`区域

与上述讲到的`grid-template-areas`搭配使用

**justify-self 属性、align-self 属性以及 place-self 属性**
`justify-self`属性设置单元格内容的水平位置（左中右），跟`justify-items`属性的用法完全一致，但只作用于单个项目。
`align-self`属性设置单元格内容的垂直位置（上中下），跟`align-items`属性的用法完全一致，也是只作用于单个项目

```css
.item {
	justify-self: start | end | center | stretch;
	align-self: start | end | center | stretch;
}
```

这两个属性都可以取下面四个值。

-   start：对齐单元格的起始边缘。
-   end：对齐单元格的结束边缘。
-   center：单元格内部居中。
-   stretch：拉伸，占满单元格的整个宽度（默认值）

### 三、应用场景

`Grid`是一个强大的布局，如一些常见的 CSS 布局，如居中，两列布局，三列布局等等是很容易实现的。
总体兼容性还不错，但在 IE 10 以下不支持
目前，`Grid`布局在手机端支持还不算太友好

</pre>
</details>

[24.[2021-4-15] flexbox 是什么？](https://github.com/HJY-xh/plantTrees/issues/149)

<details>
<summary>展开查看</summary>
<pre>

### 一、是什么

`Flexible Box` 简称 `flex`，意为”弹性布局”，可以简便、完整、响应式地实现各种页面布局

采用 Flex 布局的元素，称为`flex`容器`container`

它的所有子元素自动成为容器成员，称为`flex`项目`item`

![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_149/1.png)

容器中默认存在两条轴，主轴和交叉轴，呈 90 度关系。项目默认沿主轴排列，通过`flex-direction`来决定主轴的方向

每根轴都有起点和终点，这对于元素的对齐非常重要

### 二、属性

关于`flex`常用的属性，可划分为容器属性和容器成员属性
**容器属性**有：

-   flex-direction
-   flex-wrap
-   flex-flow
-   justify-content
-   align-items
-   align-content

### flex-direction

决定主轴的方向（项目排列方向）

```css
.container {
	flex-direction: row | row-reverse | column | column-reverse;
}
```

属性对应如下：

-   row（默认值）：主轴为水平方向，起点在左端
-   row-reverse：主轴为水平方向，起点在右端
-   column：主轴为垂直方向，起点在上沿
-   column-reverse：主轴为垂直方向，起点在下沿

![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_149/2.png)

### flex-wrap

弹性元素永远沿主轴排列，那么如果主轴排不下，通过`flex-wrap`决定容器内项目是否可换行

```css
.container {
	flex-wrap: nowrap | wrap | wrap-reverse;
}
```

属性对应如下：

-   nowrap（默认值）：不换行
-   wrap：换行，第一行在上方
-   wrap-reverse：换行，第一行在下方

默认情况是不换行，但这里也不会任由元素直接溢出容器，会涉及到元素的弹性伸缩

### flex-flow

是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`

```css
.box {
	flex-flow: <flex-direction> || <flex-wrap>;
}
```

### justify-content

定义了项目在主轴上的对齐方式

```css
.box {
	justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

属性对应如下：

-   flex-start（默认值）：左对齐
-   flex-end：右对齐
-   center：居中
-   space-between：两端对齐，项目之间的间隔都相等
-   space-around：两个项目两侧间隔相等

![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_149/3.png)

### align-items

定义项目在交叉轴上如何对齐

```css
.box {
	align-items: flex-start | flex-end | center | baseline | stretch;
}
```

属性对应如下：

-   flex-start：交叉轴的起点对齐
-   flex-end：交叉轴的终点对齐
-   center：交叉轴的中点对齐
-   baseline: 项目的第一行文字的基线对齐
-   stretch（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度

### align-content

定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用

```css
.box {
	align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

属性对应如下：

-   flex-start：与交叉轴的起点对齐
-   flex-end：与交叉轴的终点对齐
-   center：与交叉轴的中点对齐
-   space-between：与交叉轴两端对齐，轴线之间的间隔平均分布
-   space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍
-   stretch（默认值）：轴线占满整个交叉轴

![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_149/4.png)

**容器成员属性**如下：

-   order
-   flex-grow
-   flex-shrink
-   flex-basis
-   flex
-   align-self

### order

定义项目的排列顺序。数值越小，排列越靠前，默认为 0

```css
.item {
	order: <integer>;
}
```

### flex-grow

当容器设为`flex-wrap: nowrap;`不换行的时候，容器宽度有不够分的情况，弹性元素会根据`flex-grow`来决定定义项目的放大比例（容器宽度 > 元素总宽度时如何伸展）
默认为`0`，即如果存在剩余空间，也不放大

```css
.item {
	flex-grow: <number>;
}
```

如果所有项目的`flex-grow`属性都为 1，则它们将等分剩余空间（如果有的话）

![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_149/5.png)

如果一个项目的`flex-grow`属性为 2，其他项目都为 1，则前者占据的剩余空间比其他项多一倍

![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_149/6.png)

弹性容器的宽度正好等于元素宽度总和，无多余宽度，此时无论`flex-grow`是什么值都不会生效

### flex-shrink

定义了项目的缩小比例（容器宽度<元素总宽度时如何收缩），默认为 1，即如果空间不足，该项目将缩小

```css
.item {
	flex-shrink: <number>; /* default 1 */
}
```

如果所有项目的`flex-shrink`属性都为**1**，当空间不足时，都将等比例缩小

如果一个项目的`flex-shrink`属性为**0**，其他项目都为**1**，则空间不足时，前者不缩小

![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_149/7.png)

### flex-basis

设置的是元素在主轴上的初始尺寸，所谓的初始尺寸就是元素在`flex-grow`和`flex-shrink`生效前的尺寸
浏览器根据这个属性，计算主轴是否有多余空间，默认值为`auto`，即项目的本来大小，如设置了`width`则元素尺寸由`width/height`决定（主轴方向），没有设置则由内容决定

```css
.item {
	flex-basis: <length> | auto; /* default auto*/
}
```

当设置为 0 的时候，会根据内容撑开
它可以设为跟`width`或`height`属性一样的值（如 350px），则项目将占据固定空间

### flex

`flex`属性是`flex-grow`、`flex-shrink`和`flex-basis`的简写，默认值为`0 1 auto`

```css
.item {
	flex: none | [ < "flex-grow" > < "flex-shrink" >? || < "flex-basis" >];
}
```

一些属性有：

-   flex: 1 = flex: 1 1 0%
-   flex: 2 = flex: 2 1 0%
-   flex: auto = flex: 1 1 auto
-   flex: none = flex: 0 0 auto，常用于固定尺寸不伸缩
    `flex: 1`和`flex: auto`的区别，可以归结于`flex-basis: 0`和`flex-basis: auto`的区别

当设置为 0 时（绝对弹性元素），此时相当于告诉`flex-grow`和`flex-shrink`在伸缩的时候不需要考虑我的尺寸

当设置为`auto`时（相对弹性元素），此时则需要在伸缩时将元素尺寸纳入考虑

注意：建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值

**align-self**
允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性

默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`

![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_149/8.png)

### 三、应用场景

我们能够通过`flex`简单粗暴的实现元素水平垂直方向的居中，以及在两栏三栏自适应布局中通过`flex`完成，这里就不再展开代码的演示

包括现在在移动端、小程序这边的开发，都建议使用`flex`进行布局

</pre>
</details>

[25.[2021-4-15] rem 及其转换原理是什么？](https://github.com/HJY-xh/plantTrees/issues/150)

<details>
<summary>展开查看</summary>
<pre>

rem 是 CSS3 新增的相对长度单位，是指相对于根元素 html 的 font-size 计算值的大小。

默认根元素的 font-size 都是 16px 的。如果想要设置 12px 的字体大小也就是 12px/16px = 0.75rem。

由于 px 是相对固定单位，因此字号大小无法随着浏览器进行缩放，rem 直接相对于根元素 html，避开层级关系，移动端新型浏览器对其支持较好。

</pre>
</details>

[26.[2021-4-16] 设备独立像素是什么？](https://github.com/HJY-xh/plantTrees/issues/152)

<details>
<summary>展开查看</summary>
<pre>

**设备独立像素（Device Independent Pixel）**：与设备无关的逻辑像素，代表可以通过程序控制使用的虚拟像素，是一个总体概念，包括了 CSS 像素

在 javaScript 中可以通过`window.screen.width/ window.screen.height` 查看

比如我们会说“电脑屏幕在 2560x1600 分辨率下不适合玩游戏，我们把它调为 1440x900 ，这里的“分辨率”（非严谨说法）指的就是**设备独立像素**

一个设备独立像素里可能包含 1 个或者多个物理像素点，包含的越多则屏幕看起来越清晰。
至于为什么出现设备独立像素这种虚拟像素单位概念，👇 下面举个例子 🌰：

📱iPhone 3GS 和 📱iPhone 4/4s 的尺寸都是 3.5 寸，但 📱iPhone 3GS 的分辨率是 320x480，📱iPhone 4/4s 的分辨率是 640x960

这意味着，📱iPhone 3GS 有 320 个物理像素，📱iPhone 4/4s 有 640 个物理像素

如果我们按照真实的物理像素进行布局，比如说我们按照 320 物理像素进行布局，到了 640 物理像素的手机上就会有一半的空白，为了避免这种问题，就产生了虚拟像素单位

我们统一 📱iPhone 3GS 和 📱 iPhone 4/4s 都是 320 个虚拟像素，只是在 iPhone 3GS 上，最终 1 个虚拟像素换算成 1 个物理像素，在 📱 iphone 4s 中，1 个虚拟像素最终换算成 2 个物理像素

至于 1 个虚拟像素被换算成几个物理像素，这个数值我们称之为**设备像素比**，也就是下面介绍的`dpr`

`dpr`
dpr（device pixel ratio），设备像素比，代表设备独立像素到设备像素的转换关系，在`JavaScript`中可以通过 `window.devicePixelRatio` 获取

计算公式如下：
**DPR = 设备像素 / 设备独立像素**

当设备像素比为 1:1 时，使用 1（1×1）个设备像素显示 1 个 CSS 像素

当设备像素比为 2:1 时，使用 4（2×2）个设备像素显示 1 个 CSS 像素

当设备像素比为 3:1 时，使用 9（3×3）个设备像素显示 1 个 CSS 像素

如下图所示：

![1](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_152/1.png)

当`dpr`为 3，那么`1px`的`CSS`像素宽度对应`3px`的物理像素的宽度，`1px`的`CSS`像素高度对应`3px`的物理像素高度

</pre>
</details>

[27.[2021-4-25] 常见的 position 值分别是相对于什么进行定位的？](https://github.com/HJY-xh/plantTrees/issues/179)

<details>
<summary>展开查看</summary>
<pre>

absolute 生成绝对定位的元素， 相对于最近一级的 定位不是 static 的父元素来进行定位。

fixed （老 IE 不支持）生成绝对定位的元素，通常相对于浏览器窗口或 frame 进行定位。

relative 生成相对定位的元素，相对于其在普通流中的位置进行定位。

static 默认值。没有定位，元素出现在正常的流中

</pre>
</details>

[28.[2021-4-28] 为什么要初始化 CSS 样式?](https://github.com/HJY-xh/plantTrees/issues/193)

<details>
<summary>展开查看</summary>
<pre>

因为浏览器的兼容问题，不同的浏览器对某些标签的默认值是不同的。如果没有初始化 CSS，往往会显示出浏览器之间的页面显示差异。

</pre>
</details>

[29.[2021-4-30] 通过 CSS 让一个元素在视觉上不可见有哪些方法？](https://github.com/HJY-xh/plantTrees/issues/200)

<details>
<summary>展开查看</summary>
<pre>

-   opacity: 0 这将会时元素不可见，但不会改变页面布局，并且，如果该元素已经绑定了一些事件，如 click 事件，那么点击该区域仍然能够触发点击事件
-   visibility: hidden 将该元素设置无不可见，但不会改变页面布局，也不回触发该元素已经绑定的事件
-   display: none 它使元素不显示，会改变页面布局

</pre>
</details>

[30.[2021-5-5] rgba() 和 opacity 的透明效果有什么不同？](https://github.com/HJY-xh/plantTrees/issues/214)

<details>
<summary>展开查看</summary>
<pre>

`opacity` 作用于元素以及元素内的所有内容（包括文字）的透明度。

`rgba()` 只作用于元素自身的颜色或其背景色，子元素不会继承透明效果。

</pre>
</details>

[31.[2021-5-7] 如何实现多行文本溢出显示省略号效果？](https://github.com/HJY-xh/plantTrees/issues/218)

<details>
<summary>展开查看</summary>
<pre>

代码如下 👇：

```css
div {
	margin: 0 auto;
	width: 300px;
	color: red;
	/*以下为重点*/
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
}
```

补充 ✍️**单行**文字溢出显示省略号：

```css
div {
	margin: 0 auto;
	width: 300px;
	color: red;
	/*以下为重点*/
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
```

</pre>
</details>
[32.[2021-5-7] sticky定位是什么？](https://github.com/HJY-xh/plantTrees/issues/219)

<details>
<summary>展开查看</summary>
<pre>

sticky 是 css 定位新增的属性；可以说是相对定位**relative**和固定定位**fixed**的结合；

它主要用在对 scroll 事件的监听上，简单说在滑动过程中，某个元素的距离其父元素的距离达到 sticky 粘性定位要求时，

position:sticky 这时的效果就相对于 fixed 定位，固定到适当的位置

这里有个 demo 可以自己尝试一下：[https://www.cnblogs.com/yuzhongyu/p/10517755.html](https://www.cnblogs.com/yuzhongyu/p/10517755.html)

</pre>
</details>

[33.[2021-5-19] 伪元素和伪类的区别和作用是什么？](https://github.com/HJY-xh/plantTrees/issues/252)

<details>
<summary>展开查看</summary>
<pre>

-   伪元素：在内容元素的前后插入额外的元素或样式，但是这些元素实际上并不在文档中生成。它们只在外部显示可见，但不会在文档的源代码中找到它们，因此，称为“伪”元素。例如：

```css
p::before {
	content: "第一章：";
}
p::after {
	content: "Hot!";
}
p::first-line {
	background: red;
}
p::first-letter {
	font-size: 30px;
}
```

-   伪类：将特殊的效果添加到特定选择器上。它是已有元素上添加类别的，不会产生新的元素。例如：

```css
a:hover {
	color: #ff00ff;
}
p:first-child {
	color: red;
}
```

总结：伪类是通过在元素选择器上加⼊伪类改变元素状态，⽽伪元素通过对元素的操作进⾏对元素的改变。

</pre>
</details>

[34.[2021-5-28] 为什么需要 CSS 预处理?](https://github.com/HJY-xh/plantTrees/issues/267)

<details>
<summary>展开查看</summary>
<pre>

基于 HTTP 的 Web 诞生后，CERN 的研究员们在文档样式的解决方案上面探索了多种方法，Håkon Wium Lie 提出的层叠样式表（Cascading Style Sheet，CSS）则从中脱颖而出。不过，从 1994 年诞生到 2018 年的今天，24 年来，CSS 也没有什么革命性的变化，尤其是在可编程性方面。它本身只是一种专有的数据格式，不具备图灵完备性，甚至不能定义变量。

目前的各种 CSS 预处理工具都是围绕着增强 CSS 的可编程能力而展开的，它们提供了许多可以提高开发效率的特性，包括但不限于：

-   声明与使用变量
-   函数定义
-   循环语句
-   嵌套式语法（这个其实是最方便的特性了，有望加入到 CSS 标准里）
-   本地模块化机制

</pre>
</details>

[35.[2021-6-2] px、em、rem 的区别及使用场景是哪些?](https://github.com/HJY-xh/plantTrees/issues/275)

<details>
<summary>展开查看</summary>
<pre>

三者区别：

-   px 是固定的像素，一旦设置了就无法跟随页面大小变化而变化
-   em 和 rem 相对于 px 更灵活，它们是相对长度单位，其长度不是固定的，更适用于响应式布局
-   em 是相对于父元素来设置字体大小，这样就会存在一个问题：进行任何元素设置时都有可能需要知道该元素的的父元素大小。rem 则是相对于根元素，只需要在根元素确定一个参考值。

使用场景：

-   对于只需要适配少量的移动设备，且分辨率对页面影响不大的，用 px 即可
-   对于需要适配各种移动设备的，使用 rem 更好

</pre>
</details>

[36.[2021-6-2] 浮动的工作原理是什么？](https://github.com/HJY-xh/plantTrees/issues/276)

<details>
<summary>展开查看</summary>
<pre>

定义：

非 IE 浏览器下，容器不设高度且子元素浮动时，容器高度不能被内容撑开。此时内容就会溢出到容器外面而影响布局。这种现象被称为浮动（溢出）。

工作原理：

-   浮动元素脱离文档流，不占据空间（引起”高度坍塌“现象）
-   浮动元素碰到包含它的边框或者其他浮动元素的边框停留

浮动元素可以左右移动，直到遇到另一个浮动元素或者遇到它外边缘的包含框。浮动框不属于文档流中的普通流，当元素浮动之后，不会影响块级元素的布局，只会影响内联元素布局。此时文档流中的普通流就会表现得该浮动框不存在一样的布局模式。当包含框的高度小于浮动框的时候，此时就会出现“高度塌陷”。

</pre>
</details>

[37.[2021-6-10] em 和 rem 如何转换为像素值？](https://github.com/HJY-xh/plantTrees/issues/294)

<details>
<summary>展开查看</summary>
<pre>

-   **em 是如何转换成 px 的**

    1.当使用 em 单位时，像素值是将 em 值乘以使用 em 单位的元素的字体大小，例如一个 div 的字体为 18px，设置它的宽高为 10em，那么此时宽高就是 18px \* 10em = 180px。

```CSS
    .test{
      width:10em;
      height:10em;
      background-color:#ff7d42;
      font-size:18px;
    }
```

一定要记住的是，em 是根据使用它的元素的 font-size 的大小来变化的，而不是根据父元素字体大小，有些元素大小是父元素的多少倍是因为继承了父元素中 font-size 的设定

2.em 单位的继承效果

使用 em 单位存在继承的时候，每个元素将自动继承其父元素的字体大小，继承的效果只能被明确的字体单位覆盖，比如 px 和 vw，只要父级元素上面一直有 font-size 为 em 单位，则会一直继承，但假如自己设置了 font-size 的单位为 px 的时候，则会直接使用自己的 px 单位的值

-   **rem 是如何转换成 px 的**

当使用 rem 时，页面转换为像素大小取决于根元素的字体大小乘 rem 的值，即 HTML 元素的字体大小乘 rem 的值。例如，根元素的字体大小为 16px，那么 10rem 就等同于 10rem \* 16px = 160px。

</pre>
</details>

[38.[2021-6-11] 如何解决 iPhone 和 iPad 下输入框默认内阴影？](https://github.com/HJY-xh/plantTrees/issues/297)

<details>
<summary>展开查看</summary>
<pre>

h5 移动端开发中，input 的 border 已经初始化设置为 none 了，根据需求进行了 border 样式的重置。但在苹果手机上渲染有问题。如下图所示：
![a](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_297/a.png)

通过以下代码设置样式：

```css
element {
	-webkit-appearance: none; //去掉苹果系统默认样式
}
```

解决后效果：
![b](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_297/b.png)

</pre>
</details>

[39.[2021-6-11] 如何解决移动端上下拖动滚动条时的卡顿问题？](https://github.com/HJY-xh/plantTrees/issues/298)

<details>
<summary>展开查看</summary>
<pre>

在手机端页面中，如果你对某个 div 或模块使用了 overflow: scroll 属性，特别是在 iPhone 端有时候上下拖动滚动条会比较卡，很不流畅，用户体验很差。为了解决这个问题可通过以下代码设置样式：

```css
body {
	-webkit-overflow-scrolling: touch;
	overflow-scrolling: touch;
}
```

**overflow-scrolling 为 CSS3 新增属性，Android 3+ 和 iOS 5+ 支持。**
**注：这段代码创建了带有硬件加速的系统级控件，效率很高；但是会消耗更多的内存。**

</pre>
</details>

[40.[2021-6-11] 如何解决移动端长时间按住页面出现闪退的问题？](https://github.com/HJY-xh/plantTrees/issues/299)

<details>
<summary>展开查看</summary>
<pre>

通过以下代码设置样式：

```css
element {
	-webkit-touch-callout: none;
}
```

</pre>
</details>

[41.[2021-6-23] 常见的字体有哪些？](https://github.com/HJY-xh/plantTrees/issues/336)

<details>
<summary>展开查看</summary>
<pre>

-   宋体 SimSun
-   黑体 SimHei
-   微软雅黑 Microsoft YaHei
-   微软正黑体 Microsoft JhengHei
-   新宋体 NSimSun
-   仿宋 FangSong
-   楷体 KaiTi
-   隶书 LiSu

</pre>
</details>

[42.[2021-6-29] gap 属性有什么作用？](https://github.com/HJY-xh/plantTrees/issues/352)

<details>
<summary>展开查看</summary>
<pre>

CSS 的 `gap`(沟槽） 属性的出现，帮助我们解决了以前一直比较麻烦的布局效果： ​

![1](https://user-images.githubusercontent.com/39485286/123771034-5176d580-d8fd-11eb-8886-11ef58744b2f.jpg)

如上图所示，有时候我们需要紧邻容器边缘没有任何间距，但相邻项目之间（水平或垂直方向）都有一定的间距的效果。在没有 gap 属性之前使用 margin 是很烦人的，特别是多行多列的时候更麻烦。

有了 gap 仅需要一行代码即可。 ​CSS 的 gap 属性是一个简写属性，分为 row-gap 和 column-gap ： ​

![2](https://user-images.githubusercontent.com/39485286/123771151-694e5980-d8fd-11eb-9763-b24992334a38.jpg)

该属性 gap 到目前为止只能运用于多列布局，Flexbox 布局和网格布局的容器上。这里看个 🌰

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<style>
			.container {
				width: 500px;
				height: 500px;
				background-color: #eee;
				display: flex;
				flex-wrap: wrap;
				gap: 300px;
			}
			.card {
				width: 100px;
				height: 100px;
				background-color: rgb(235, 206, 168);
			}
		</style>
	</head>
	<body>
		<div class="container">
			<div class="card"></div>
			<div class="card"></div>
			<div class="card"></div>
			<div class="card"></div>
		</div>
	</body>
</html>
```

该属性在 flex 布局中使用时，Safari 浏览器需要比较新的 14.1 的版本才能支持。

</pre>
</details>

[43.[2021-7-18] 网页置灰的效果如何实现？](https://github.com/HJY-xh/plantTrees/issues/387)

<details>
<summary>展开查看</summary>
<pre>

可以使用 filter 属性的 grayscale 方法实现整个网页置灰效果。

```css
.gray {
	filter: grayscale(100%);
}
```

为了兼容 IE8 等其他低版本浏览器，我们可以加上浏览器前缀和 svg 滤镜

```css
.gray {
	-webkit-filter: grayscale(1);
	-webkit-filter: grayscale(100%);
	-moz-filter: grayscale(100%);
	-ms-filter: grayscale(100%);
	-o-filter: grayscale(100%);
	filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale");
	filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
	filter: grayscale(100%);
}
```

</pre>
</details>

[44.[2021-7-24] CSS 让图文不可复制的方法是什么？](https://github.com/HJY-xh/plantTrees/issues/395)

<details>
<summary>展开查看</summary>
<pre>

CSS 属性`user-select`控制用户能否选中文本:

```
-webkit-user-select: none;
-ms-user-select: none;
-moz-user-select: none;
-khtml-user-select: none;
user-select: none;
```

</pre>
</details>

[45.[2021-7-31] CSS 是如何处理空白的？](https://github.com/HJY-xh/plantTrees/issues/408)

<details>
<summary>展开查看</summary>
<pre>

一般来说，CSS 对待空白的方式跟 HTML 差不多：解析时，连续的空白会被合并为一个空白（不论空白是空格，制表符还是换行符，甚至是他们的组合）

下面这几种编写方式效果一样:

```CSS
p{color:pink;}
p {color: pink;}
p {
    color: pink;}
p {
    color: pink;
}
p
{
    color
    :
        pink
        ;
}

```

唯一的要求是，要使用空白分隔，可以是空格、制表符或换行符，可以是单个空白，也可以任意数量的随意组合。

</pre>
</details>

[46.[2021-8-7] em 是如何转换成 px 的? ](https://github.com/HJY-xh/plantTrees/issues/423)

<details>
<summary>展开查看</summary>
<pre>

当时用 em 单位的时候，像素值是将 em 的值乘以使用 em 单位的元素的字体大小。

例如一个 div 的字体为 18px，设置它的宽高为 10em，那么此时宽高就是 18px \* 10em = 180px

看个例子：

```CSS
.test{
    width: 10em;
    height: 10em;
    background-color: #ff7d42;
    font-size: 18px;
}
/**
一定要记住的是，em 是根据使用它的元素的font-size 的大小来变化的，而不是根据父元素字体大小。
有些元素大小是父元素的多少倍，那是因为继承了父元素中font-size 的设定，所以才起到的作用。
*/
```

</pre>
</details>

[47.[2021-8-8] 写动画时, 最小时间间隔是多少?](https://github.com/HJY-xh/plantTrees/issues/427)

<details>
<summary>展开查看</summary>
<pre>

16.7ms

多数显示器默认频率是`60Hz`，即`1`秒刷新`60`次，所以理论上最小间隔为`1/60*1000ms=16.7ms`

</pre>
</details>

[48.[2021-8-20] vmin 和 vmax 是什么？](https://github.com/HJY-xh/plantTrees/issues/435)

<details>
<summary>展开查看</summary>
<pre>

-   vmin：视口高度 vw 和宽度 vh 两者之间的最小值
-   vmax：视口高度 vw 和宽度 vh 两者之间的最大值

</pre>
</details>

[49.[2021-8-20] GFC 是什么？](https://github.com/HJY-xh/plantTrees/issues/436)

<details>
<summary>展开查看</summary>
<pre>

GFC(GridLayout Formatting Contexts)直译为"网格布局格式化上下文"。

当为一个元素设置 display 值为 grid 的时候，此元素将会获得一个独立的渲染区域，我们可以通过在网格容器（grid container）上定义网格定义行（grid definition rows）和网格定义列（grid definition columns）属性各在网格项目（grid item）上定义网格行（grid row）和网格列（grid columns），为每一个网格项目（grid item）定义位置和空间。

那么 GFC 有什么用呢，和 table 又有什么区别呢？首先同样是一个二维的表格，但 GridLayout 会有更加丰富的属性来控制行列，控制对齐以及更为精细的渲染语义和控制。

</pre>
</details>

[50.[2021-8-24] :only-of-type 和:only-child 有什么区别？](https://github.com/HJY-xh/plantTrees/issues/438)

<details>
<summary>展开查看</summary>
<pre>

:only-of-type 匹配同胞中惟一的那种元素，而:only-child 只匹配完全没有同胞的元素。

</pre>
</details>

[51.[2021-8-25] 通过 CSS 让英文大写如何实现？](https://github.com/HJY-xh/plantTrees/issues/440)

<details>
<summary>展开查看</summary>
<pre>

```css
text-transform: uppercase;
```

</pre>
</details>

[52.[2021-8-27] 否定伪类使用的注意点有哪些？](https://github.com/HJY-xh/plantTrees/issues/444)

<details>
<summary>展开查看</summary>
<pre>

:not()伪类衣服在元素上，括号中是简单的选择符。

根据 W3C 的定义，简单的选择符指：

-   类型选择符
-   通用选择符
-   属性选择符
-   类选择符
-   ID 选择符
-   伪类

基本上，简单选择符是指没有祖辈 - 后代关系的选择符

否定伪类不能嵌套，因此`p:not(:not(p))是无效的

否定伪类可以串在一起，作用相当于“也不是”

</pre>
</details>

[53.[2021-8-28] CSS 有哪些全局关键字?](https://github.com/HJY-xh/plantTrees/issues/445)

<details>
<summary>展开查看</summary>
<pre>

CSS3 定义了几个“全局”关键字，规范中的每个属性都能使用：inherit、initial 和 unset。

-   inherit 关键字把元素的某个属性的值设为与父元素同一属性的值一样。也就是说，这个关键字强制继承，即便是在通常情况下不继承时。例子：border-color。
-   initial 关键字把属性的值设为预定义的初始值，不过，不是所有属性都有预定义的初始值。
-   unset 关键字是 inherit 和 initial 的通用替身。对继承的属性来说，unset 的作用与 inherit 一样；对不继承的属性来说，unset 的作用与 initial 一样

</pre>
</details>

[54.[2021-8-29] CSS 定义了哪些通用字体？](https://github.com/HJY-xh/plantTrees/issues/446)

<details>
<summary>展开查看</summary>
<pre>

CSS 定义了五种通用字体:

-   衬线字体（Serif）- 在每个字母的边缘都有一个小的笔触。它们营造出一种形式感和优雅感。
-   无衬线字体（Sans-serif）- 字体线条简洁（没有小笔画）。它们营造出现代而简约的外观。
-   等宽字体（Monospace）- 这里所有字母都有相同的固定宽度。它们创造出机械式的外观。
-   草书字体（Cursive）- 模仿了人类的笔迹。
-   幻想/奇幻字体（Fantasy）- 是装饰性/俏皮的字体。

</pre>
</details>

[55.[2021-10-10] 置换元素设置宽度时有什么需要注意的吗？](https://github.com/HJY-xh/plantTrees/issues/458)

<details>
<summary>展开查看</summary>
<pre>

当设置 width 为 auto 时，置换元素的 width 等于内容自身的宽度。

如果图像自身的宽度为 20 像素，那么图像宽度就为该数值。

</pre>
</details>

[56.[2021-10-11] 行内框的定义是什么？](https://github.com/HJY-xh/plantTrees/issues/459)

<details>
<summary>展开查看</summary>
<pre>

内容区加行距后得到的方框。对于非置换元素来说，行内框的高度正好等于 line-height 属性的值。对于置换元素而言，行内框的高度等于内容区的高度，因为置换元素没有行距。

</pre>
</details>

[57.[2021-10-11] 一行中各元素的行内框的高度是怎么确定的？](https://github.com/HJY-xh/plantTrees/issues/460)

<details>
<summary>展开查看</summary>
<pre>

1、确定行内各非置换元素和匿名文本的 font-size 和 line-height 值，后者减去前者，得到行距。行距除以 2，分别添加到字体框的上部和下部。
2、确定各置换元素的 height、margin-top、margin-bottom、padding-top、padding-bottom、border-top-width 和 border-bottom-width 值，各值相加。
3、确定各内容区在一行的基线上方和下放分别超出多少。（这不是件简单的事，要知道各元素和匿名文本的基线在哪里，以及一行的基线在何处，然后把它们对齐。另外，要把置换元素的底边与一行的基线对齐）
4、确定设定了 vertical-align 属性的元素纵向偏移有多少。这是为了查明元素的行内框向上或向下移动了多少，因为纵向对齐改变了元素与基线之间的距离。
5、知道所有的行内框位置后，计算行内框的高度：基线与最高的那个行内框的顶边之间的距离加上基线与最低那个行内框底边之间的距离。

</pre>
</details>

[58.[2021-10-16] 元素的背景会延伸到哪里？](https://github.com/HJY-xh/plantTrees/issues/464)

<details>
<summary>展开查看</summary>
<pre>

默认情况下会延伸到边框的外边界。

有些边框是间断的，例如 dotted 和 dashed，所以元素的北京会出现在边框的间隙中。

</pre>
</details>

[59.[2021-10-25] 轮廓与边框的区别？](https://github.com/HJY-xh/plantTrees/issues/470)

<details>
<summary>展开查看</summary>
<pre>

-   outline 是不占空间的，既不会增加额外的宽或者高；border 会占用宽度；因此 outline 不会象 border 那样影响元素的尺寸或者位置
-   outline 有可能是非矩形的；border 就是普通边框

</pre>
</details>

[60.[2021-10-27] 如何把背景固定在视区中？](https://github.com/HJY-xh/plantTrees/issues/472)

<details>
<summary>展开查看</summary>
<pre>

`background-attachment: fixed;`

</pre>
</details>
