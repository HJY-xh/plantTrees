## HTML 相关

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

这导致许多HTML转义和验证问题,在innerHTML中没有验证的机会，因此更容易在文档中插入错误代码，使网页不稳定。

例子：
1.对于绑定(bind)了大量事件的页面，使用innerHTML附加另一个元素将重新生成DOM元素，这意味着事件绑定(bind)可能会丢失。
2.eval("window.alert(document.cookie)")
</code></pre>
</details>
