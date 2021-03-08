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
