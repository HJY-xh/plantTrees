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
