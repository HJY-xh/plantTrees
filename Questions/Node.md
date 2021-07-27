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
    `version` 表明了当前的版本。
    `name` 设置了应用程序/软件包的名称。
    `description` 是应用程序/软件包的简短描述。
    `main` 设置了应用程序的入口点。
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

如果写入的是 `^0.13.0`，则要更新补丁版本和次版本：即 0.13.1、0.14.0、依此类推。

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

[8.[2021-5-15] CommonJS 和 Node.js 的关系是什么样的？](https://github.com/HJY-xh/plantTrees/issues/244)

<details>
<summary>展开查看</summary>
<pre>

Node.js 借鉴 CommonJS 模块规范实现了一套非常易用的模块系统，npm 对模块规范的完美支持，也是的 Node.js 应用开发事半功倍。

尽管他们有些不同，但大家还是习惯说，Node.js 是基于 CommonJS 规范的。先有规范，后有实现，这种在实现过程中做过改进的规范和原规范的关系，用“基于”来概括也并不为过。

CommonJS 项目定义了一系列的规范，可以辅助 JavaScript 应用程序在服务端进行开发。Node.js 开发人员起初打算完全遵循 CommonJS 规范，但后来又推翻了起初的摄像，因为设计模块时，CommonJS 非常影响 Node.js 的实现。

Node.js 和 CommonJS 在模块系统中主要通过两个关键字进行交互，即 require 和 export。require 是一个用于引入模块的函数，参数是所需模块的标识。在 Node.js 的实现中，模块的名字 node_modules 目录下，如果不在，就会去查找指定路径。exports 是一个特殊的对象，它的任何输出都将作为一个对外暴露的公共 API。

Node.js 和 CommonJS 的区别主要体现在 module.exports 对象的具体实现上：

-   在 Node.js 中，module.exports 是真正的特殊对象，是真正的对外暴露接口，而 exports 只是一个变量，是被默认的 module.exports 绑定的
-   CommonJS 规范里没有 module.exports 对象。在 Node.js 中，它的实际含义是一个完全预先构建的对象，不经过 module.exports 是不可能对外暴露的

</pre>
</details>

[9.[2021-5-16] Node.js 中模块的核心是什么？](https://github.com/HJY-xh/plantTrees/issues/245)

<details>
<summary>展开查看</summary>
<pre>

Node.js 对模块的定义十分简单，主要分为模块引用、模块定义和模块标识 3 个部分。

其中常用的模块处理命令如下：

-   require：用来引用模块
-   export：用来到处模块，包括标识符和模块内容
    -   module.exports：对外导出的对象只能有 1 个
    -   exports.×××：对外导出的值可以有多个

require 其实还有按需加载的含义，就像前端常见的 AMD、CMD、UMD 规范等，当多次引用一个模块的时候，该模块只会被加载一次，其他情况下都在缓存中加载，不需要重新加载，这其实就是 Node.js 的模块缓存机制。

</pre>
</details>

[10.[2021-5-16] Node.js 的可拓展体现在哪里？](https://github.com/HJY-xh/plantTrees/issues/246)

<details>
<summary>展开查看</summary>
<pre>

-   可以使用 npm 上的大量模块
-   可以通过编写 C/C++扩展实现 CPU 密集型任务
-   可以轻松搭配 Java、Rust 等语言使用
-   架构互补：在架构上以业务边界来进行服务拆分，外加各种“组合拳”，可以让合适的轮子出现在合适的位置上，比如 Java 在基础平台建设及大数据等领域有非常身后的基础，那么直接使用即可

</pre>
</details>

[11.[2021-6-2] 怎么理解 Node.js？](https://github.com/HJY-xh/plantTrees/issues/274)

<details>
<summary>展开查看</summary>
<pre>

`Node.js` 是一个开源与跨平台的 `JavaScript` 运行时环境

在浏览器外运行 V8 JavaScript 引擎（Google Chrome 的内核），利用事件驱动、非阻塞和异步输入输出模型等技术提高性能

可以理解为 `Node.js` 就是一个服务器端的、非阻塞式 I/O 的、事件驱动的 `JavaScript` 运行环境

### 非阻塞异步

`Nodejs` 采用了非阻塞型 `I/O` 机制，在做 `I/O` 操作的时候不会造成任何的阻塞，当完成之后，以事件的形式通知执行操作

例如在执行了访问数据库的代码之后，将立即转而执行其后面的代码，把数据库返回结果的处理代码放在回调函数中，从而提高

了程序的执行效率

### 事件驱动

事件驱动就是当进来一个新的请求的时，请求将会被压入一个事件队列中，然后通过一个循环来检测队列中的事件状态变化，如

果检测到有状态变化的事件，那么就执行该事件对应的处理代码，一般都是回调函数

比如读取一个文件，文件读取完毕后，就会触发对应的状态，然后通过对应的回调函数来进行处理

</pre>
</details>

[12.[2021-6-13] Node 在 V8 引擎之上构建的好处是什么？](https://github.com/HJY-xh/plantTrees/issues/306)

<details>
<summary>展开查看</summary>
<pre>

Node 在选型时决定在 V8 引擎之上构建，也就意味着它的模型和浏览器类似。我们的 JavaScript 将会运行在单个进程的单个线程上。它带来的好处是：程序状态是单一的，在没有多线程的情况下没有锁、线程同步问题，操作系统在调度时也因为较少上下文的切换，可以很好地提高 CPU 的使用率。

</pre>
</details>

[13.[2021-6-15] 为什么要异步 I/O?](https://github.com/HJY-xh/plantTrees/issues/315)

<details>
<summary>展开查看</summary>
<pre>

关于异步 I/O 为何在 Node 里如此重要，这与 Node 面向网络而设计不无关系。Web 应用已经不再是单台服务器就能胜任的时代了，在跨网络的结构下，并发已经是现在编程中的标准配备了。具体到实处，则可以从用户体验和资源分配这两个方面说起。

</pre>
</details>

[14.[2021-6-15] 异步 I/O:用户体验](https://github.com/HJY-xh/plantTrees/issues/316)

<details>
<summary>展开查看</summary>
<pre>

异步的概念之所以首先在 Web2.0 中火起来，是因为在浏览器中 JavaScript 在单线程上执行，而且它还与 UI 渲染共用一个线程。这意味着 JavaScript 在执行的时候 UI 渲染和和相应是处于停滞状态的。《高性能 JavaScript》一书中曾经总结过，如果脚本的执行时间超过 100 毫秒，用户就会感觉到页面卡顿，意味网页停止响应。

在 B/S 模型中，网络速度的限制给网页的实施体验造成很大麻烦。如果网页临时需要获取一个网络资源，通过同步的方式获取，那么 JavaScript 则需要等待资源完全从服务器端获取后才能继续执行，这期间 UI 将停顿，不响应用户的交互行为。可以想象，这样的用户体验将会多差。而采用异步请求，在下载资源期间，JavaScript 和 UI 的执行都不会处于等待状态，可以继续响应用户的交互行为，给用户一个鲜活的页面。

同理，前端通过异步可以消除掉 UI 阻塞的现象，但是前端获取资源的速度也取决于后端的响应速度，假如一个资源来自于两个不同位置的数据的返回，第一个资源需要 M 毫秒的耗时，第二个资源需要 N 毫秒的耗时。如果采用同步的方式，代码大致如下：

```javascript
// 消费时间M
getData("from_db");
// 消费时间N
getData("from_remote_api");
```

但是如果采用异步方式，第一个资源的获取并不会阻塞第二个资源，也即第二个资源的请求，并不依赖第一个资源的结束。这样就能享受到并发的优势，代码如下：

```javascript
getData('from_db'， function(result){
// 消费时间M
});

getData('from_remote_api'， function(result){
// 消费时间N
});
```

对比两者的时间总消耗，前者为 M+N，后者为 max(M，N）

随着应用复杂性的增加，情景将会变成 M+N+...和 max(M，N，...），同步与异步的优劣将会凸显出来。另一方面，随着网站或应用不断膨胀，数据将会分布到多台服务器上，分布式将会是常态。分布也以为这 M 与 N 的值会线性增长，这也会放大异步和同步在性能方面的差异。

还可以了解一下从 CPU 一级缓存到网络的数据访问所需要的开销，这里不提。

这就是异步 I/O 在 Node 中如此盛行。

I/O 是昂贵的，分布式 I/O 是更昂贵的。

</pre>
</details>

[15.[2021-6-16] 异步 I/O:资源分配](https://github.com/HJY-xh/plantTrees/issues/318)

<details>
<summary>展开查看</summary>
<pre>

计算机在发展过程中将组建进行了抽象，分为 I/O 设备和计算设备。

假设业务场景中有一组互不相关的任务需要完成，现行的主流方法又以下两种:

-   单线程串行依次执行
-   多线程并行完成

如果创建多线程的开销小于并行执行，那么多线程的方式是首选的。多线程的代价在于创建线程和执行期线程上下文切换的开销较大。另外，在复杂的业务中，多线程编程经常面临锁、状态同步等问题，这是多线程被诟病的主要原因。但是多线程在多核 CPU 上能够有效提升 CPU 的利用率，这个优势是毋庸置疑的。

单线程顺序执行任务的方式比较符合编程人员按顺序思考的思维方式。它易于表达，但是串行执行的的缺点在于性能，任意一个略慢的任务都会导致后续执行代码被阻塞。在计算机资源中，通常 I/O 和 CPU 计算之间是可以并行进行的。但是同步的编程模型导致的问题是，I/O 的进行会让后续任务等待，这造成资源不能被更好地利用。

操作系统会将 CPU 的时间片分配给其余进程，以公平而有效地利用资源，基于这一点，有的服务器为了提升响应能力，会通过启动多个工作进程来为更多的用户服务。但是对于这一组任务而言，它无法分发任务到多个进程上，所以依然无法高效利用资源，结束所有任务所需的时间将会较长。这种模式类似于加三倍服务器达到占用更多资源来提升服务速度，它并没能真正改善问题。

添加硬件资源是一种提升服务质量的方式，但它不是唯一的方式。

单线程同步编程模型会因阻塞 I/O 导致硬件资源得不到更优的使用。多线程编程模型也因为编程中的死锁、状态同步等问题让开发人员头疼。

Node 在两者之间给出了它的方案：利用单线程，远离多线程死锁、状态同步等问题；利用异步 I/O，让单线程远离阻塞，以更好地使用 CPU。

异步 I/O 可以算作 Node 的特色，因为它是收个大规模将异步 I/O 应用在应用层上的平台，它力求单线程上在将资源分配得更高效。

为了弥补单线程无法利用多核 CPU 的缺点，Node 提供了类似前端浏览器中 Web worker 的子进程，该子进程可以通过工作进程高效的利用 CPU 和 I/O。

异步 I/O 的提出是期望 I/O 调用不再阻塞后续运算，将原有等待 I/O 完成的这段时间分配给其它需要的业务去执行。

下图为异步调用 I/O 示意图：
![](https://box.kancloud.cn/2016-08-28_57c1cec1b7a6e.png)

</pre>
</details>

[16.[2021-7-15] Node 中如何获取一个文件的 inode 信息?](https://github.com/HJY-xh/plantTrees/issues/383)

<details>
<summary>展开查看</summary>
<pre>

在 Node.js 中，fs 提供了 stat 函数查看相关信息:

```javascript
const fs = require("fs");

const content = fs.statSync("./test5.js");

console.log(content);
```

输出结果：

```javascript
Stats {
  dev: 16777230,
  mode: 33188,
  nlink: 1,
  uid: 501,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 2764176,
  size: 93,
  blocks: 8,
  atimeMs: 1626333483821.387,
  mtimeMs: 1626333482578.7705,
  ctimeMs: 1626333482578.7705,
  birthtimeMs: 1624612227185.2764,
  atime: 2021-07-15T07:18:03.821Z,
  mtime: 2021-07-15T07:18:02.579Z,
  ctime: 2021-07-15T07:18:02.579Z,
  birthtime: 2021-06-25T09:10:27.185Z
}
```

</pre>
</details>

[17.[2021-7-26] npm 项目版本号如何管理？](https://github.com/HJY-xh/plantTrees/issues/397)

<details>
<summary>展开查看</summary>
<pre>

`package.json`中的`version`字段代表的是该项目的版本号。

每当项目发布新版本时，需要将`version`字段进行相应的更新以便后期维护。

虽然可以手动的修改`vsersion`字段，但是为了整个发布过程的自动化，尽量使用 `npm version` 指令来自动更新`version`：

```javascript
npm version major  # 大版本号加 1，其余版本号归 0
npm version minor  # 小版本号加 1，修订号归 0
npm version patch  # 修订号加 1
```

</pre>
</details>

[18.[2021-7-26] 查看 npm 脚本命令的方式有哪些？](https://github.com/HJY-xh/plantTrees/issues/398)

<details>
<summary>展开查看</summary>
<pre>

这里有两种方式：

-   打开项目中的`package.json`文件并查看`scripts`字段

-   使用不带任何参数的 npm run 命令查看

```javascript
npm run
```

</pre>
</details>

[19.[2021-7-27] NPM 是什么？](https://github.com/HJY-xh/plantTrees/issues/399)

<details>
<summary>展开查看</summary>
<pre>

npm（“Node 包管理器”）是 JavaScript 运行时 Node.js 的默认程序包管理器。

npm 由两个主要部分组成:

-   用于发布和下载程序包的 CLI（命令行界面）工具
-   托管 JavaScript 程序包的在线存储库

为了更直观地解释，我们可以将存储库 npmjs.com 视为一个物流集散中心，该中心从卖方（npm 包裹的作者）那里接收货物的包裹，并将这些货物分发给买方（npm 包裹的用户）。

为了促进此过程，npmjs.com 物流集散中心雇用了一群勤劳的袋熊（npm CLI），他们将被分配给每个 npmjs.com 用户作为私人助理。因此，dependencies（依赖项）会如下传递给 JavaScript 开发人员：
![1](https://user-images.githubusercontent.com/70680781/127117044-b40a0bd3-9712-4c5e-b0f2-acee259e39d9.png)
发布 JS 软件包的过程如下：
![2](https://user-images.githubusercontent.com/70680781/127126053-b576bcb0-df56-4532-a1b6-211bf6eed05c.png)

</pre>
</details>
[20.[2021-7-27] package.json 文件里有什么？](https://github.com/HJY-xh/plantTrees/issues/400)

<details>
<summary>展开查看</summary>
<pre>

## package.json

每个 JavaScript 项目（无论是 Node.js 还是浏览器应用程序）都可以被当作 npm 软件包，并且通过 `package.json` 来描述项目和软件包信息。

当运行 `npm init` 初始化 JavaScript/Node.js 项目时，将生成 `package.json` 文件，文件内的内容(基本元数据)由开发人员提供：

-   **name**：JavaScript 项目或库的名称。
-   **version**：项目的版本。通常，在应用程序开发中，由于没有必要对开源库进行版本控制，因此经常忽略这一块。但是，仍可以用它来定义版本。
-   **description**：项目的描述。
-   **license**：项目的许可证。

## npm scripts

`package.json` 还支持一个 `scripts` 属性，可以把它当作在项目本地运行的命令行工具。例如，一个 npm 项目的 `scripts` 部分可能看起来像这样：

```js
{
  "scripts": {
    "build": "tsc",
    "format": "prettier --write **/*.ts",
    "format-check": "prettier --check **/*.ts",
    "lint": "eslint src/**/*.ts",
    "pack": "ncc build",
    "test": "jest",
    "all": "npm run build && npm run format && npm run lint && npm run pack && npm test"
  }
}
```

`eslint` ，`prettier` ，`ncc` ，`jest` 不是安装为全局可执行文件，而是安装在项目本地的 `node_modules/.bin/` 中。

## dependencies vs devDependencies

这两个以键值对象的形式出现，其中 npm 库的名称为键，其**语义格式**版本为值。大家可以看看 Github 的 TypeScript 操作模板中的示例：

```json
{
	"dependencies": {
		"@actions/core": "^1.2.3",
		"@actions/github": "^2.1.1"
	},
	"devDependencies": {
		"@types/jest": "^25.1.4",
		"@types/node": "^13.9.0",
		"@typescript-eslint/parser": "^2.22.0",
		"@zeit/ncc": "^0.21.1",
		"eslint": "^6.8.0",
		"eslint-plugin-github": "^3.4.1",
		"eslint-plugin-jest": "^23.8.2",
		"jest": "^25.1.0",
		"jest-circus": "^25.1.0",
		"js-yaml": "^3.13.1",
		"prettier": "^1.19.1",
		"ts-jest": "^25.2.1",
		"typescript": "^3.8.3"
	}
}
```

这些依赖通过带有 `--save` 或 `--save-dev` 标志的 `npm install` 命令安装。它们分别用于生产和开发/测试环境。

同时，理解语义版本前面的符号非常重要：

-   ^：表示最新的次版本，例如， ^1.0.4 可能会安装主版本系列 1 的最新次版本 1.3.0。
-   〜：表示最新的补丁程序版本，与 ^ 类似， 〜1.0.4 可能会安装次版本系列 1.0 的最新次版本 1.0.7。
    所有这些确切的软件包版本都将记录在 `package-lock.json` 文件中。

## package-lock.json

该文件描述了 npm JavaScript 项目中使用的依赖项的确切版本。如果 `package.json` 是通用的描述性标签，则 `package-lock.json` 是成分表。

就像我们通常不会读取食品包装袋上的成分表（除非你太无聊或需要知道）一样，`package-lock.json` 并不会被开发人员一行一行进行读取。

`package-lock.json` 通常是由 `npm install` 命令生成的，也可以由我们的 NPM CLI 工具读取，以确保使用 `npm ci` 复制项目的构建环境。

</pre>
</details>
[21.[2021-7-27] 作为用户应该如何使用 NPM ？](https://github.com/HJY-xh/plantTrees/issues/401)

<details>
<summary>展开查看</summary>
<pre>

## npm install

这是现在我们开发 JavaScript/Node.js 应用程序时最常用的命令。

默认情况下，`npm install <package-name>` 将安装带有 `^` 版本号的软件包的最新版本。npm 项目上下文中的 `npm install` 将根据 `package.json` 规范将软件包下载到项目的 `node_modules` 文件夹中，从而升级软件包的版本（并重新生成 `package-lock.json`）。 `npm install <package-name>` 可以基于 `^` 和 `〜` 版本匹配。

如果要在全局上下文中安装程序包，可以在机器的任何地方使用它，则可以指定全局标志 `-g`（例如 live-server）。

## npm ci

如果 `npm install --production` 对于生产环境是最佳选项，那么是否必须有一个对本地环境，测试环境最合适的选项？

答案是 `npm ci`

就像如果 `package_lock.json` 尚不存在于项目中一样，无论何时调用 `npm install` 都会生成它，`npm ci` 会消耗该文件来下载项目所依赖的每个软件包的确切版本。

这样，无论是用于本地开发的笔记本电脑还是 Github Actions 等 CI（持续集成）构建环境，我们都可以确保项目上下文在不同机器上保持完全相同。

## npm audit

随着越来越多的软件包发布，并且易于安装，因此 npm 软件包容易受到恶意作者的恶意攻击。

意识到生态系统存在问题，npm.js 组织提出了 `npm audit` 的主意。他们维护了一个安全漏洞列表，开发人员可以使用 `npm audit` 命令来审核项目中的依赖项。

`npm audit` 为开发人员提供了有关漏洞以及是否有要修复的版本的信息，例如：

<table border="1">
<tr>
<td>High</td>
<td>Remote Code Execution</td>
</tr>
<tr>
<td>Package</td>
<td>serialize-javascript</td>
</tr>
<tr>
<td>Patched in</td>
<td>>=3.1.0</td>
</tr>
<tr>
<td>Dependency of</td>
<td>uglifyjs-webpack-plugin [dev]</td>
</tr>
<tr>
<td>Path</td>
<td>uglifyjs-webpack-plugin > serialize-javascript</td>
</tr>
<tr>
<td>More info</td>
<td>https://npmjs.com/advisories/1548</td>
</tr>
</table>

如果补救措施在下一个不间断的版本升级中可用，则可以使用 `npm audit fix` 来自动升级受影响的依赖项的版本。

</pre>
</details>
