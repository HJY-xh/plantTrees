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
