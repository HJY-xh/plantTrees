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
