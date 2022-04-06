## Vue 相关

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

```javascript
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

```javascript
// 可以使用 `v-on:keyup.f1`
Vue.config.keyCodes.f1 = 112;
```

**系统辅助按键：**
仅在以下修饰符对应的按键被按下时，才会触发鼠标或键盘事件监听器

```javascript
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

```javascript
props: {
	num: Number;
}
```

**type 可接受多个类型：**

```javascript
props: {
	num: [Number, String];
}
```

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

```javascript
    props: {
        num: {
            type: Number,
            required: true
        }
    }
```

### 3.default

使用 default 选项来指定当父组件未传入参数时 props 变量的默认值：

```javascript
    props: {
        num: {
            type: Number,
            default: 123
        }
    }
```

**注意：当 type 的类型为 Array 或者 Object 的时候 default 必须是一个函数！**

```javascript
    props: {
        num: {
            type: Array,
            default: function(){
                return ['12', '123'];
            }
        }
    }
```

### 4.validator

当校验规则很复杂，默认提供的校验规则无法满足的时候可以使用自定义函数来校验:

```javascript
    props: {
        num: {
            validator: function(value){
                return value>=0 && value<=123;
            }
        }
    }
```

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

```html
<template>
	<div id="app">
		<ul ref="ul1">
			<li v-for="(item, index) in list" :key="index">{{item}}</li>
		</ul>
		<button @click="addItem">添加一项</button>
	</div>
</template>

//下面为script中代码 data() { return { list: ['a', 'b', 'c'] } }, methods: { addItem() {
this.list.push(`${Date.now()}`); this.list.push(`${Date.now()}`); this.list.push(`${Date.now()}`);
//查看li个数 const ulElem = this.$refs.ul1 console.log( ulElem.childNodes.length ) }
```

该部分效果图如下：
![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_185/1.png)
点击**添加一项**后，会在列表中新增加三项：
![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_185/2.png)
按理来说，新添加三个`li`之后，method 中在控制台输出`ul`的`childNodes`应该是 6 才对，从图中也能清晰地看出有 6 个`li`。很可惜，控制台输出的并不是 6：
![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_185/3.png)

### 为什么会这样呢？

因为 Vue 是**异步渲染**，data 改变之后，DOM 并不会立刻渲染。那如果想要按照我们理解的那样输出 6，该怎么办呢？此时就应该使用$nextTick：

```javascript
this.$nextTick(() => {
	// 获取 DOM 元素
	const ulElem = this.$refs.ul1;
	console.log(ulElem.childNodes.length);
});
```

此时就是输出 6 了：
![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_185/4.png)

### 总结

$nextTick 会等待 DOM 渲染完再回调，而且注意一点，页面渲染时会将 data 的修改做整合，多次 data 修改只会渲染一次

</pre>
</details>

