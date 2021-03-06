## webpack 相关

[1.[2021-3-6] webpack 有哪些概念？](https://github.com/HJY-xh/plantTrees/issues/32)

<details>
<summary>展开查看</summary>
<pre>

-   Entry：入口，Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入。
-   Module：模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。
-   Chunk：代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割。
-   Loader：模块转换器，用于把模块原内容按照需求转换成新内容。
-   Plugin：扩展插件，在 Webpack 构建流程中的特定时机会广播出对应的事件，插件可以监听这些事件的发生，在特定时机做对应的事情。
-   Output：打包后文件输出的位置。

</pre>
</details>

[2.[2021-3-8] webpack 提供哪些打包模式？](https://github.com/HJY-xh/plantTrees/issues/38)

<details>
<summary>展开查看</summary>
<pre>

打包模式相关参数为：mode，在打包时配置它是为了告诉 webpack 使用相应模式的内置优化。
mode 有三种模式：

-   development（开发环境打包）
-   production（生产环境打包，亦为默认值）
-   none（不适用任何默认优化选项）

</pre>
</details>

[3.[2021-3-25] sourceMap 是什么？](https://github.com/HJY-xh/plantTrees/issues/84)

<details>
<summary>展开查看</summary>
<pre>

sourceMap 是一项将编译、打包、压缩后的代码映射回源代码的技术。

由于打包压缩后的代码并没有阅读性可言，一旦在开发中报错或者遇到问题，直接在混淆代码中 debug 问题会带来非常糟糕的体验，sourceMap 可以帮助开发中快速定位到源代码的位置，提高开发效率。

sourceMap 其实并不是 Webpack 特有的功能，而是 Webpack 支持 sourceMap，像 JQuery 也支持 souceMap。

</pre>
</details>

[4.[2021-6-3] 如何⽤ webpack 来优化前端性能？](https://github.com/HJY-xh/plantTrees/issues/280)

<details>
<summary>展开查看</summary>
<pre>

用 webpack 优化前端性能是指优化 webpack 的输出结果，让打包的最终结果在浏览器里运行更加快速高效。

-   压缩代码：有删除多余的代码、注释、简化代码的写法等等方式
-   利用 CDN 加速：在构建过程中，将引用的静态资源路径修改为 CDN 上对应的路径。可以利用 webpack 对于 output 参数和各 loader 的 publicPath 参数来修改资源路径
-   Tree Shaking：将代码中永远不会走到的片段删除掉
-   Code Splitting: 将代码按路由维度或者组件分块(chunk),这样做到按需加载,同时可以充分利⽤浏览器缓存
-   提取公共第三⽅库: SplitChunksPlugin 插件来进⾏公共模块抽取,利⽤浏览器缓存可以⻓期缓存这些⽆需频繁变动的公共代码

</pre>
</details>
