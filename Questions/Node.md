## Node 相关

[1.[2021-2-23] npm 是什么？](https://github.com/HJY-xh/plantTrees/issues/10)

<details>
<summary>展开查看</summary>
<pre>
npm是Node.js中管理和分发包的工具，可用于安装、卸载、发布、查看包等。
</pre>
</details>

[2.[2021-2-24] EventEmitter 是什么？](https://github.com/HJY-xh/plantTrees/issues/11)

<details>
<summary>展开查看</summary>
<pre>
EventEmitter是Node.js中一个实现观察者类模式的类，主要功能是订阅和发布消息，用于解决多模块交互而产生模块之间的耦合问题。
</pre>
</details>

[3.[2021-4-13] EventEmitter 做了什么？](https://github.com/HJY-xh/plantTrees/issues/142)

<details>
<summary>展开查看</summary>
<pre>
Node.js 中任何对象发出的事件都是 EventEmitter 类的实例，就像 http 模块。

所有 EventEmitter 类都可以使用 eventEmitter.on() 函数将事件侦听器附加到事件。然后一旦捕捉到这样的事件，就会同步地逐个调用它的侦听器。

看个 🌰 ：

```javascript
const events = require("events");
const eventEmitter = new events.EventEmitter();
const eventListener = function () {
	console.log("event triggered");
};
eventEmitter.on("emitted", eventListener);
eventEmitter.emit("emitted");
// event triggered
```

相关 issues:https://github.com/HJY-xh/plantTrees/issues/11

</pre>
</details>

[4.[2021-4-13] Node 中流的概念是什么?](https://github.com/HJY-xh/plantTrees/issues/143)

<details>
<summary>展开查看</summary>
<pre>

在说流之前我们先说一下流数据：它就是字节数据,在应用程序中各种对象之间交换与传输数据的时候，总是先将该对象中所包含的数据转化为字节数据也就是流数据。再通过流的传输，到达目的对象后,再将流数据转化为该对象中可以使用的数据。

从上面可知,流就是用来传输流数据的，它是一种传输手段。流是为 Node.js 应用程序提供动力的基本概念之一。

它们是一种以高效的方式处理读/写文件、网络通信、或任何类型的端到端的信息交换。

Stream 流是从源读取或写入数据并将其传输到连续流目标的管道。有四种类型：

-   可读 Readable
-   可写 Writable
-   可读写 Duplex
-   先写入，再读出来 Transform

每个流也是一个 EventEmitter。这意味着流对象可以在流上没有数据、流上有可用数据或流中的数据在程序刷新时发出事件。

看个读取文件的 🌰 :

```javascript
const fs = require("fs");
const readableStream = fs.createReadStream("source.txt");
let content = "";
readableStream.on("data", (chunk) => {
	content += chunk;
});
readableStream.on("end", () => {
	console.log(content);
});
```

[官方文档](http://nodejs.cn/learn/nodejs-streams)

</pre>
</details>

[5.[2021-5-3] npm 模块安装机制是什么样的？](https://github.com/HJY-xh/plantTrees/issues/206)

<details>
<summary>展开查看</summary>
<pre>

-   执行`npm install`命令查询 node_modules 目录之中是否已经存在指定模块
-   若存在，不再重新安装
-   若不存在，npm 向 registry 查询模块压缩包的地址
-   下载压缩包，存放在根目录下.npm 目录中
-   解压压缩包到当前项目的 node_modules 目录

</pre>
</details>

[6.[2021-5-7] package.json 参数含义以及常用配置](https://github.com/HJY-xh/plantTrees/issues/220)

<details>
<summary>展开查看</summary>
<pre>

## 一、package.json

1.  属性
    `version`表明了当前的版本。
    `name `设置了应用程序/软件包的名称。
    `description `是应用程序/软件包的简短描述。
    `main `设置了应用程序的入口点。
    `private` 如果设置为 true，则可以防止应用程序/软件包被意外地发布到 npm。
    `scripts` 定义了一组可以运行的 node 脚本。
    `dependencies` 设置了作为依赖安装的 npm 软件包的列表。
    `devDependencies` 设置了作为开发依赖安装的 npm 软件包的列表。
    `engines` 设置了此软件包/应用程序在哪个版本的 Node.js 上运行。
    `browserslist` 用于告知要支持哪些浏览器（及其版本）。

2.  特殊属性

3.  软件包版本：

"express": "^4.17.1"

"express": "~4.17.1"

"express": "4.17.1"
`^`: 只会执行不更改最左边非零数字的更新。 如果写入的是 ^0.13.0，则当运行 npm update 时，可以更新到 0.13.1、0.13.2 等，但不能更新到 0.14.0 或更高版本。 如果写入的是 ^1.13.0，则当运行 npm update 时，可以更新到 1.13.1、1.14.0 等，但不能更新到 2.0.0 或更高版本。
`~`: 如果写入的是 〜0.13.0，则当运行 npm update 时，会更新到补丁版本：即 0.13.1 可以，但 0.14.0 不可以。
`>`: 接受高于指定版本的任何版本。
`>=`: 接受等于或高于指定版本的任何版本。
`<=`: 接受等于或低于指定版本的任何版本。
`<`: 接受低于指定版本的任何版本。[http://nodejs.cn/learn/semantic-versioning-using-npm`=`](http://nodejs.cn/learn/semantic-versioning-using-npm%60=%60): 接受确切的版本。
`-`: 接受一定范围的版本。例如：2.1.0 - 2.6.2。
`||`: 组合集合。例如 < 2.1 || > 2.6。
`无符号`: 仅接受指定的特定版本（例如 1.2.1）。
`latest`: 使用可用的最新版本。

## 二、package-lock.json

如果写入的是 `〜0.13.0`，则只更新补丁版本：即 0.13.1 可以，但 0.14.0 不可以。

如果写入的是` ^0.13.0`，则要更新补丁版本和次版本：即 0.13.1、0.14.0、依此类推。

如果写入的是 `0.13.0`，则始终使用确切的版本。

参考文献：
[使用 npm 的语义版本控制](http://nodejs.cn/learn/semantic-versioning-using-npm)
[package.json 指南](http://nodejs.cn/learn/the-package-json-guide)
[package-lock.json 文件](http://nodejs.cn/learn/the-package-lock-json-file)

</pre>
</details>

[7.[2021-5-13] Node 的高性能体现在哪里？](https://github.com/HJY-xh/plantTrees/issues/241)

<details>
<summary>展开查看</summary>
<pre>

-   执行速度快

Node.js 是构建在 Chrome V8 引擎之上的，执行速度可能是动态语言运行时环境里最快的。

-   天生异步

事件驱动和非阻塞 I/O 特性决定了 Node.js 必须采用异步机制，每个 I/O 任务都是异步的，因此集成到 libuv 的事件循环里才能让开发者代码对并发操作无感知。

-   适用于 I/O 密集的网络应用开发

网络应用开发（包括 Web 应用开发）的瓶颈在于 I/O 处理，而这恰恰是 Node.js 的强项。对于 CPU 密集型应用而言，能够使用其他语言开发最好使用其它语言，如果必须使用 Node.js，可以通过 C/C++拓展机制来实现。

</pre>
</details>
