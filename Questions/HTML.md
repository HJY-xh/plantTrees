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
| ------------- | ------------------------------------------------------------------ |
| width         | 设置 layout viewport 的宽度，为一个正整数                          |
| initial-scale | 设置页面的初始缩放值，为一个数字，可以带小数                       |
| minimum-scale | 允许用户的最小缩放值，为一个数字，可以带小数                       |
| maximum-scale | 允许用户的最大缩放值，为一个数字，可以带小数                       |
| height        | 设置 layout viewport 的高度，这个属性并不重要，很少使用            |
| user-scalable | 是否允许用户进行缩放，值为"no"或"yes", no 代表不允许，yes 代表允许 |

`viewport` 是在 `meta` 标签内进行控制。

```html
// width=device-width, initial-scale=1.0 是为了兼容不同浏览器 <meta name="viewport"
content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable="no" />
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

[6.[2021-3-5] 什么是事件委托？](https://github.com/HJY-xh/plantTrees/issues/31)

<details>
<summary>展开查看</summary>
<pre>

概念：事件委托指的是，不在事件的发生地（直接 dom）上设置监听函数，而是在其父元素上设置监听函数，通过事件冒泡，父元素可以监听到子元素上事件的触发，通过判断事件发生元素 DOM 的类型，来做出不同的响应。

例子：最经典的就是 ul 和 li 标签的事件监听，比如我们在添加事件时候，采用事件委托机制，不会在 li 标签上直接添加，而是在 ul 父元素上添加。

优点：

-   比较合适动态元素的绑定，新添加的子元素也会有监听函数，也可以有事件触发机制
-   提高 JavaScript 性能。事件委托可以显著的提高事件的处理速度，减少内存的占用

</pre>
</details>

[7.[2021-3-6] src 和 href 的区别是什么？](https://github.com/HJY-xh/plantTrees/issues/33)

<details>
<summary>展开查看</summary>
<pre>

-   href 是超文本引用，它是指向资源的位置，建立与目标文件的联系
-   src 目的是把资源下载到页面中
-   浏览器解析 href 不会阻塞对文档的处理（这就是官方建议使用 link 引入而不是 @ import 的原因），src 会阻塞对文档的处理。

</pre>
</details>

[8.[2021-3-11] HTML 中 b 与 strong 的区别、i 与 em 的区别是什么？](https://github.com/HJY-xh/plantTrees/issues/47)

<details>
<summary>展开查看</summary>
<pre>

**_b 与 strong 的区别_**

-   定义

1. b(bold)是实体标签，用来给文字加粗
2. strong 是逻辑标签，作用是加强字符语气

-   区别

1. b 标签只是加粗的样式，没有实际含义，常用来表达无强调或着中意味的粗体文字
2. strong 表示标签内字符重要，用以强调，其默认格式是加粗，但是可以通过 css 添加样式，使用别的样式强调

_为了符合 css3 的规范语义化，b 应尽量少用而改用 strong_

**_i 与 em 的区别_**

-   定义

1. i(italic)是实体标签，用来使字符倾斜
2. em(emphasis)是逻辑标签，作用是强调文本内容

-   区别

1. i 标签只是斜体的样式，没有实际含义，常用来表达无强调或着重意味的斜体，比如生物学名、术语、外来语；
2. em 表示标签内字符重要，用以强调，其默认格式是斜体，但是可以通过 CSS 添加样式。

_为了符合 CSS3 的规范，i 应尽量少用而改用 em_

</pre>
</details>

[9.[2021-3-11] 什么是 FOUC?如何避免?](https://github.com/HJY-xh/plantTrees/issues/49)

<details>
<summary>展开查看</summary>
<pre>
Flash Of Unstyled Content：用户定义样式表加载之前浏览器使用默认样式渲染文档，用户样式加载渲染之后再重新渲染文档，造成页面闪烁。
解决方法：把样式表放到文档的head。
</pre>
</details>

[10.[2021-3-18] 怎么理解 HTML 元素的显示优先级？](https://github.com/HJY-xh/plantTrees/issues/64)

<details>
<summary>展开查看</summary>
<pre>

**在 html 中，帧元素（frameset）的优先级最高，表单元素比非表单元素的优先级要高**

表单元素：

> 文本输入框，密码输入框，单选框，复选框，文本输入域，列表框等等

非表单元素：

> 链接（a），div, table, span 等等

**有窗口元素比无窗口元素的优先级高**

有窗口元素：

> select 元素，object 元素，以及 frames 元素等等

无窗口元素：

> 大部分 html 元素都是无窗口元素

`z-index` 属性也可以改变显示优先级，但只对同种类型的元素才有效。如果两个元素分别为 **表单元素** 和 **非表单元素** 那么 `z-index` 是无效的

</pre>
</details>

[11.[2021-3-19] input 元素中 readonly 和 disabled 属性是什么？](https://github.com/HJY-xh/plantTrees/issues/67)

<details>
<summary>展开查看</summary>
<pre>

在表现上 `readonly` 和 `disabled` 都不能让用户对 `input` 进行编辑。但从含义上来看两者还是有较大的差别的。

`readonly` 直译为 “只读”，一般用于只允许用户填写一次的信息，提交过一次之后，就不允许再次修改了。

`disabled` 直译为 “禁用”，即这个 `input` 就是不允许填写和使用的（可能是因为权限或者其他原因）。

因此在外观上，`readonly` 与普通 `input` 无异，只是点击后无法进行编辑；而 `disabled` 的 `input` 呈灰色，也不允许点击。从这两点其实也可以看出，对于 `input` 的事件，`readonly` 会响应，而 `disabled` 是不响应的。并且在传输数据上，`disabled` 的数据是不会被获取和上传，`readonly` 的数据会被获取和上传。

</pre>
</details>

[12.[2021-3-19] dir 属性有什么作用？](https://github.com/HJY-xh/plantTrees/issues/68)

<details>
<summary>展开查看</summary>
<pre>

dir 属性用来规定元素中文字的方向。有效值有两个：ltr(从左到右)、rtl(从右到左)。

```javascript
<!-- dir属性应用 -->
<p dir="ltr">从左到右</p>
<p dir="rtl">从右到左</p>
```

</pre>
</details>

[13.[2021-3-22] "form"标签的 enctype 属性是什么？](https://github.com/HJY-xh/plantTrees/issues/74)

<details>
<summary>展开查看</summary>
<pre>

`<form>` 标签的 `enctype` 属性，用来控制表单上传的数据的编码格式。其值和 HTTP 请求的 `Content-type` 值一样。在数据提交到服务器之前，会以 `enctype` 的值进行编码。
`enctype` 对应的值如下

| 值                                | 用法                                                                                  |
| --------------------------------- | ------------------------------------------------------------------------------------- |
| application/x-www-form-urlencoded | 默认值，会对所有字符转进行编码 （将空格转换为 "+" 符号，特殊字符转换为 ASCII HEX 值） |
| multipart/form-data               | 不会对字符进行编码，当表单中有文件时必须要此编码                                      |
| text/plain                        | 将空格转换为 "+" 符号，但不编码特殊字符                                               |

</pre>
</details>

[14.[2021-3-23] 怎么理解属性 HTML5 中的 data- 属性？](https://github.com/HJY-xh/plantTrees/issues/77)

<details>
<summary>展开查看</summary>
<pre>

原本 HTML 也允许自定义 `attributes` 。因此在早期前端，为了将数据塞在标签中，往往会采用自定义属性存放数据的方法。

而 `data-` 便是 HTML 5 中用来存放数据的标签。使用 `data-*` 时，需要注意，`data-` 之后的单词必须是**小写**的，但是可以用多个 `-` 连接。而在对应的 DOM 方法中，我们可以通过 `ele.dataset[属性名]` 进行访问。在这里的属性名可以使用驼峰（转换规则和 vue 的组件名称转换一样）。

相比之前的自定义属性存放数据，使用 `data-*` 的方法，在数据的获取上会比较方便。

</pre>
</details>

[15.[2021-3-24] GBK 和 UTF-8 是什么？并思考一下页面上产生乱码的可能原因](https://github.com/HJY-xh/plantTrees/issues/80)

<details>
<summary>展开查看</summary>
<pre>

**理解**

-   GBK 编码：是指中国的中文字符，其它它包含了简体中文与繁体中文字符，另外还有一种字符“gb2312”，这种字符仅能存储简体中文字符。
-   UTF-8 编码：它是一种全国家通过的一种编码，如果你的网站涉及到多个国家的语言，那么建议你选择 UTF-8 编码。

**二者区别**

-   GBK 编码格式，它的功能少，仅限于中文字符，当然它所占用的空间大小会随着它的功能而减少，打开网页的速度比较快。
-   UTF8 编码格式很强大，支持所有国家的语言，正是因为它的强大，才会导致它占用的空间大小要比 GBK 大，对于网站打开速度而言，也有一定的影响。

**乱码原因**

可参考：[html 乱码原因与网页乱码解决方法](https://akcms.zlck.com/manual/akcms/charset-error.htm)

</pre>
</details>

[16.[2021-3-29] 怎么理解影子（Shadow）DOM？](https://github.com/HJY-xh/plantTrees/issues/94)

<details>
<summary>展开查看</summary>
<pre>

`Shadow DOM` 可以想象成我们在 Vue 或者 React 中使用的一个个组件，是一种将 HTML 结构、Style 封装起来的结构。我们熟悉的 `<video>` 标签，其实就是 `Shadow DOM` 的封装。
![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_94/1.png)

借用 MDN 上的图，可以看到 `Shadow DOM` 允许我们在 DOM 文档中插入一个 DOM 的子树。`Shadow Tree` 会挂在 `Shadow host` 对应的 DOM 上。之后，`Shadow DOM` 与外层 DOM 不会相互影响，因此可以放心用来做组件。
![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_94/2.png)

</pre>
</details>

[17.[2021-4-16] label 标签有什么作用？如何使用？](https://github.com/HJY-xh/plantTrees/issues/154)

<details>
<summary>展开查看</summary>
<pre>

label 标签用来定义表单控制间的关系,当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。

它有两种用法：

-   通过 id 绑定

```javascript
<label for="age">年龄:</label>
<input type="text" id="age" />
```

-   嵌套

```javascript
<label>
	姓名:
	<input type="text" />
