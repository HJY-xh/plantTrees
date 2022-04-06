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

通常有两种方式来开启 CSP，一种是设置 HTTP 首部中的 `Content-Security-Policy` ，一种是设置 meta 标签的方式 `<meta http-equiv="Content-Security-Policy">`

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

[11.[2021-4-5] 什么是新生代算法？](https://github.com/HJY-xh/plantTrees/issues/120)

<details>
<summary>展开查看</summary>
<pre>

新生代中的对象一般存活时间较短，使用 Scavenge GC 算法。

在新生代空间中，内存空间分为两部分，分别为 `From` 空间和 `To` 空间。在这两个空间中，必定有一个空间是使用的，另一个空间是空闲的。新分配的对象会被放入 From 空间中，当 From 空间被占满时，新生代 GC 就会启动了。算法会检查 From 空间中存活的对象并复制到 To 空间中，如果有失活的对象就会销毁。当复制完成后将 From 空间和 To 空间互换，这样 GC 就结束了。

</pre>
</details>

[12.[2021-4-5] 什么情况下对象会出现在老生代空间中？](https://github.com/HJY-xh/plantTrees/issues/121)

<details>
<summary>展开查看</summary>
<pre>

-   先确定新生代中的对象是否已经经历过一次 Scavenge 算法，如果经历过的话，会将对象从新生代空间移到老生代空间中。
-   To 空间的对象占比大小超过 25 %。在这种情况下，为了不影响到内存分配，会将对象从新生代空间移到老生代空间中。

</pre>
</details>

[13.[2021-4-5] 老生代算法是什么？](https://github.com/HJY-xh/plantTrees/issues/122)

<details>
<summary>展开查看</summary>
<pre>

老生代中的对象一般存活时间较长且数量也多，使用了两个算法，分别是标记清除算法和标记压缩算法。

老生代中的空间很复杂，有如下几个空间

```javascript
enum AllocationSpace {
  // TODO(v8:7464): Actually map this space's memory as read-only.
  RO_SPACE,    // 不变的对象空间
  NEW_SPACE,   // 新生代用于 GC 复制算法的空间
  OLD_SPACE,   // 老生代常驻对象空间
  CODE_SPACE,  // 老生代代码对象空间
  MAP_SPACE,   // 老生代 map 对象
  LO_SPACE,    // 老生代大空间对象
  NEW_LO_SPACE,  // 新生代大空间对象

  FIRST_SPACE = RO_SPACE,
  LAST_SPACE = NEW_LO_SPACE,
  FIRST_GROWABLE_PAGED_SPACE = OLD_SPACE,
  LAST_GROWABLE_PAGED_SPACE = MAP_SPACE
}
```

在老生代中，以下情况会先启动标记清除算法：

-   空间中对象超过一定限制
-   空间不够新生代对象转移到老生代中
-   某一个空间没有分块的时候

在这个阶段中，会遍历堆中所有的对象，然后标记活的对象，在标记完成后，销毁所有没有被标记的对象。在标记大型堆内存时，可能需要几百毫秒才能完成一次标记。这就会导致一些性能上的问题。

为了解决这个问题，2011 年，V8 从 stop-the-world 标记切换到增量标志。在增量标记期间，GC 将标记工作分解为更小的模块，可以让 JS 应用逻辑在模块间隙执行一会，从而不至于让应用出现停顿情况。

但在 2018 年，GC 技术又有了一个重大突破，这项技术名为并发标记。该技术可以让 GC 扫描和标记对象时，同时允许 JS 运行，你可以点击 [该博客](https://v8.dev/blog/concurrent-marking) 详细阅读。

清除对象后会造成堆内存出现碎片的情况，当碎片超过一定限制后会启动压缩算法。在压缩过程中，将活的对象像一端移动，直到所有对象都移动完成然后清理掉不需要的内存。

</pre>
</details>

[14.[2021-5-3] 页面可见性（Page Visibility API）有哪些用途？](https://github.com/HJY-xh/plantTrees/issues/207)

<details>
<summary>展开查看</summary>
<pre>

-   通过 visibilityState 的值检测页面当前是否可见，以及打开网页的时间
-   在页面被切换到其他后台进程的时候，自动暂停音乐或视频的播放

</pre>
</details>

[15.[2021-5-14] 什么是跨域资源共享(CORS)，它解决什么问题？](https://github.com/HJY-xh/plantTrees/issues/243)

<details>
<summary>展开查看</summary>
<pre>

CORS 全称为 Cross-Origin Resource Sharing，被译为跨域资源共享，新增了一组 HTTP 首部字段，允许服务器声明哪些源站有权限访问哪些资源。

跨域资源共享标准规范要求，对那些可能对服务器数据产生副作用的 HTTP 请求方法（特别是 GET 以外的 HTTP 请求，或者搭配某些 MIME 类型的 POST 请求），浏览器必须首先使用 OPTIONS 方法发 起一个预检请求，从而获知服务端是否允许该跨域请求。服务器确认允许之后，才发起实际的 HTTP 请求。在预检请求的返回中，服务器端也可以通知客户端，是否需要携带身份凭证。

当使用 Ajax 跨域请求时，浏览器报错：`Origin null is not allowed by Access-Control-Allow-Origin.`出现跨域的问题，如果用 JSONP 或者 proxy 的方式进行修改的话未免需要太大的工程量，所以采用 CORS 这种比较简单高效的技术。

相比 JSONP 的方式，CORS 更为高效。JSONP 由于它的原理只能实现 GET 请求，而 CORS 支持所有类型的 HTTP 请求。使用 CORS,可以使用普通的 ajax 实现跨域。

</pre>
</details>

[16.[2021-5-24] Web 开发中的用户代理是什么？](https://github.com/HJY-xh/plantTrees/issues/260)

<details>
<summary>展开查看</summary>
<pre>

用户代理是代表一个人的计算机程序，例如浏览器。

除了浏览器之外，用户代理可以是抓取网页的机器人、下载管理器或可以访问 Web 的其他应用程序。随着向服务器发送的每个请求， 浏览器包含一个可表明身份的 `User-Agent` HTTP 的协议头，叫作用户代理（UA，User Agent）字符串。此字符串通常标识浏览器、及其版本号及其主机操作系统。

垃圾邮件机器人、下载管理器和一些浏览器通常会发送一个假 UA 字符串来宣称自己是不同的客户端。这被称为用户代理欺骗。

用户代理的字符串可以被 JavaScript 在客户端中使用 `navigator.userAgent` 获取。

</pre>
</details>

[17.[2021-5-29] 渲染过程中遇到 JS 文件如何处理?](https://github.com/HJY-xh/plantTrees/issues/268)

<details>
<summary>展开查看</summary>
<pre>

JavaScript 的加载、解析与执行会阻塞文档的解析，也就是说，在构建 DOM 时，HTML 解析器若遇到了 JavaScript，那么它会暂停文档的解析，将控制权移交给 JavaScript 引擎，等 JavaScript 引擎运行完毕，浏览器再从中断的地方恢复继续解析文档。

也就是说，如果想要首屏渲染的越快，就越不应该在首屏就加载 JS 文件，这也是都建议将 script 标签放在 body 标签底部的原因。

当然在当下，并不是说 script 标签必须放在底部，因为可以给 script 标签添加 defer 或者 async 属性。

</pre>
</details>

[18.[2021-5-30] GUI 渲染线程有什么作用?](https://github.com/HJY-xh/plantTrees/issues/269)

<details>
<summary>展开查看</summary>
<pre>

它负责渲染浏览器页面，解析 HTML、CSS，构建 DOM 树、构建 CSSOM 树、构建渲染树和绘制页面；当界面需要重绘或由于某种操作引发回流时，该线程就会执行。

注意：GUI 渲染线程和 JS 引擎线程是互斥的，当 JS 引擎执行时 GUI 线程会被挂起，GUI 更新会被保存在一个队列中等到 JS 引擎空闲时立即被执行。

</pre>
</details>

[19.[2022-1-8] 从浏览器地址栏输入 url 到显示页面的步骤是什么?](https://github.com/HJY-xh/plantTrees/issues/505)

<details>
<summary>展开查看</summary>
<pre>

简单描述:

-   浏览器根据请求的`URL`交给`DNS`域名解析,找到真是`IP`地址,向服务器发起请求
-   服务器交给后台处理完成后返回数据,浏览器接收文件(HTML\JS\CSS\文件)
-   浏览器对加载到的资源进行语法解析,建立相应的内部数据结构(比如`HTML`的`DOM`
-   载入解析到的资源文件，渲染页面

</pre>
</details>

[20.[2022-1-9] 常见的浏览器内核是什么？](https://github.com/HJY-xh/plantTrees/issues/508)

<details>
<summary>展开查看</summary>
<pre>

IE：trident 内核
FireFox：gecko 内核
Safari：webkit 内核
Chrome：Blink（基于 webkit）

</pre>
</details>

[21.[2022-1-26] 浏览器内核中线程之间的关系是什么样的？](https://github.com/HJY-xh/plantTrees/issues/521)

<details>
<summary>展开查看</summary>
<pre>

-   GUI 渲染线程和 JS 引擎线程互斥
    -   JS 是可以操作 DOM 的，如果在修改节点的同时渲染页面，那么可能会发生冲突
-   JS 阻塞页面加载
    -   JS 如果执行时间过长就会阻塞页面

</pre>
</details>

[22.[2022-3-7] DOMContentLoaded 和 Load 两个事件有什么区别？](https://github.com/HJY-xh/plantTrees/issues/539)

<details>
<summary>展开查看</summary>
<pre>

-   DOMContentLoaded 事件发生后，说明页面已经构建好 DOM，这意味着 DOM 所需要的 HTML 文件、JavaScript 文件、CSS 文件都已经下载完成了
-   Load 事件则说明浏览器已经下载好了所有资源（包括图像）

</pre>
</details>

[23.[2022-3-12] 同源策略如何保障安全？](https://github.com/HJY-xh/plantTrees/issues/543)

<details>
<summary>展开查看</summary>
<pre>

同源策略会隔离不同源的 DOM、页面数据和网络通信，进而实现 Web 页面的安全性

</pre>
</details>

[24.[2022-3-12] CSP 是什么？](https://github.com/HJY-xh/plantTrees/issues/544)

<details>
<summary>展开查看</summary>
<pre>

通过 HTTP 响应头中设定 CSP 的规则，可以规定当前页面可以加载的资源的白名单，从而减少网页收到 XSS 攻击的风险。

因此 CSP 可以理解成一个在现代浏览器加载资源白名单的安全机制，只有响应头中白名单里列出的资源才能被加载、执行。

</pre>
</details>
