## React 相关

[1.[2021-3-9] 受控组件与非受控组件有什么区别？](https://github.com/HJY-xh/plantTrees/issues/41)

<details>
<summary>展开查看</summary>
<pre>

-   非受控组件： 一些 dom 元素比如 input 其内部默认维护了自己的状态（输入值）以及状态改变的方法，我们可以通过 ref 的方式获取其内部的状态。这种组件称之为非受控组件。
-   受控组件： 当我们使用 react 中的 state 去接管组件的状态（设置非受控组件 value 属性关联 state），使得 react 的 state 成为组件的数据源，并且为组件提供了修改状态的方式（设置非受控组件 onChange 属性，根据输入值改变 state 状态）这种组件称之为受控组件（状态及状态改变完全由 react 接管）。

</pre>
</details>

[2.[2021-3-10] React 中的双缓存是什么？](https://github.com/HJY-xh/plantTrees/issues/44)

<details>
<summary>展开查看</summary>
<pre>
当我们用canvas绘制动画，每一帧绘制前都会调用ctx.clearRect清除上一帧的画面。

如果当前帧画面计算量比较大，导致清除上一帧画面到绘制当前帧画面之间有较长间隙，就会出现白屏。

为了解决这个问题，我们可以在内存中绘制当前帧动画，绘制完毕后直接用当前帧替换上一帧画面，由于省去了两帧替换间的计算时间，不会出现从白屏到出现画面的闪烁情况。

这种在内存中构建并直接替换的技术叫做双缓存 (opens new window)。

React 使用“双缓存”来完成 Fiber 树的构建与替换——对应着 DOM 树的创建与更新。

</pre>
</details>

[3.[2021-3-31] 为什么需要 fiber](https://github.com/HJY-xh/plantTrees/issues/102)

<details>
<summary>展开查看</summary>
<pre>

对于大型项目，组件树会很大，这个时候递归遍历的成本就会很高，会造成主线程被持续占用，结果就是主线程上的布局、动画等周期性的任务就无法立即得到处理，造成视觉上的卡顿，影响用户体验。

</pre>
</details>

[4.[2021-3-31] Hook 是什么？](https://github.com/HJY-xh/plantTrees/issues/103)

<details>
<summary>展开查看</summary>
<pre>
Hook是React 16.8 的新增特性。它可以让你在不编写class的情况下使用state一级其他的 Reacr 特性。
- 拥抱函数式
- 让函数组件有了状态和其他的React特性，可以替代class

```javascript
import React, { useState } from "react";
function Example() {
	// 声明⼀个新的叫做 “count” 的 state 变量
	const [count, setCount] = useState(0);
	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
}
```

</pre>
</details>

[5.[2021-4-12] 生命周期 componentWillMount 为什么不安全？](https://github.com/HJY-xh/plantTrees/issues/135)

<details>
<summary>展开查看</summary>
<pre>
componentWillMount生命周期发生在首次渲染前，一般使用的小伙伴大多在这里初始化数据或异步获取外部数据赋值。初始化数据，react官方建议放在constructor里面。而异步获取外部数据，渲染并不会等待数据返回后再去渲染。

看个 🌰 ：如下是安装时监听外部事件调度程序的组件示例

```javascript
class Example extends React.Component {
	state = {
		value: "",
	};
	componentWillMount() {
		this.setState({
			value: this.props.source.value,
		});
		this.props.source.subscribe(this.handleChange);
	}
	componentWillUnmount() {
		this.props.source.unsubscribe(this.handleChange);
	}
	handleChange = (source) => {
		this.setState({
			value: source.value,
		});
	};
}
```

试想一下，假如组件在第一次渲染的时候被中断，由于组件没有完成渲染，所以并不会执行 componentWillUnmount 生命周期（注：很多人经常认为 componentWillMount 和 componentWillUnmount 总是配对，但这并不是一定的。只有调用 componentDidMount 后，React 才能保证稍后调用 componentWillUnmount 进行清理）。因此 handleSubscriptionChange 还是会在数据返回成功后被执行，这时候 setState 由于组件已经被移除，就会导致内存泄漏。所以建议把异步获取外部数据写在 componentDidMount 生命周期里，这样就能保证 componentWillUnmount 生命周期会在组件移除的时候被执行，避免内存泄漏的风险。

这里的 UNSAFE 并不是指安全性，而是表示使用这些生命周期的代码将更有可能在未来的 React 版本中存在缺陷，特别是一旦启用了异步渲染

</pre>
</details>

[6.[2021-4-12] 生命周期 componentWillReceiveProps 为什么不安全？](https://github.com/HJY-xh/plantTrees/issues/136)

<details>
<summary>展开查看</summary>
<pre>
componentWillReceiveProps生命周期是在props更新时触发。一般用于props参数更新时同步更新state参数。但如果在componentWillReceiveProps生命周期直接调用父组件的某些有调用setState的函数，会导致程序死循环。

看个 🌰 ：如下是子组件 componentWillReceiveProps 里调用父组件改变 state 的函数示例

```javascript
...
class Parent extends React.Component{
    constructor(){
        super();
        this.state={
            list: [],
            selectedData: {}
        };
    }

    changeSelectData = selectedData => {
        this.setState({
            selectedData
        });
    }

    render(){
        return (
            <Clild list={this.state.list} changeSelectData={this.changeSelectData}/>
        );
    }
}

...
class Child extends React.Component{
    constructor(){
        super();
        this.state={
            list: []
        };
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            list: nextProps.list
        })
        nextProps.changeSelectData(nextProps.list[0]); //默认选择第一个
    }
    ...
}
```

如上代码，在 Child 组件的 componentWillReceiveProps 里直接调用 Parent 组件的 changeSelectData 去更新 Parent 组件 state 的 selectedData 值。会触发 Parent 组件重新渲染，而 Parent 组件重新渲染会触发 Child 组件的 componentWillReceiveProps 生命周期函数执行。如此就会陷入死循环。导致程序崩溃。

所以，React 官方把 componentWillReceiveProps 替换为 UNSAFE_componentWillReceiveProps，让小伙伴在使用这个生命周期的时候注意它会有缺陷，要注意避免，比如上面例子，Child 在 componentWillReceiveProps 调用 changeSelectData 时先判断 list 是否有更新再确定是否要调用，就可以避免死循环。

</pre>
</details>

[7.[2021-4-12] 生命周期 componentWillUpdate 为什么不安全？](https://github.com/HJY-xh/plantTrees/issues/137)

<details>
<summary>展开查看</summary>
<pre>
componentWillUpdate生命周期在视图更新前触发。一般用于视图更新前保存一些数据方便视图更新完成后赋值。

看个 🌰 ：列表加载更新后回到当前滚动条位置

```javascript
class ScrollingList extends React.Component {
    listRef = null;
    previousScrollOffset = null;
    componentWillUpdate(nextProps, nextState) {
        if (this.props.list.length < nextProps.list.length) {
            this.previousScrollOffset = this.listRef.scrollHeight - this.listRef.scrollTop;
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.previousScrollOffset !== null) {
            this.listRef.scrollTop = this.listRef.scrollHeight - this.previousScrollOffset;
            this.previousScrollOffset = null;
        }
    }
    render() {
        return (
            `<div>` {/* ...contents... */}`</div>`
        );
    }
    setListRef = ref => {    this.listRef = ref;   };
}
```

由于 componentWillUpdate 和 componentDidUpdate 这两个生命周期函数有一定的时间差（componentWillUpdate 后经过渲染、计算、再更新 DOM 元素，最后才调用 componentDidUpdate），如果这个时间段内用户刚好拉伸了浏览器高度，那 componentWillUpdate 计算的 previousScrollOffset 就不准确了。

如果在 componentWillUpdate 进行 setState 操作，会出现多次调用只更新一次的问题，把 setState 放在 componentDidUpdate，能保证每次更新只调用一次。

所以，react 官方建议把 componentWillUpdate 替换为 UNSAFE_componentWillUpdate。如果真的有以上例子的需求，可以使用新加入的一个周期函数 getSnapshotBeforeUpdate。

</pre>
</details>

[8.[2021-4-21] setState 是异步的还是同步的?](https://github.com/HJY-xh/plantTrees/issues/167)

<details>
<summary>展开查看</summary>
<pre>

setState 只在合成事件和钩子函数中是“异步”的，在原生事件和 setTimeout 中都是同步的。

源码分析：在 React 的 setState 函数实现中，会根据一个变量 isBatchingUpdates 判断是直接更新 this.state 还是放到队列中回头再说，而 isBatchingUpdates 默认是 false，也就表示 setState 会同步更新 this.state，但是，有一个函数 batchedUpdates，这个函数会把 isBatchingUpdates 修改为 true，而当 React 在调用事件处理函数之前就会调用这个 batchedUpdates，造成的后果，就是由 React 控制的事件处理过程 setState 不会同步更新 this.state 。

setState 的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和 setTimeout 中不会批量更新，在“异步”中如果对同一个值进行多次 setState，setState 的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时 setState 多个不同的值，在更新时会对其进行合并批量更新。

</pre>
</details>

[9.[2021-4-21] React 组件通信有哪些方式?](https://github.com/HJY-xh/plantTrees/issues/168)

<details>
<summary>展开查看</summary>
<pre>

-   父组件向子组件通讯: 父组件可以向子组件通过传 props 的方式，向子组件进行通讯
-   子组件向父组件通讯: props+回调的方式,父组件向子组件传递 props 进行通讯，此 props 为作用域为父组件自身的函数，子组件调用该函数，将子组件想要传递的信息，作为参数，传递到父组件的作用域中
-   兄弟组件通信: 找到这两个兄弟节点共同的父节点,结合上面两种方式由父节点转发信息进行通信
-   跨层级通信: Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言,� 对于跨越多层的全局数据通过 Context 通信再适合不过
-   发布订阅模式: 发布者发布事件，订阅者监听事件并做出反应,我们可以通过引入 event 模块进行通信
-   全局状态管理工具: 借助 Redux 或者 Mobx 等全局状态管理工具进行通信,这种工具会维护一个全局状态中心 Store,并根据不同的事件产生新的状态

</pre>
</details>

[10.[2021-4-23] 类组件和函数组件之间的区别是什么？](https://github.com/HJY-xh/plantTrees/issues/175)

<details>
<summary>展开查看</summary>
<pre>

类组件可以使用其他特性，如状态 state 和生命周期钩子。

当组件只是接收 props 渲染到页面时，就是无状态组件，就属于函数组件，也被称为哑组件或展示组件。

函数组件的性能比类组件的性能要高，因为类组件使用的时候要实例化，而函数组件直接执行函数取返回结果即可。为了提高性能，尽量使用函数组件。

</pre>
</details>

[11.[2021-4-23] 如何避免组件不必要的重新渲染？](https://github.com/HJY-xh/plantTrees/issues/176)

<details>
<summary>展开查看</summary>
<pre>

React 中最常见的问题之一是组件不必要地重新渲染。React 提供了两个方法，在这些情况下非常有用：

-   React.memo()
-   pureComponent

这两种方法都依赖于对传递给组件的 props 的浅比较，如果 props 没有改变，那么组件将不会重新渲染。虽然这两种工具都非常有用，但是浅比较会带来额外的性能损失，因此如果使用不当，这两种方法都会对性能产生负面影响。

</pre>
</details>

[12.[2021-5-20] React 的事件和普通的 HTML 事件有什么不同？](https://github.com/HJY-xh/plantTrees/issues/254)

<details>
<summary>展开查看</summary>
<pre>

区别：

-   对于事件名称处理方式：原生事件名均为小写形式，React 事件名采用小驼峰命名形式
-   对于事件处理语法：原生事件为字符串，React 事件为函数
-   React 事件使用`return false`的方式不能阻止浏览器默认行为，必须使用`preventDefault()`来阻止默认行为

合成事件是 React 模拟原生 DOM 事件所有能力的一个事件对象，其优点在于兼容所有浏览器，更好的跨平台。

React 中事件池的概念：

合成事件对象池是 React 事件系统提供的一种性能优化方式。合成事件对象在事件池统一管理，不同类型的合成事件具有不同的事件池。

-   当事件池未满时，React 创建新的事件对象，派发给组件。
-   当事件池装满时，React 从事件池中复用事件对象，派发给组件。

SyntheticEvent 对象会被放入池中统一管理。这意味着 SyntheticEvent 对象可以被复用，当所有事件处理函数被调用之后，其所有属性都会被置空

注意：Web 端的 React 17 不使用事件池，即`e.persist()`将不再生效。

</pre>
</details>

[13.[2021-5-26] React 16.X 中 props 改变后在哪个生命周期中处理?](https://github.com/HJY-xh/plantTrees/issues/263)

<details>
<summary>展开查看</summary>
<pre>

**在`getDerivedStateFromProps`中进行处理。**

这个生命周期替代了`componentWillReceiveProps`，所以在需要使用`componentWillReceiveProps`时，就可以考虑使用`getDerivedStateFromProps`来进行替代。

二者参数不同，`getDerivedStateFromProps`是一个静态函数，也就是这个函数不能通过 this 访问到 Class 属性，也不推荐直接访问属性。而是应该通过参数提供的 nextProps 以及 prevState 来进行判断，根据新传入的 props 来映射到 props。

需要注意的是，如果 props 传入的内容不需要影响到 state，那么就需要返回一个 null，这个值时必须的，所以尽量将其写到函数的末尾。

```javascript
static getDerivedStateFromProps(nextProps, prevState) {
    const {type} = nextProps;
    // 当传入的type发生变化的时候，更新state
    if (type !== prevState.type) {
        return {
            type,
        };
    }
    // 否则，对于state不进行任何操作
    return null;
}
```

</pre>
</details>

[14.[2021-5-26] 组件通信的方式有哪些?](https://github.com/HJY-xh/plantTrees/issues/264)

<details>
<summary>展开查看</summary>
<pre>

-   ⽗组件向⼦组件通讯: ⽗组件可以向⼦组件通过传 props 的⽅式，向⼦组件进⾏通讯

-   ⼦组件向⽗组件通讯: props+回调的⽅式，⽗组件向⼦组件传递 props 进⾏通讯，此 props 为作⽤域为⽗组件⾃身的函数，⼦组件调⽤该函数，将⼦组件想要传递的信息，作为参数，传递到⽗组件的作⽤域中

-   兄弟组件通信: 找到这两个兄弟节点共同的⽗节点,结合上⾯两种⽅式由⽗节点转发信息进⾏通信

-   跨层级通信: Context 设计⽬的是为了共享那些对于⼀个组件树⽽⾔是“全局”的数据，例如当前认证的⽤户、主题或⾸选语⾔，对于跨越多层的全局数据通过 Context 通信再适合不过

-   发布订阅模式: 发布者发布事件，订阅者监听事件并做出反应,我们可以通过引⼊ event 模块进⾏通信

-   全局状态管理⼯具: 借助 Redux 或者 Mobx 等全局状态管理⼯具进⾏通信,这种⼯具会维护⼀个全局状态中⼼ Store,并根据不同的事件产⽣新的状态

</pre>
</details>

[15.[2021-6-4] React 如何判断什么时候重新渲染组件？](https://github.com/HJY-xh/plantTrees/issues/283)

<details>
<summary>展开查看</summary>
<pre>

组件状态的改变是因为`props`或者`state`的改变，组件获得新的状态后，React 决定是否应该重新渲染组件，此时会执行`shouldComponentUpdate`方法，返回 true 时则更新组件，否则不更新。

因此需要重写 shouldComponentUpdate 方法让它根据情况返回 true 或者 false 来告诉 React 什么时候重新渲染什么时候跳过重新渲染。

</pre>
</details>

[16.[2021-6-24] React 如何判断什么时候重新渲染组件？](https://github.com/HJY-xh/plantTrees/issues/341)

<details>
<summary>展开查看</summary>
<pre>

当 props 或者 state 改变会导致组件的状态一同改变，此时 React 重新渲染组件，这是因为 React 中的 shouldComponentUpdate 方法默认返回 true，这就是导致每次更新都重新渲染的原因。

当 React 将要渲染组件时会执行 shouldComponentUpdate 方法来看它是否返回 true（组件应该更新，也就是重新渲染）。所以需要重写 shouldComponentUpdate 方法让它根据情况返回 true 或者 false 来告诉 React 什么时候重新渲染什么时候跳过重新渲染。

</pre>
</details>

[17.[2021-6-24] React 中 Fragment 的使用场景是什么？](https://github.com/HJY-xh/plantTrees/issues/342)

<details>
<summary>展开查看</summary>
<pre>

在 React 中，组件返回的元素只能有一个根元素，为了不添加多余的 DOM 节点，可以使用 Fragment 标签来包裹所有的元素，Fragment 标签不会渲染出任何元素。React 官方对 Fragment 的解释：

> React 中的一个常见模式是一个组件返回多个元素。Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。

看个例子：

```javascript
// 一般形式
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
// 也可以写成以下形式
render() {
  return (
    <>
      <ChildA />
      <ChildB />
      <ChildC />
    </>
  );
}
```

</pre>
</details>

[18.[2021-7-2] React 构建组件的方式有哪些？区别是什么？](https://github.com/HJY-xh/plantTrees/issues/358)

<details>
<summary>展开查看</summary>
<pre>

## 一、组件是什么？

组件就是把图形、非图形的各种逻辑均抽象为一个统一的概念（组件）来实现开发的模式

在 `React` 中，一个类、一个函数都可以视为一个组件

## 二、如何构建？

在 `React` 目前来讲，组件的创建主要分成了三种方式：

-   函数式创建
-   通过 React.createClass 方法创建
-   继承 React.Component 创建

### 函数式创建

在 `React Hooks` 出来之前，函数式组件可以视为无状态组件，只负责根据传入的 `props` 来展示视图，不涉及对 `state` 状态的操作

大多数组件可以写为无状态组件，通过简单组合构建其他组件

在 `React` 中，通过函数简单创建组件的示例如下：

```js
function HelloComponent(props /* context */) {
	return <div>Hello {props.name}</div>;
}
```

### 通过 React.createClass 方式创建

`React.createClass` 是 react 刚开始推荐的创建组件的方式，目前这种创建方式已经不怎么用了

像上述通过函数式创建的组件的方式，最终会通过 `babel` 转化成 `React.createClass`这种形式，转化成如下：

```js
function HelloComponent(props) /* context */ {
	return React.createElement("div", null, "Hello ", props.name);
}
```

由于上述的编写方式过于冗杂，目前基本上不使用

### 继承 React.Component 创建

同样在 `react hooks` 出来之前，有状态的组件只能通过继承 `React.Component` 这种形式进行创建

有状态的组件也就是组件内部存在维护的数据，在类创建的方式中通过 `this.state` 进行访问

当调用 `this.setState` 修改组件的状态时，组件会再次会调用 `render()` 方法进行重新渲染

通过继承 `React.Component` 创建一个时钟示例如下：

```js
class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { seconds: 0 };
	}

	tick() {
		this.setState((state) => ({
			seconds: state.seconds + 1,
		}));
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return <div>Seconds: {this.state.seconds}</div>;
	}
}
```

## 三、区别

由于 `React.createClass` 创建的方式过于冗杂，并不建议使用

而像函数式创建和类组件创建的区别主要在于需要创建的组件是否需要为有状态组件：

-   对于一些无状态的组件创建，建议使用函数式创建的方式

-   由于 `react hooks` 的出现，函数式组件创建的组件通过使用 `hooks` 方法也能使之成为有状态组件，再加上目前推崇函数式编程，所以这里建议都使用函数式的方式来创建组件

在考虑组件的选择原则上，能用无状态组件则用无状态组件

</pre>
</details>

[19.[2021-7-2] JSX 的原理是什么？](https://github.com/HJY-xh/plantTrees/issues/359)

<details>
<summary>展开查看</summary>
<pre>

实际上，JSX 仅仅是`React.createElement(component, props, ...children)`函数的语法糖。如下 JSX 代码:

```javascript
const element = <h1 className="greeting">Hello, world!</h1>;
```

它会被转换为：

```javascript
const element = React.createElement("h1", { className: "greeting" }, "Hello, world!");
```

如果没有子节点，你还可以使用自闭合的标签形式，如

```javascript
<div className="sidebar" />
```

它会被转换为：

```javascript
React.createElement("div", {
	className: "sidebar",
});
```

</pre>
</details>

[20.[2021-7-6] 虚拟 DOM 为什么会提高性能？](https://github.com/HJY-xh/plantTrees/issues/368)

<details>
<summary>展开查看</summary>
<pre>

虚拟 DOM 相当于在 JavaScript 和真实 DOM 中间加了一个缓存，利用 DOM diff 算法避免了没有必要的 DOM 操作，从而提高性能。
具体实现步骤如下：
1、用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中
2、当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异
3、把 2 所记录的差异应用到步骤 1 所构建的真正的 DOM 树上，视图就更新了

</pre>
</details>

[21.[2021-7-23] React 中 shouldComponentUpdate()方法什么时候被调用？](https://github.com/HJY-xh/plantTrees/issues/394)

<details>
<summary>展开查看</summary>
<pre>

当 props 或 state 发生变化时，`shouldComponentUpdate()`会在渲染执行之前被调用。

该方法返回值默认为 true，另外在首次渲染或使用`forceUpdate()`时不会调用该方法。

</pre>
</details>

[22.[2021-8-10] componentDidUpdate 在什么时候被调用？](https://github.com/HJY-xh/plantTrees/issues/429)

<details>
<summary>展开查看</summary>
<pre>

```javascript
componentDidUpdate(preProps，preState，snapshot)
```

`componentDidUpdate()`在更新后会被立即调用，首次渲染不会执行此方法

当组件更新后，可以在该方法中对 DOM 进行操作

也可以在`componentDidUpdate()`中直接调用 setState()，但是必须被包裹在一个条件语句中，如下所示，否则会导致死循环。它会导致额外的重新渲染，虽然用户不可见，但会影响组件性能

```javascript
componentDidUpdate(prevProps) {
  // 典型用法（不要忘记比较 props）：
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```

如果组件实现了`getSnapshotBeforeUpdate()`生命周期（不常用），则它的返回值将作为`componentDidUpdate()`的第三个参数`snapshot`参数传递，否则该参数为`undefined`

如果 `shouldComponentUpdate() `返回值为 `false`，则不会调用 `componentDidUpdate()`

</pre>
</details>

[23.[2021-9-4] 虚拟 DOM 是什么?](https://github.com/HJY-xh/plantTrees/issues/450)

<details>
<summary>展开查看</summary>
<pre>

一个能代表 DOM 树的对象，通常含有标签名、标签上的属性、事件监听和子元素们，以及其它的属性。

</pre>
</details>

[24.[2021-9-6] React 中为什么自定义组件必须大写开头？](https://github.com/HJY-xh/plantTrees/issues/451)

<details>
<summary>展开查看</summary>
<pre>

平时书写的 JSX 是语法糖，<MyComp /> 会被转换为 React.createElement(...)，在转换过程中，首字母小写的会被认为是原生 DOM 标签，首字母大写的被认为是组件。

</pre>
</details>

[25.[2021-9-8] concurrent 模式是什么？](https://github.com/HJY-xh/plantTrees/issues/452)

<details>
<summary>展开查看</summary>
<pre>

concurrent Mode 是 React 之后会推出的新模式， 它将渲染工作分解为多个部分，对任务进行暂停和恢复操作以避免阻塞浏览器。

它用时间片调度实现了异步可中断任务，根据设备性能的不同，时间片的长度也不一样，在每个时间片中，如果任务到了过期时间，就会主动让出线程给高优先级的任务。

这意味着 React 可以在提交之前多次调用渲染阶段生命周期的方法，或者在不提交的情况下调用它们（由于出现错误或更高优先级的任务使其中断）。

</pre>
</details>

[26.[2021-10-19] React 15 的架构是什么样的？](https://github.com/HJY-xh/plantTrees/issues/465)

<details>
<summary>展开查看</summary>
<pre>

React15 架构可以分为两层：

-   Reconciler（协调器）：负责找出变化的组件
-   Renderer（渲染器）： 负责将变化的组件渲染到页面上

当发生更新时，函数组件或者类组件的 render 方法会被调用，将 JSX 转化为虚拟 DOM，与上次更新时的虚拟 DOM 对比，找出最小变化，Renderer 接到 Reconciler 通知，将变化的组件渲染在当前宿主环境。

</pre>
</details>

[27.[2021-10-19] React15 架构有什么缺点?](https://github.com/HJY-xh/plantTrees/issues/466)

<details>
<summary>展开查看</summary>
<pre>

主要是同步更新可能引发不好的用户体验。

在协调过程中，mount 的组件会调用 mountComponent ，update 的组件会调用 updateComponent。这两个方法都会递归更新子组件。递归一旦开始，无法中途中断，当组件层级很深的时候，递归更新时间超过 16ms，浏览器没有足够的时间更新页面，用户就会觉得卡顿。

</pre>
</details>

[28.[2021-10-27] React 阻止事件默认行为的方式是什么？](https://github.com/HJY-xh/plantTrees/issues/471)

<details>
<summary>展开查看</summary>
<pre>

不能通过返回`false`的方式阻止默认行为，必须显式的使用`preventDefault`

</pre>
</details>

[29.[2021-11-11] React 合成事件中如何获取浏览器的底层事件？](https://github.com/HJY-xh/plantTrees/issues/477)

<details>
<summary>展开查看</summary>
<pre>

使用合成事件的`nativeEvent`属性。

</pre>
</details>

[30.[2021-12-03] render prop 是什么？](https://github.com/HJY-xh/plantTrees/issues/494)

<details>
<summary>展开查看</summary>
<pre>

它是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术。

具有`render prop`的组件接受一个返回 React 元素的函数，并在组件内部通过调用此函数来实现自己的渲染逻辑

```javascript
<DataProvider render={(data) => <h1>Hello {data.target}</h1>} />
```

更具体地说，render prop 是一个用于告知组件需要渲染什么内容的函数 prop。

</pre>
</details>

[31.[2021-12-23] React.PureComponent 和 React.memo 有什么区别?](https://github.com/HJY-xh/plantTrees/issues/499)

<details>
<summary>展开查看</summary>
<pre>

-   React.PureComponent 对 state 和 props 做了浅层对比，当二者均没有改变时，不更新组件。只能用在类组件中。
-   React.memo 仅检查 props 变更，做浅层对比，没有改变时，不更新组件。可以用在类组件和函数组件中。

</pre>
</details>

[32.[2021-12-31] React 中 current fiber 树和 workInProgress fiber 树是什么？](https://github.com/HJY-xh/plantTrees/issues/500)

<details>
<summary>展开查看</summary>
<pre>

current fiber 树：当完成一次渲染之后，会产生一个 current 树，current 会在 commit 阶段替换成真实的 DOM 树
workInProgress fiber 树：即将调和渲染的 fiber 树。在一次新的组件更新过程中，会从 current 复制一份作为 workInProgress，更新完毕后，将当前的 workInProgress 树赋值给 current 树

</pre>
</details>

[33.[2021-12-31] fiber 节点上的 memoizedState 有什么作用？](https://github.com/HJY-xh/plantTrees/issues/501)

<details>
<summary>展开查看</summary>
<pre>

memoizedState：在 class 组件中，它存放 state 信息，在 function 中，它以链表的形式存放 hooks 信息,每个链表结点的结构就是 Hook。

```javascript
var hook = {
	memoizedState: null, // 上次渲染时所用的state
	baseState: null, // 已处理的update计算出的state
	baseQueue: null, // 未处理的update队列（一般是上一轮渲染未完成的update）
	queue: null, // 当前出发的update队列
	next: null, // 指向下一个hook
};
```

</pre>
</details>

[34.[2022-1-11] React 为什么使用 JSX？](https://github.com/HJY-xh/plantTrees/issues/511)

<details>
<summary>展开查看</summary>
<pre>

React 认为渲染逻辑本质上与其它 UI 逻辑内在耦合。

比如说：

-   在 UI 中需要绑定处理事件
-   在某些时刻状态发生变化时需要通知到 UI
-   需要在 UI 中展示准备好的数据

</pre>
</details>

[35.[2022-1-11] JSX 为什么能防止注入攻击？](https://github.com/HJY-xh/plantTrees/issues/512)

<details>
<summary>展开查看</summary>
<pre>

React DOM 在渲染所有输入内容之前，默认会转义。它可以确保在你的应用中，永远不会注入哪些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 CSS 攻击。

</pre>
</details>