</label>
```

</pre>
</details>

[18.[2021-5-3] link 标签各属性有什么作用？](https://github.com/HJY-xh/plantTrees/issues/208)

<details>
<summary>展开查看</summary>
<pre>

-   href 规定被链接文档的位置
-   hreflang 规定被链接文档中文本的语言
-   media 规定被链接文档将被显示在什么设备上
-   rel 规定当前文档与被链接文档之间的关系
-   sizes 规定被链接资源的尺寸（仅适用于 rel = "icon")
-   type 规定被链接文档的 MIME 类型

</pre>
</details>

[19.[2021-5-6] HTML5 中的 drag API 有哪些？](https://github.com/HJY-xh/plantTrees/issues/215)

<details>
<summary>展开查看</summary>
<pre>

-   dragstart：事件主体是**被拖放元素**，在开始拖放被拖放元素时触发
-   drag：事件主体是**被拖放元素**，在正在拖放被拖放元素时触发
-   dragenter：事件主体是**目标元素**，在被拖放元素进入某元素时触发
-   dragover：事件主体是**目标元素**，在被拖放元素在某元素内移动时触发
-   dragleave：事件主体是**目标元素**，在被拖放元素移出目标元素时触发
-   drop：事件主体是**目标元素**，在目标元素完全接受被拖放元素时触发
-   dragend：事件主体是**被拖放元素**，在整个拖放操作结束时触发

### 补充：HTML5 新增的文件操作对象

File：代表一个文件对象
FileList：代表一个文件列表对象，类数组
FileReader：用于从文件中读取数据
FileWriter：用于向文件中写数据

### 例：

```
div.ondrop = function(e){
  var f = e.dataTransfer.files[0];    //找到拖放文件
  var fr = new FileReader();    //创建文件读取器
  fr.readAsURLData(f);    //读取文件内容
  fr.onload = function(){
    img src = fr.result;    //使用读取到的数据
  }
}
```

主要配合 drag 事件使用，常用于页面中拖放文件上传等操作，更多详情资料见拓展阅读：[HTML5--拖拽 API](https://blog.csdn.net/paullinjie/article/details/80691193)

</pre>
</details>

[20.[2021-4-30] 电商平台常见的 meta 有哪些？](https://github.com/HJY-xh/plantTrees/issues/201)

<details>
<summary>展开查看</summary>
<pre>

以下皆以[https://world.taobao.com 为例：](https://world.taobao.com%E4%B8%BA%E4%BE%8B%EF%BC%9A)

META 标签是 HTML 标记 HEAD 区的一个关键标签，提供文档字符集、使用语言、作者等基本信息，以及对关键词和网页等级的设定等，最大的作用是能够做搜索引擎优化（SEO）。

以下皆以https://world.taobao.com为例：

META 标签是 HTML 标记 HEAD 区的一个关键标签，提供文档字符集、使用语言、作者等基本信息，以及对关键词和网页等级的设定等，最大的作用是能够做搜索引擎优化（SEO）。

### 1. name 属性

```html
<!-- 页面关键词 keywords 有利于seo-->
<meta name="keywords" content="**" />
<!-- 页面关键词 description 有利于seo-->
<meta name="description" content="***" />
<!-- 多核时指定渲染内核为webkit -->
<meta name="renderer" content="webkit" />
<!-- 没查到，自定义？-->
<meta name="spm-id" content="a2141.241046-jp" />
<!--适配移动设备屏幕大小-->
<meta
	id="viewport"
	name="viewport"
	content="width=device-width,initial-scale=1,user-scalable=yes,maximum-scale=1"