[6.[2021-6-3] Vue 中 watch 怎么深度监听对象变化？](https://github.com/HJY-xh/plantTrees/issues/277)

<details>
<summary>展开查看</summary>
<pre>

**将 deep 设置成 ture 即可，代码如下：**

```javascript
let vm = new Vue({
    el: "#app",
    data: {
        msg: {name: "北京"},
    },
    watch: {
        msg: {
            handler(newMsg, oldMsg){
                console.log(newMsg);
            },
            immediate: true,
            deep: true  //深度监听
        }
    }
```

</pre>
</details>

[7.[2021-6-3] 删除数组用 delete 和 Vue.delete 有什么区别？](https://github.com/HJY-xh/plantTrees/issues/278)

<details>
<summary>展开查看</summary>
<pre>

-   **delete**：只是被删除数组成员变为 empty/undefined，其他元素键值不变。
-   **Vue.delete**：直接删了数组成员，并改变了数组的键值（对象是响应式的，确保删除能触发更新视图，这个方法主要用于避开 Vue 不能检测到属性被删除的限制）

</pre>
</details>

[7.[2021-6-4] Vue 中的 watch 和计算属性有什么区别？](https://github.com/HJY-xh/plantTrees/issues/281)

<details>
<summary>展开查看</summary>
<pre>

> 通俗情况下，既能用 computed 实现又可以用 watch 监听来实现的功能，推荐用 computed，重点在于 computed 的**缓存功能**。

-   `computed` 属性是用来声明式地描述一个值依赖了其他的值，当所依赖的值或者变量改变时，计算属性也会跟着改变
-   `watch` 监听的是已经在 data 中定义的变量，当该变量变化时，会触发 watch 中的方法

</pre>
</details>

[8.[2021-6-4] Vue2 的双向绑定原理是什么？](https://github.com/HJY-xh/plantTrees/issues/282)

<details>
<summary>展开查看</summary>
<pre>

Vue 数据双向绑定是通过数据劫持结合发布者-订阅者模式的方式来实现的。利用了 `Object.defineProperty()` 这个方法重新定义了对象获取属性值（get）和设置属性值（set）。

</pre>
</details>

[9.[2021-6-8] Vue3 里为什么要用 Proxy API 替代 defineProperty API ？](https://github.com/HJY-xh/plantTrees/issues/289)

<details>
<summary>展开查看</summary>
<pre>

-

### defineProperty 最大的局限性是它只能针对单例属性进行监听

Vue2.x 中的响应式实现正是基于`defineProperty`中的`descriptor`对`data`中的属性做了遍历` + 递归，为每个属性设置了 getter、setter。

这也就是为什么 Vue 只能对 data 中预定义过的属性做出响应的原因，在 Vue 中使用下标的方式直接修改属性的值或者添加一个预先不存在的对象属性是无法做到 setter 监听的，这是`defineProperty`的局限性。

-

### `Proxy API` 的监听是针对一个对象的，那么对这个对象的所有操作会进入监听操作，这就完全可以代理所有属性，将会带来很大的性能提升和更优的代码

Proxy 可以理解成在目标对象之前架设一层“拦截”，外界对该对象的访问都必须先通过这层拦截，因此提供了一种机制可以对外界的访问进行过滤和改写。

-

### 响应式是惰性的

在 Vue2 中，对于一个深层属性嵌套的对象，要劫持它内部深层次的变化，就需要递归遍历这个对象，**执行 Object.defineProperty 把每一层对象数据都变成响应式的，这无疑会有很大的性能消耗。**

在 Vue3 中，使用`Proxy API`并不能监听到对象内部深层次的属性变化，因此它的处理方式是在 getter 中去递归响应式，这样的好处是**真正访问到的内部属性才会变成响应式，简单地说就是按需实现响应式，减少性能消耗。**

如下图代码所示：

```javascript
let datas = {
	num: 0,
};
let proxy = new Proxy(datas, {
	get(target, property) {
		return target[property];
	},
	set(target, property, value) {
		target[property] = value;
	},
});
```

</pre>
</details>

[10.[2021-6-9] Vue3 是如何变得更快的？](https://github.com/HJY-xh/plantTrees/issues/291)

<details>
<summary>展开查看</summary>
<pre>

-   **diff 方法优化**

Vue2 中的虚拟 dom 是进行全量的对比。

Vue3 中新增了静态标记（PatchFlag）：在与上次虚拟节点进行对比的时候，只对比带有 patch flag 的节点，并且可以通过 flag 的信息得知当前节点要对比的具体内容。

-   **hoistStatic 静态提升**

Vue2：无论元素是否参与更新，每次都会重新创建。

Vue3：对不参与更新的元素，只会被创建一次，之后会在每次渲染时不停地复用。

-   **cacheHandlers 事件侦听器缓存**

默认情况下 onClick 会被视为动态绑定，所以每次都会去追踪它的变化。但是因为是同一个函数，所以没必要去追踪它的变化，想办法将它直接缓存起来复用就会提升性能。

</pre>
</details>

[11.[2021-7-7] 如何理解 Vue 中的具名插槽？](https://github.com/HJY-xh/plantTrees/issues/369)

<details>
<summary>展开查看</summary>
<pre>

假设子组件 **layout** ：

```html
<div>
	<div>content</div>
</div>
```

父组件使用子组件：

```html
<layout></layout>
```

页面展示效果为：

```
content
```

如果我想让父组件显示：

```
header
content
footer
```

即：在父组件写了 header 与 footer 的 div，想在中间的 content 部分使用子组件即可。很容易想到，使用**插槽** ：

```html
<!--父组件-->
<layout>
	<div>header</div>
	<div>footer</div>
</layout>
```

```html
<!--子组件-->
<div>
	<slot></slot>
	<div>content</div>
</div>
```

很可惜，出来的效果是这样的：

```
header
footer
content
```

很正常，因为 slot 是一整块的，当然是上面的效果。这时候就要使用 **具名插槽** 来将 slot 分为几小块，分别插在前面和后面：

```html
<!--父组件-->
<layout>
	<template v-slot:header>
		<!--用v-slot来绑定子组件中的name-->
		<div>header</div>
		<!--注意，v-slot要写在template，写在div的话会报错，即是规定也利于语义化-->
	</template>
	<template v-slot:footer>
		<div>footer</div>
	</template>
</layout>
```

```html
<!--子组件-->
<div>
	<slot name="header"></slot>
	<!--用name属性取名-->
	<div>content</div>
	<slot name="footer"></slot>
</div>
```

完成效果~

```
header
content
footer
```

**小知识：** `v-solt` 可简写成 `#` ，即：

```html
<layout>
	<template #header>
		<div>header</div>
	</template>
	<template #footer>
		<div>footer</div>
	</template>
</layout>
```

</pre>
</details>

[12.[2021-8-5] Vue 中父组件怎么向子组件传递值？](https://github.com/HJY-xh/plantTrees/issues/416)

<details>
<summary>展开查看</summary>
<pre>

1. 在父组件中引入子组件

2. 注册子组件

3. 在页面中使用，子组件标签上动态绑定传入动态值 / 静态值

4. 在子组件中，使用 props 来接受父组件传递过了的值

子组件接收的父组件的值分为**引用类型**和**普通类型**两种：

-   普通类型：字符串（String）、数字（Number）、布尔值（Boolean）、空（Null）
-   引用类型：数组（Array）、对象（Object）

```html js
// 子组件
<template>
	<div>
		<h1>{{obj.code}}</h1>
		<br />
		<h2>{{obj.title}}</h2>
		<h3>{{info}}</h3>
	</div>
</template>

<script>
	export default {
		name: "test",
		props: {
			obj: Object,
			info: [String, Number], //info值为其中一种类型即可，其他类型报警告
		},
	};
</script>
```

```html js
//父组件

<template>
	<div>
		<!-- 传递值 -->
		<Test :obj="obj" info="测试" />
	</div>
</template>

<script>
	// 引入子组件
	import Test from "../components/Test.vue";
	export default {
		name: "about",
		// 注册子组件
		components: {
			Test,
		},
		data() {
			return {
				obj: {
					code: 200,
					title: "前端自学社区",
				},
			};
		},
	};
</script>
```

注意：由于 Vue 是**单向数据流**， **子组件** 不能直接修改 **父组件** 的值

</pre>
</details>
[13.[2021-8-5] Vue中子组件怎么向父组件传递值？](https://github.com/HJY-xh/plantTrees/issues/417)

<details>
<summary>展开查看</summary>
<pre>

子组件通过绑定事件: `this.$emit('函数名'，传递参数)` 向父组件传值

```html js
// 子组件
<button @click="modifyValue">修改父组件的值</button>

<script>
	export default {
		name: "test",
		methods: {
			modifyValue() {
				this.$emit("modify", "子组件传递过来的值");
			},
		},
	};
</script>
```

```html js
// 父组件
<Test @modify="modifyFatherValue" />

<script>
	// 引入子组件
	import Test from "../components/Test.vue";
	export default {
		name: "about",
		// 注册子组件
		components: {
			Test,
		},
		data() {
			return {
				msg: "我是父组件",
			};
		},
		methods: {
			// 接受子组件传递来的值，赋值给data中的属性
			modifyFatherValue(e) {
				this.msg = e;
			},
		},
	};
</script>
```

</pre>
</details>
[14.[2021-8-5] Vue中父组件怎么获取子组件值？](https://github.com/HJY-xh/plantTrees/issues/418)

<details>
<summary>展开查看</summary>
<pre>

父组件 通过 $refs / $children 来获取子组件值

`$refs` :

-   获取 DOM 元素 和 组件实例来获取组件的属性和方法。
-   通过在 子组件 上绑定 `ref` ，使用 `this.$refs.refName.子组件属性 / 子组件方法`

`$children` :

-   当前实例的子组件，它返回的是一个子组件的集合。如果想获取哪个组件属性和方法，可以通过 `this.$children[index].子组件属性/方法`

**示例 Text 组件**

```js
<script>
    export default {
        name:'test',
        data() {
            return {
                datas:"我是子组件值"
            }
        },
        props:{
            obj:Object,
            info: [String,Number]
        },
        methods:{
            getValue(){
                console.log('我是Test1')
            }
        }
    }
</script>
```

**示例 Text2 组件**

```html js
<template>
	<div>
		<h1>我是Test2</h1>
	</div>
</template>

<script>
	export default {
		name: "test",
		data() {
			return {
				datas: "我是Test2",
			};
		},
		created() {
			console.log(this.$parent.obj);
			this.$parent.getQuery();
		},
		methods: {
			getTest2() {
				console.log(this.datas);
			},
		},
	};
</script>
```

**$refs**

```html js
<template>
	<div>
		<!--给子组件上绑定 ref-->
		<Test ref="son" />
		<Test2 />
	</div>
</template>

// 通过 $refs 示例来获取子组件的属性和方法 console.log( this.$refs.son.datas) // 我是子组件值
this.$refs.son.getValue() // 我是Test1
```

**$children**

```js
//  通过 $children  来获取 子组件的属性和方法
this.$children[0].getValue(); // 我是 Test1
this.$children[1].getTest2(); // 我是 Test2
console.log(this.$children[1].datas); // 我是Test2
```

</pre>
</details>
[15.[2021-8-8] Vue中子组件怎么获取父组件实例的属性和方法？](https://github.com/HJY-xh/plantTrees/issues/426)

<details>
<summary>展开查看</summary>
<pre>

子组件 通过 `$parent` 来获取父组件实例的属性和方法

父组件

```html js
<template>
	<div>
		<testVue></testVue>
	</div>
</template>
<script>
	import testVue from './test'
	export default {
	  data(){
	    return {
	      total: 108
	    }
	  },
	  components: {
	    testVue
	  },
	  methods: {
	    funa(e){
	        console.log(e)
	    }
	}
</script>
```

子组件

```js
<template>
<div>
  <button @click="parentClick">点击访问父组件</button>
</div>
</template>
<script>
export default {
  data(){
    return {
      msg:"test1"
    }
  },
  methods: {
    parentClick(){
        this.$parent.funa("xx") // xx
        console.log(this.$parent.total); // 108
    }
  }
}
</script>
```

</pre>
</details>

[16.[2022-3-30] 如何理解 Vue 中 createElement?](https://github.com/HJY-xh/plantTrees/issues/547)

<details>
<summary>展开查看</summary>
<pre>

Vue 通过建立一个`虚拟DOM`来追踪自己要如何改变真实 DOM

```javascript
return createElement("h1", this.blogTitle);
```

`createElement`可以理解成名字更为准确的`createNodeDescription `，因为它所包含的信息会告诉 Vue 页面上需要渲染什么样的节点，包括及其子节点的描述信息。我们把这样的节点描述为`虚拟节点（virtual node）`，也常简称为`VNode`。

</pre>
</details>
