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

[2.[2021-4-21] Vue 组件通信中的 props 检验是什么？](https://github.com/HJY-xh/plantTrees/issues/169)

<details>
<summary>展开查看</summary>
<pre>

### 为什么会有 props 校验？

想象一下当有一个人要使用组件的时候，他可能对于其要接受的参数有什么要求并不是很清楚，因此传入的参数可能会在开发子组件的人的意料之外，程序就会发生错误，就像我们在函数调用之前先检查一下函数一样，props 也可以进行一个预先检查。

平时调用函数的时候在函数开头的地方都是一坨糊糊的参数检查，这种写法很不好了，所有后来就有了校验器模式，校验器模式就是指把在函数开头的对参数校验的部分提取出来作为一个公共的部分来管理，让某个函数或方法来专门负责校验，当类型不正确的时候就抛个异常或者根本不去调用这个函数，很多框架设计时都是这么设计的（Spring MVC、Struts2 等等），props 也提供了这个功能，想一下如果没有这个功能的话，为了保证正确性我们可能需要在每次使用 props 属性之前都写一坨代码来检查。校验器最大的好处就是大多数情况下我们只需要声明我需要什么样的数据，让校验器检查好了再塞给我。

### 1.type

可以使用 type 来声明这个参数可以接受的数据的类型，语法示例：

    props: {
        num: Number
    }

**type 可接受多个类型：**

    props: {
        num: [Number, String]
    }

**type 可指定的类型**

-   String

-   Number

-   Boolean

-   Function

-   Object

-   Array

-   Symbol

### 2.required

可以使用 required 选项来声明这个参数是否必须传入：

    props: {
        num: {
            type: Number,
            required: true
        }
    }

### 3.default

使用 default 选项来指定当父组件未传入参数时 props 变量的默认值：

    props: {
        num: {
            type: Number,
            default: 123
        }
    }

**注意：当 type 的类型为 Array 或者 Object 的时候 default 必须是一个函数！**

    props: {
        num: {
            type: Array,
            default: function(){
                return ['12', '123'];
            }
        }
    }

### 4.validator

当校验规则很复杂，默认提供的校验规则无法满足的时候可以使用自定义函数来校验:

    props: {
        num: {
            validator: function(value){
                return value>=0 && value<=123;
            }
        }
    }

</pre>
</details>

[3.[2021-4-22] Vue 生命周期中的 created 和 mounted 有什么不同？](https://github.com/HJY-xh/plantTrees/issues/170)

<details>
<summary>展开查看</summary>
<pre>

### created

将 Vue 实例初始化，为仅存在于 Js 模型中的一个内存变量，并没有开始渲染

### mounted

组件在网页上真正的绘制完成后的状态，大部分情况下都是在 mounted 里编写方法

</pre>
</details>

[4.[2021-4-22] Vue 中父子组件生命周期调用顺序是什么样的？](https://github.com/HJY-xh/plantTrees/issues/171)

<details>
<summary>展开查看</summary>
<pre>

-   加载渲染的过程

父 beforeCreate->父 created->父 beforeMount->子 beforeCreate->子 created->子 beforeMount->子 mounted->父 mounted

-   子组件更新过程

父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated

-   父组件更新过程

父 beforeUpdate -> 父 updated

-   销毁过程

父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed

</pre>
</details>

[5.[2021-4-25] Vue 中 mixin 的优先级与组件相比是什么样的？](https://github.com/HJY-xh/plantTrees/issues/182)

<details>
<summary>展开查看</summary>
<pre>

### mixin 混入

-   **组件**中的 data 与 methods 优先级高于**mixin**中的 data 与 methods
-   生命周期函数，先执行 mixin 里面的，再执行组件里面的（都会执行）
-   自定义的属性，组件中的属性优先级高于 mixin 属性的优先级（可通过 `app.config.optionMergeStrategies.XXX` 重新配置）

</pre>
</details>

[6.[2021-4-27] $nextTick 是什么？](https://github.com/HJY-xh/plantTrees/issues/185)

<details>
<summary>展开查看</summary>
<pre>

看一下以下代码：

```
<template>
  <div id="app">
    <ul ref="ul1">
        <li v-for="(item, index) in list" :key="index">
            {{item}}
        </li>
    </ul>
    <button @click="addItem">添加一项</button>
  </div>
</template>

//下面为script中代码

data() {
      return {
        list: ['a', 'b', 'c']
      }
  },
  methods: {
    addItem() {
        this.list.push(`${Date.now()}`);
        this.list.push(`${Date.now()}`);
        this.list.push(`${Date.now()}`);
        //查看li个数
        const ulElem = this.$refs.ul1
        console.log( ulElem.childNodes.length )
  }
```

该部分效果图如下：
![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_185/1.png)
点击**添加一项**后，会在列表中新增加三项：
![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_185/2.png)
按理来说，新添加三个`li`之后，method 中在控制台输出`ul`的`childNodes`应该是 6 才对，从图中也能清晰地看出有 6 个`li`。很可惜，控制台输出的并不是 6：
![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_185/3.png)

### 为什么会这样呢？

因为 Vue 是**异步渲染**，data 改变之后，DOM 并不会立刻渲染。那如果想要按照我们理解的那样输出 6，该怎么办呢？此时就应该使用$nextTick：

```
this.$nextTick(() => {
    // 获取 DOM 元素
    const ulElem = this.$refs.ul1
    console.log( ulElem.childNodes.length )
})
```

此时就是输出 6 了：
![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_185/4.png)

### 总结

$nextTick 会等待 DOM 渲染完再回调，而且注意一点，页面渲染时会将 data 的修改做整合，多次 data 修改只会渲染一次

</pre>
</details>
