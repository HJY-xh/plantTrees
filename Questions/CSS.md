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

```
border: 10px solid hsla(0,0%,100%,.5);
background: white;
```

很可惜，出来的效果是这样的：

![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_75/uri.png)

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

```
典型的例子是：拥有默认宽高的 input 当宽度的计算值为auto时，则宽度使用值为其默认的固有宽度
```

-   若宽度的计算值为 `auto` 且高度有 `非auto` 的计算值，并且元素有固有宽高比，则 `width` 的使用值为 `高度使用值 * 固有宽高比`；

```
典型的例子：img 当只定义了其高度值时，其宽度将会根据固有宽高比进行等比设置
```

-   除此之外，当 `width` 的计算值为 `auto` 时，则宽度的使用值为 `300px`

```
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

```
z-index的意思就是在z轴的顺序，如果说网页是由x轴和y轴所决定的一个平面，那么z轴就是垂直于屏幕的一条虚拟坐标轴，浮动层就在这个坐标轴上，那么它们的顺序号就决定了谁上谁下了
```

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
