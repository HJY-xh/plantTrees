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
