## JavaScrit 相关

[1.[2021-2-20] encodeURI()和 decodeURI()的作用是什么？](https://github.com/HJY-xh/plantTrees/issues/2)

<details>
<summary>展开查看</summary>
<pre>
encodeURI()用于将URL转换为十六进制编码。而decodeURI()用于将编码的URL转换为正常URL。
</pre>
</details>

[2.[2021-2-21] 为什么不建议在 JavaSript 中使用 innerHTML？](https://github.com/HJY-xh/plantTrees/issues/3)

<details>
<summary>展开查看</summary>
<pre><code>
通过innerHTML修改内容，它将清除所选DOM元素的内容，并用当时恰好分配的内容替换它们。

这导致许多 HTML 转义和验证问题,在 innerHTML 中没有验证的机会，因此更容易在文档中插入错误代码，使网页不稳定。

例子： 1.对于绑定(bind)了大量事件的页面，使用 innerHTML 附加另一个元素将重新生成 DOM 元素，这意味着事件绑定(bind)可能会丢失。
2.eval("window.alert(document.cookie)")
</code></pre>

</details>

[3.[2021-2-22] 如何取消冒泡？](https://github.com/HJY-xh/plantTrees/issues/8)

<details>
<summary>展开查看</summary>
<pre>
在IE的事件模型中，必须设置事件对象的cancelBubble属性为true。例如：window.event.cancalBubble = true；
在W3C的事件模型中必须调用事件的stopPropagation()方法。例如：e.stopPropagation()。
</pre>
</details>
