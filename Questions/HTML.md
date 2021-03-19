## HTML 相关

[1.[2021-2-19] 如何理解 Web 标准以及 W3C](https://github.com/HJY-xh/plantTrees/issues/1)

<details>
<summary>展开查看</summary>
<pre>
标签要闭合，英文小写，且不要嵌套混乱，用标签语义化来提高搜索的概率。使用外链式的CSS和JS脚本，使结构、样式、行为分离，内容能被更广泛的设备所访问，代码精简，开发组件化，代码易维护、可复用，改版、升级方便。
</pre>
</details>

[2.[2021-2-26] 在 div 出现之前用什么做网站布局？](https://github.com/HJY-xh/plantTrees/issues/13)

<details>
<summary>展开查看</summary>
<pre>
div出现之前使用table布局。因为table布局嵌套很多，网站加载慢，布局层级不清晰。
</pre>
</details>

[3.[2021-2-26] 新的 HTML5 文档类型和字符集是什么？](https://github.com/HJY-xh/plantTrees/issues/14)

<details>
<summary>展开查看</summary>
<pre>
文档类型是`<!doctype html>`
字符集是`<meta charset="utf-8">`
</pre>
</details>

[4.[2021-3-2] iframe 框架都有哪些优缺点？](https://github.com/HJY-xh/plantTrees/issues/21)

<details>
<summary>展开查看</summary>
<pre>

**优点**

-   重载页面时不需要重载整个页面，只需要重载页面中的一个框架页
-   技术易于掌握，使用方便，可主要应用于不需搜索引擎来搜索的页面
-   方便制作导航栏

**缺点**

-   会产生很多页面，不容易管理
-   不容易打印
-   对浏览器搜索引擎不友好
-   多框架的页面会增加服务器的 http 请求
</pre>
</details>

[5.[2021-3-3] viewport 常见设置都有哪些？](https://github.com/HJY-xh/plantTrees/issues/25)

<details>
<summary>展开查看</summary>
<pre>

`viewport` 就是视区窗口，也就是浏览器中显示网页的部分。PC 端上基本等于设备显示区域，但在移动端上 `viewport` 会超出设备的显示区域（即会有横向滚动条出现）。设备默认的 `viewport` 在 980 - 1024 之间。

为了让移动端可以很好地显示页面，因此需要对`viewport`进行设置。相关的设置值如下：

| 设置          | 解释                                                               |
| ------------- | ------------------------------------------------------------------ |
| width         | 设置 layout viewport 的宽度，为一个正整数                          |
| initial-scale | 设置页面的初始缩放值，为一个数字，可以带小数                       |
| minimum-scale | 允许用户的最小缩放值，为一个数字，可以带小数                       |
| maximum-scale | 允许用户的最大缩放值，为一个数字，可以带小数                       |
| height        | 设置 layout viewport 的高度，这个属性并不重要，很少使用            |
| user-scalable | 是否允许用户进行缩放，值为"no"或"yes", no 代表不允许，yes 代表允许 |

`viewport` 是在 `meta` 标签内进行控制。

```html
// width=device-width, initial-scale=1.0 是为了兼容不同浏览器 <meta name="viewport"
content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable="no" />
```

</pre>
</details>

[6.[2021-3-5] 为什么 HTML5 只需要写`<!DOCTYPE HTML>`就可以被解析？](https://github.com/HJY-xh/plantTrees/issues/29)

<details>
<summary>展开查看</summary>
<pre>

因为 HTML5 与 HTML4 基于的基准不同。HTML4 基于**SGML**，除了`DOCTYPE`外还需要引入`DTD`来告诉浏览器用什么标准进行渲染。`DTD`还分为标准模式、严格模式。如果什么都不写，完全让浏览器自我发挥，会变成怪异模式。

HTML5 不基于**SGML**，因此后面就不用跟`DTD`，但是需要`DOCTYPE`来规范浏览器的渲染行为。

注：**SGML**是通用标记语言的集合。其中有 HTML、XML，因此需要用`DTD`来指定使用哪种规范。

</pre>
</details>

[6.[2021-3-5] 什么是事件委托？](https://github.com/HJY-xh/plantTrees/issues/31)

<details>
<summary>展开查看</summary>
<pre>

概念：事件委托指的是，不在事件的发生地（直接 dom）上设置监听函数，而是在其父元素上设置监听函数，通过事件冒泡，父元素可以监听到子元素上事件的触发，通过判断事件发生元素 DOM 的类型，来做出不同的响应。

例子：最经典的就是 ul 和 li 标签的事件监听，比如我们在添加事件时候，采用事件委托机制，不会在 li 标签上直接添加，而是在 ul 父元素上添加。

优点：

-   比较合适动态元素的绑定，新添加的子元素也会有监听函数，也可以有事件触发机制
-   提高 JavaScript 性能。事件委托可以显著的提高事件的处理速度，减少内存的占用

</pre>
</details>

[7.[2021-3-6] src 和 href 的区别是什么？](https://github.com/HJY-xh/plantTrees/issues/33)

<details>
<summary>展开查看</summary>
<pre>

-   href 是超文本引用，它是指向资源的位置，建立与目标文件的联系
-   src 目的是把资源下载到页面中
-   浏览器解析 href 不会阻塞对文档的处理（这就是官方建议使用 link 引入而不是 @ import 的原因），src 会阻塞对文档的处理。

</pre>
</details>

[8.[2021-3-11] HTML 中 b 与 strong 的区别、i 与 em 的区别是什么？](https://github.com/HJY-xh/plantTrees/issues/47)

<details>
<summary>展开查看</summary>
<pre>

**_b 与 strong 的区别_**

-   定义

1. b(bold)是实体标签，用来给文字加粗
2. strong 是逻辑标签，作用是加强字符语气

-   区别

1. b 标签只是加粗的样式，没有实际含义，常用来表达无强调或着中意味的粗体文字
2. strong 表示标签内字符重要，用以强调，其默认格式是加粗，但是可以通过 css 添加样式，使用别的样式强调

_为了符合 css3 的规范语义化，b 应尽量少用而改用 strong_

**_i 与 em 的区别_**

-   定义

1. i(italic)是实体标签，用来使字符倾斜
2. em(emphasis)是逻辑标签，作用是强调文本内容

-   区别

1. i 标签只是斜体的样式，没有实际含义，常用来表达无强调或着重意味的斜体，比如生物学名、术语、外来语；
2. em 表示标签内字符重要，用以强调，其默认格式是斜体，但是可以通过 CSS 添加样式。

_为了符合 CSS3 的规范，i 应尽量少用而改用 em_

</pre>
</details>

[9.[2021-3-11] 什么是 FOUC?如何避免?](https://github.com/HJY-xh/plantTrees/issues/49)

<details>
<summary>展开查看</summary>
<pre>
Flash Of Unstyled Content：用户定义样式表加载之前浏览器使用默认样式渲染文档，用户样式加载渲染之后再重新渲染文档，造成页面闪烁。
解决方法：把样式表放到文档的head。
</pre>
</details>

[10.[2021-3-18] 描述一下 HTML 元素的显示优先级？](https://github.com/HJY-xh/plantTrees/issues/64)

<details>
<summary>展开查看</summary>
<pre>

**在 html 中，帧元素（frameset）的优先级最高，表单元素比非表单元素的优先级要高**

表单元素：

> 文本输入框，密码输入框，单选框，复选框，文本输入域，列表框等等

非表单元素：

> 链接（a），div, table, span 等等

**有窗口元素比无窗口元素的优先级高**

有窗口元素：

> select 元素，object 元素，以及 frames 元素等等

无窗口元素：

> 大部分 html 元素都是无窗口元素

`z-index` 属性也可以改变显示优先级，但只对同种类型的元素才有效。如果两个元素分别为 **表单元素** 和 **非表单元素** 那么 `z-index` 是无效的

</pre>
</details>

[11.[2021-3-19] 谈谈你对 input 元素中 readonly 和 disabled 属性的理解](https://github.com/HJY-xh/plantTrees/issues/67)

<details>
<summary>展开查看</summary>
<pre>

在表现上 `readonly` 和 `disabled` 都不能让用户对 `input` 进行编辑。但从含义上来看两者还是有较大的差别的。

`readonly` 直译为 “只读”，一般用于只允许用户填写一次的信息，提交过一次之后，就不允许再次修改了。

`disabled` 直译为 “禁用”，即这个 `input` 就是不允许填写和使用的（可能是因为权限或者其他原因）。

因此在外观上，`readonly` 与普通 `input` 无异，只是点击后无法进行编辑；而 `disabled` 的 `input` 呈灰色，也不允许点击。从这两点其实也可以看出，对于 `input` 的事件，`readonly` 会响应，而 `disabled` 是不响应的。并且在传输数据上，`disabled` 的数据是不会被获取和上传，`readonly` 的数据会被获取和上传。

</pre>
</details>