/>
<!-- 用于google认证，享受google的服务，有利于seo-->
<!--类似的还有baidu-site-verification,sogou-site-verification--->
<meta name="google-site-verification" content="KtdGedNynGGK36BaVzMLbVB14YqvY1PdSZGSUV5Un-8" />
```

### 2. http-equiv

```html
<!---告诉IE使用最新的引擎渲染网页->
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<!--打开dns预读取，有利于提升网站性能-->
<meta http-equiv="x-dns-prefetch-control" content="on" />
<!--字符编码-->
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
```

### 3. charset

```html
<meta charset="utf-8" />
```

</pre>
</details>

[21.[2021-5-22] head 标签有什么作用？](https://github.com/HJY-xh/plantTrees/issues/258)

<details>
<summary>展开查看</summary>
<pre>

标签用于定义文档的头部，它是所有头部元素的容器。 中的元素可以引用脚本、指示浏览器在哪里找到样式表、提供元信息等。

文档的头部描述了文档的各种属性和信息，包括文档的标题、在 Web 中的位置以及和其他文档的关系等。

下面这些标签可用在 head 部分：, , , <script>, <style>, <title>

</pre>
</details>

[22.[2021-5-23] img 标签的 srcset 属性的作⽤是什么？](https://github.com/HJY-xh/plantTrees/issues/259)

<details>
<summary>展开查看</summary>
<pre>

响应式页面中经常用到根据屏幕密度设置不同的图片。这时就用到了 img 标签的 srcset 属性。srcset 属性用于设置不同屏幕密度下，img 会自动加载不同的图片。用法如下：

```html
<img src="image-128.png" srcset="image-256.png 2x" />
```

使用上面的代码，就能实现在屏幕密度为 1x 的情况下加载 image-128.png, 屏幕密度为 2x 时加载 image-256.png。
按照上面的实现，不同的屏幕密度都要设置图片地址，目前的屏幕密度有 1x,2x,3x,4x 四种，如果每一个图片都设置 4 张图片，加载就会很慢。所以就有了新的 srcset 标准。代码如下：

```html
<img
	src="image-128.png"
	srcset="image-128.png 128w, image-256.png 256w, image-512.png 512w"
	sizes="(max-width: 360px) 340px, 128px"
/>
```

其中 srcset 指定图片的地址和对应的图片质量。sizes 用来设置图片的尺寸零界点。对于 srcset 中的 w 单位，可以理解成图片质量。如果可视区域小于这个质量的值，就可以使用。浏览器会自动选择一个最小的可用图片。
sizes 语法如下：

```html
sizes="[media query] [length], [media query] [length] ... "
```

sizes 就是指默认显示 128px, 如果视区宽度大于 360px, 则显示 340px。

</pre>
</details>
