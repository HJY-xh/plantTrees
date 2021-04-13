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
