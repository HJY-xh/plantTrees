## babel 相关

[1.[2021-10-15] Babel 是什么？](https://github.com/HJY-xh/plantTrees/issues/463)

<details>
<summary>展开查看</summary>
<pre>

**Babel 是一个 JavaScript 编译器**

Babel 是一个工具链，主要用于将采用 ECMAScript 2015+ 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

-   语法转换
-   通过 Polyfill 方式在目标环境中添加缺失的特性（通过第三方 polyfill 模块，例如 core-js，实现）
-   源码转换 (codemods)

</pre>
</details>

[2.[2021-10-21] babel 的插件和预设执行顺序是什么样的？](https://github.com/HJY-xh/plantTrees/issues/467)

<details>
<summary>展开查看</summary>
<pre>

-   插件在预设之前运行
-   插件顺序从前往后排列
-   Preset 顺序是颠倒的（从后往前）

</pre>
</details>
