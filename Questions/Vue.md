## React 相关

[1.[2021-4-20] Vue 中的事件修饰符和按键修饰符有哪些？ ](https://github.com/HJY-xh/plantTrees/issues/165)

<details>
<summary>展开查看</summary>
<pre>

### 事件修饰符

vue 提倡的是在方法中只有对数据的处理，所以提供了事件修饰符用于 DOM 的事件处理，常用的事件修饰符有以下几个：

-   . stop：阻止冒泡
-   . prevent：阻止默认事件的发生
-   . capture：捕获冒泡
-   . self：将事件绑定到自身，只有自身才能触发，通常用于避免冒泡事件的影响
-   . once：设置事件只能触发一次，比如按钮的点击等
-   . passive：该修饰符大概意思用于对 DOM 的默认事件进行性能优化，根据官网的例子比如超出最大范围的滚动条滚动的
-   . native：在父组件中给子组件绑定一个原生的事件，就将子组件变成了普通的 HTML 标签，不加'. native'事件是无法触 发的

### 按键修饰符

**官方给出的修饰符：**

```
.enter => // enter键
.tab => // tab键
.delete (捕获“删除”和“退格”按键) => // 删除键
.esc => // 取消键
.space => // 空格键
.up => // 上
.down => // 下
.left => // 左
.right => // 右
```

**自定义按键修饰符：**

```
// 可以使用 `v-on:keyup.f1`
Vue.config.keyCodes.f1 = 112
```

**系统辅助按键：**
仅在以下修饰符对应的按键被按下时，才会触发鼠标或键盘事件监听器

```
.ctrl
.alt
.shift
.meta
```

</pre>
</details>
