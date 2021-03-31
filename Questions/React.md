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
