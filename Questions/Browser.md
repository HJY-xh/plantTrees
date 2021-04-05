## 浏览器 相关

[1.[2021-2-23] 浏览器内多个标签页之间的通信方式有哪些？](https://github.com/HJY-xh/plantTrees/issues/9)

<details>
<summary>展开查看</summary>
<pre>

<a href="https://github.com/HJY-xh/plantTrees/tree/main/Demos/%5BJavaScript%5DpostMessage%E5%AE%9E%E4%BE%8B%E6%BC%94%E7%A4%BA">1.postMessage（可跨域）</a>
2.localStorage
3.WebSocket （可跨域）
4.BroadcastChannel （IE 不支持）
5.Cookies
6.Server-Sent Events

</pre>
</details>

[2.[2021-3-3] 浏览器内核是什么？](https://github.com/HJY-xh/plantTrees/issues/27)

<details>
<summary>展开查看</summary>
<pre>
浏览器最重要或者说核心的部分是“Rendering Engine”，可大概译为“渲染引擎”，不过我们一般习惯将之称为“浏览器内核”。

它负责对网页语法的解释（如标准通用标记语言下的一个应用 HTML、JavaScript）并渲染（显示）网页。 所以，通常所谓的浏览器内核也就是浏览器所采用的渲染引擎，渲染引擎决定了浏览器如何显示网页的内容以及页面的格式信息。

不同的浏览器内核对网页编写语法的解释也有不同，因此同一网页在不同的内核的浏览器里的渲染（显示）效果也可能不同，这也是网页编写者需要在不同内核的浏览器中测试网页显示效果的原因。

内核 主要分为两个部分：渲染引擎(Render Engine)和 JS 引擎

-   渲染引擎： 负责取得网页的内容（HTML、XML、图象等等）、整理信息（例如加入 CSS 等），以及计算网页的显示方式然后会输出至显示器或打印机。

-   JS 引擎： 执行 JavaScript 代码的程序或解释器，JS 引擎可以实现为标准解释器或即时编译器，它以某种形式将 JavaScript 编译为字节码。

</pre>
</details>

[3.[2021-3-4] 什么是重绘和回流？](https://github.com/HJY-xh/plantTrees/issues/28)

<details>
<summary>展开查看</summary>
<pre>
重绘：当一个元素的外观发生改变，但没有改变布局,重新把元素外观绘制出来的过程，叫做重绘。

回流：当 DOM 的变化影响了元素的几何信息(元素的的位置和尺寸大小)，浏览器需要重新计算元素的几何属性，将其安放在界面中的正确位置，这个过程叫做回流。回流也叫重排，简单的说就是重新生成布局，重新排列元素。

</pre>
</details>

[4.[2021-3-13] 什么是渐进增强？](https://github.com/HJY-xh/plantTrees/issues/53)

<details>
<summary>展开查看</summary>
<pre>
渐进增强是指在 web 设计时强调可访问性、语义化 HTML 标签、外部样式表和脚本。保证所有人都能访问页面的基本内容和功能同时为高级浏览器和高带宽用户提供更好的用户体验。核心原则如下:

-   所有浏览器都必须能访问基本内容
-   所有浏览器都必须能使用基本功能
-   所有内容都包含在语义化标签中
-   通过外部 CSS 提供增强的布局
-   通过非侵入式、外部 javascript 提供增强功能
-   end-user web browser preferences are respected
</pre>
</details>

[5.[2021-3-13] 什么是 CSP？](https://github.com/HJY-xh/plantTrees/issues/55)

<details>
<summary>展开查看</summary>
<pre>
CSP 指的是内容安全策略，它的本质是建立一个白名单，告诉浏览器哪些外部资源可以加载和执行。只需要配置规则，如何拦截由浏览器自己来实现。

通常有两种方式来开启 CSP，一种是设置 HTTP 首部中的` Content-Security-Policy`，一种是设置 meta 标签的方式` <meta http-equiv="Content-Security-Policy">`

</pre>
</details>

[6.[2021-3-14] 什么是 DOM 和 BOM？](https://github.com/HJY-xh/plantTrees/issues/56)

<details>
<summary>展开查看</summary>
<pre>
DOM 指的是文档对象模型，它指的是把文档当做一个对象来对待，这个对象主要定义了处理网页内容的方法和接口。

BOM 指的是浏览器对象模型，它指的是把浏览器当做一个对象来对待，这个对象主要定义了与浏览器进行交互的法和接口。BOM
的核心是 window，而 window 对象具有双重角色，它既是通过 js 访问浏览器窗口的一个接口，又是一个 Global（全局）
对象。这意味着在网页中定义的任何对象，变量和函数，都作为全局对象的一个属性或者方法存在。window 对象含有 locati
on 对象、navigator 对象、screen 对象等子对象，并且 DOM 的对象 document 对象也是 BOM 的 window 对
象的子对象。

</pre>
</details>

[7.[2021-3-16] 什么是 DOM 和 BOM？](https://github.com/HJY-xh/plantTrees/issues/61)

<details>
<summary>展开查看</summary>
<pre>
浏览器缓存分为强缓存和协商缓存，浏览器加载一个页面的简单流程如下：

-   浏览器先根据这个资源的 http 头信息来判断是否命中强缓存。如果命中则直接加在缓存中的资源，并不会将请求发送到服务器。（强缓存）
-   如果未命中强缓存，则浏览器会将资源加载请求发送到服务器。服务器来判断浏览器本地缓存是否失效。若可以使用，则服务器并不会返回资源信息，浏览器继续从缓存加载资源。（协商缓存）
-   如果未命中协商缓存，则服务器会将完整的资源返回给浏览器，浏览器加载新资源，并更新缓存。（新的请求）

</pre>
</details>

[8.[2021-3-21] 浏览器的渲染流程是怎么样的？](https://github.com/HJY-xh/plantTrees/issues/73)

<details>
<summary>展开查看</summary>
<pre>

-   构建 DOM 树（parse）：渲染引擎解析 HTML 文档，首先将标签转换成 DOM 树中的 DOM node（包括 js 生成的标签）**生成内容树**（Content Tree/DOM Tree）；
-   构建渲染树（construct）：解析对应的 CSS 样式文件信息（包括 js 生成的样式和外部 css 文件），而这些文件信息以及 HTML 中可见的指令（如）**，构建渲染树**（Rendering Tree/Frame Tree）；render tree 中每个 NODE 都有自己的 style，而且 render tree 不包含隐藏的节点(比如 display:none 的节点，还有 head 节点)，因为这些节点不会用于呈现
-   布局渲染树（reflow/layout）：从根节点递归调用，计算每一个元素的大小、位置等，给出每个节点所应该在屏幕上出现的精确坐标；
-   绘制渲染树（paint/repaint）：遍历渲染树，使用 UI 层来绘制每个节点。

</pre>
</details>

[9.[2021-3-23] documen.write 和 innerHTML 有什么区别？](https://github.com/HJY-xh/plantTrees/issues/78)

<details>
<summary>展开查看</summary>
<pre>

document.write 的内容会代替整个文档内容，会重写整个页面。

innerHTML 的内容只是替代指定元素的内容，只会重写页面中的部分内容。

</pre>
</details>

[10.[2021-4-5] V8 下的垃圾回收机制有哪些？](https://github.com/HJY-xh/plantTrees/issues/119)

<details>
<summary>展开查看</summary>
<pre>

V8 实现了准确式 GC，GC 算法采用了分代式垃圾回收机制。因此，V8 将内存（堆）分为新生代和老生代两部分。

</pre>
</details>
