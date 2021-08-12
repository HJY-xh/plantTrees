## JavaScrit 相关

[1.[2021-2-20] encodeURI()和 decodeURI()的作用是什么？](https://github.com/HJY-xh/plantTrees/issues/2)

<details>
<summary>展开查看</summary>
<pre>
encodeURI()用于将URL转换为十六进制编码。而decodeURI()用于将编码的URL转换为正常URL。
</pre>
</details>

[2.[2021-2-21] 为什么不建议在 JavaSript 中使用 innerHTML？](https://github.com/HJY-xh/plantTrees/issues/3)

<details>
<summary>展开查看</summary>
<pre><code>
通过innerHTML修改内容，它将清除所选DOM元素的内容，并用当时恰好分配的内容替换它们。

这导致许多 HTML 转义和验证问题,在 innerHTML 中没有验证的机会，因此更容易在文档中插入错误代码，使网页不稳定。

例子： 1.对于绑定(bind)了大量事件的页面，使用 innerHTML 附加另一个元素将重新生成 DOM 元素，这意味着事件绑定(bind)可能会丢失。
2.eval("window.alert(document.cookie)")
</code></pre>

</details>

[3.[2021-2-22] 如何取消冒泡？](https://github.com/HJY-xh/plantTrees/issues/8)

<details>
<summary>展开查看</summary>
<pre>
在IE的事件模型中，必须设置事件对象的cancelBubble属性为true。例如：window.event.cancalBubble = true；
在W3C的事件模型中必须调用事件的stopPropagation()方法。例如：e.stopPropagation()。
</pre>
</details>

[4.[2021-2-25] 严格模式有哪些限制？](https://github.com/HJY-xh/plantTrees/issues/12)

<details>
<summary>展开查看</summary>
<pre>
主要有如下限制：

-   变量必须声明后再使用
-   函数的参数不能有同名参数，否则报错
-   不能使用 with 关键词
-   不能对只读属性赋值，否则报错
-   不能使用八进制数，否则报错
-   不能使用 delete 删除变量、方法等，只能用来删除对象的属性
-   eval 不会在它的外层作用域引入变量
-   eval 和 arguments 不能被重新赋值
-   arguments 不会自动反映函数参数的变化
-   不能使用 arguments.callee
-   不能使用 arguments.caller
-   禁止 this 指向全局对象
-   不能使用 fn.caller 和 fn.arguments 获取函数调用的栈
-   增加了保留字（如 protected、static 和 interface)
</pre>
</details>

[5.[2021-2-27] Iterator 的作用是什么？](https://github.com/HJY-xh/plantTrees/issues/15)

<details>
<summary>展开查看</summary>
<pre>
作用如下：

为各种数据结构提供一个统一的、简便的访问接口
使得数据结构的成员能够按某种次序排列
ES6 创造了一种新的遍历命令 for...of 循环，Iterator 接口主要供 for...of 使用

</pre>
</details>

[6.[2021-3-3] 如何添加、移除、移动、复制、创建和查找节点？](https://github.com/HJY-xh/plantTrees/issues/26)

<details>
<summary>展开查看</summary>
<pre>

-   创建新节点

    -   createDocumentFragment //创建新 DOM 片段
    -   createElement //创建一个元素
    -   createTextNode //创建一个文本节点

-   添加 移除 替换 插入

    -   appendChild() //添加
    -   removeChild //移除
    -   replaceChild //替换
    -   insertBofore //插入

-   查找

    -   getElementsByTagName() //通过标签名查找
    -   getElementsByName() //通过元素的 name 属性查找
    -   getElementById() //通过元素的 id 查找

</pre>
</details>

[7.[2021-3-7] Javascript 中 callee 和 caller 是什么？](https://github.com/HJY-xh/plantTrees/issues/35)

<details>
<summary>展开查看</summary>
<pre>

-   caller 是返回一个对函数的引用，该函数调用了当前函数
-   callee 是返回正在被执行的 function 函数，也就是所指定的 function 对象的正文

</pre>
</details>

[8.[2021-3-8] 如何简单理解闭包？](https://github.com/HJY-xh/plantTrees/issues/36)

<details>
<summary>展开查看</summary>
<pre>
闭包的实质是因为函数嵌套而形成的作用域链。

通过闭包能够读取其他函数内部变量的函数,使得函数不被垃圾回收机制回收，让一个变量长期驻扎在内存当中，如果过多使用闭包，容易导致内存泄露。

好处是能够读取其他函数内部的私有变量，避免因为作用域问题而把变量定义在全局作用域里面，造成全局变量的污染。回正在被执行的 function 函数，也就是所指定的 function 对象的正文

</pre>
</details>

[9.[2021-3-13] || 和 && 操作符的返回值是什么？](https://github.com/HJY-xh/plantTrees/issues/54)

<details>
<summary>展开查看</summary>
<pre>
|| 和 && 首先会对第一个操作数执行条件判断，如果其不是布尔值就先进行 ToBoolean 强制类型转换，然后再执行条件
判断。

对于 || 来说，如果条件判断结果为 true 就返回第一个操作数的值，如果为 false 就返回第二个操作数的值。

&& 则相反，如果条件判断结果为 true 就返回第二个操作数的值，如果为 false 就返回第一个操作数的值。

|| 和 && 返回它们其中一个操作数的值，而非条件判断的结果。

</pre>
</details>

[10.[2021-3-15]"use strict"是什么?使用它有什么优缺点？](https://github.com/HJY-xh/plantTrees/issues/58)

<details>
<summary>展开查看</summary>
<pre>

**_严格模式_**，其实就是对语法的要求更严格了。

设立 **_严格模式_** 目的，主要有以下几个：

-   消除 Javascript 语法的一些不合理、不严谨之处，减少一些怪异行为;
-   消除代码运行的一些不安全之处，保证代码运行的安全；
-   提高编译器效率，增加运行速度；
-   为未来新版本的 Javascript 做好铺垫。

几个常见的改变：

-   禁止 this 关键字指向全局对象
-   禁止在函数内部遍历调用栈
-   全局变量必须显式声明
-   arguments 不再追踪参数的变化

例：

```javascript
(function () {
	"use strict";
	b = 1; //Uncaught ReferenceError: b is not defined
})();
```

**_缺点_**：

-   某些代码在严格模式下会报错，尤其引入公用与第三方模块的时候需要注意

-   有些严格模式的特性在不同浏览器的支持情况不同，需要注意兼容问题

</pre>
</details>

[11.[2021-3-16]JavaScript 中的"attribute"和"property"有什么不同？](https://github.com/HJY-xh/plantTrees/issues/60)

<details>
<summary>展开查看</summary>
<pre>

### **_attribute_**

1. Attribute 由 HTML 来定义，并不存在于 DOM 中，即：只要是 HTML 标签内定义的都是 attribute。

```javascript
<div id="test" class="button" custom-attr="1"></div>
```

```javascript
document.getElementById("test").attributes;
// 返回：[custom-attr="hello", class="button", id="test"]
```

2. Attribute 是 String 类型。对于上面的 div，`document.getElementById('test').getAttribute('custom-attr')` 或 `$('#test').attr('custom-attr') `都会返回 string: "1"。

### **_property_**

1. Property 属于 DOM，DOM 的本质就是 JavaScript 中的一个 object。我们可以像操作普通 object 一样读取、设置 property，property 可以是任意类型。

```javascript
document.getElementById("test").foo = 1;
// 设置property：foo为number: 1
document.getElementById("test").foo;
// 读取property，返回number：1
$("#test").prop("foo");
// jQuery读取property，返回number：1
```

```javascript
$("#test").prop("foo", {
	age: 23,
	name: "John",
});
// jQuery设置property：foo为一个object
document.getElementById("test").foo.age;
// 返回number：23
document.getElementById("test").foo.name;
// 返回string："John"
```

2. 非自定义 attribute，如 id、class、titile 等，都会有对应的 property 映射。

```html
<div id="test" class="button" foo="1"></div>
```

```javascript
document.getElementById("test").id;
// 返回string："test"
document.getElementById("test").className;
// 返回string："button"
document.getElementById("test").foo;
// 返回undefined，因为foo是自定义attribute
```

注：由于 **_class_** 为 JavaScript 的保留关键字，所以通过 property 操作 class 时应使用 **_className_**。

3. 非自定义的 property 或 attribute 的变化多数是联动的。

```html
<div id="test" class="button"></div>
```

```javascript
var div = document.getElementById("test");
div.className = "red-input";
div.getAttribute("class");
// 返回string："red-input"
div.setAttribute("class", "green-input");
div.className;
// 返回string："green-input"
```

4. 带有默认值的 attribute 不随 property 变化而变化。

```html
<input id="search" value="foo" />
```

```javascript
var input = document.getElementById("search");
input.value = "foo2";
input.getAttribute("value");
// 返回string："foo"
```

</pre>
</details>

[12.[2021-3-23] ECMAScript6 中的 class 怎么理解？](https://github.com/HJY-xh/plantTrees/issues/79)

<details>
<summary>展开查看</summary>
<pre>

本质上来说它只是一种语法糖，不是一个新的东西，其背后还是原型继承的思想。通过加入 class 可以有利于我们更好的组织代码。

在 class 中添加的方法，其实是添加在类的原型上的。

</pre>
</details>

[13.[2021-3-25] clientWidth、offsetWidth、scrollWidth 有什么区别？](https://github.com/HJY-xh/plantTrees/issues/83)

<details>
<summary>展开查看</summary>
<pre>

### 1. clientWidth 和 clientHeigh 、 clientTop 和 clientLeft

-   clientWidth 的实际宽度
    clientWidth = width + 左右 padding

-   clientHeight 的实际宽度
    clientHeight = height + 上下 padding

-   clientTop 的实际宽度
    clientTop = boder.top（上边框的宽度）

-   clientLeft 的实际宽度
    clientLeft = boder.left（左边框的宽度）

### 2. offsetWidth 和 offsetHight 、 offsetTop 和 offsetLeft

-   offsetWidth 的实际宽度
    offsetWidth = width + 左右 padding + 左右 boder

-   offsetHeight 的实际宽度
    offsetHeight = height + 上下 padding + 上下 border

-   offsetTop 的实际宽度
    offsetTop：当前元素**上边框外边缘**到最近的**已定位父级**（offsetParent）**上边框内边距**的距离。如果父级都没有定位，则分别是到 body 顶部和左边的距离。

-   offsetLeft 的实际宽度
    offsetLeft：当前元素**左边框外边缘**到最近的**已定位父级**（offsetParent）**左边框内边缘**的距离。如果父级都没有定位，则分别是到 body 顶部和左边的距离

### 3. scrollWidth 和 scrollHeight 、 scrollTop 和 scrollLeft

-   scrollWidth 的实际宽度
    scrollWidth：获取指定标签内容层的真实宽度（可视区域宽度 + 被隐藏区域宽度）

-   scrollHeight 的实际宽度
    scrollHeight：获取指定标签内容层的真实高度（可视区域高度+ 被隐藏区域高度）

-   scrollTop 的实际宽度
    scrollTop：内容层顶部到可视区域顶部的距离

-   scrollLeft 的实际宽度
    scrollLeft：内容层左端到可视区域左端的距离

</pre>
</details>

[14.[2021-3-25] String.prototype.trimStart() 和 String.prototype.trimEnd()有什么作用？](https://github.com/HJY-xh/plantTrees/issues/85)

<details>
<summary>展开查看</summary>
<pre>
trimStart() 方法从字符串的开头删除空格。trimLeft() 是此方法的别名。
trimEnd() 方法从字符串的开头删除空格。trimRight() 是此方法的别名。

```javascript
const greeting = "   Hello world!   ";

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trimEnd());
// expected output: "   Hello world!";

console.log(greeting.trimStart());
// expected output: "Hello world!   ";
```

</pre>
</details>

[15.[2021-3-26] ES7 中求幂运算符\*\*如何使用?](https://github.com/HJY-xh/plantTrees/issues/87)

<details>
<summary>展开查看</summary>
<pre>
在ES7中引入了指数运算符，具有与Math.pow()等效的计算结果
```javascript
console.log(2**10); // 1024
console.log(Math.pow(2, 10)) // 1024
```
</pre>
</details>

[16.[2021-3-26] ES8 中 String 的 padStart 和 padEnd 怎么使用？](https://github.com/HJY-xh/plantTrees/issues/88)

<details>
<summary>展开查看</summary>
<pre>

在 ES8 中 String 新增了两个实例函数 `String.prototype.padStart` 和 `String.prototype.padEnd`，允许将空字符串或其他字符串添加到原始字符串的开头或结尾。先看看使用语法：

```javascript
String.padStart(targetLength, [padString]);
```

-   targetLength(必填):当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身
-   padString(可选):填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断，此参数的缺省值为 " "

举个 🌰

```javascript
"x".padStart(4); // "   x"
"x".padEnd(5, "1"); // "x1111"
```

有时候我们处理日期、金额的时候经常要格式化，这个特性就派上用场：

```javascript
"12".padStart(10, "YYYY-MM-DD"); // "YYYY-MM-12"
"09-12".padStart(10, "YYYY-MM-DD"); // "YYYY-09-12"
```

</pre>
</details>

[17.[2021-3-29] 如何手写一个深拷贝？](https://github.com/HJY-xh/plantTrees/issues/95)

<details>
<summary>展开查看</summary>
<pre>

在考虑这个问题前，希望您已了解基本的深浅拷贝，若您还没概念，可先移步[“彻底讲明白浅拷贝与深拷贝”](https://www.jianshu.com/p/35d69cf24f1f)学习

深拷贝的写法有很多种，这里介绍一种用递归实现的深拷贝，整体语法也比较简单，重点是递归调用。

先看看未使用深拷贝处理之前引用类型间的赋值：
![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_95/brand_new.PNG)
![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_95/brand_new_console.PNG)

经过深拷贝处理之后的结果：
![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_95/used.PNG)
![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_95/used_console.PNG)

源码附上：
![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_95/deepClone.PNG)

</pre>
</details>

[18.[2021-3-30] call()、apply()、bind()的用法是什么？](https://github.com/HJY-xh/plantTrees/issues/98)

<details>
<summary>展开查看</summary>
<pre>

**call()、apply()、bind() 都是用来重定义 this 对象的**

call 、bind 、 apply 这三个函数的第一个参数都是 `this` 的指向对象，第二个参数差别就来了：

-   call 的参数是直接放进去的，第二第三第 n 个参数全都用逗号分隔，直接放到后面 `obj.myFun.call(th,'string1', ... ,'stringN' )`

-   apply 的所有参数都必须放在一个数组里面传进去 `obj.myFun.apply(th,['string1', ..., 'stringN' ])`

-   bind 除了返回是`函数`以外，它的参数和 call 一样

当然，三者的参数不限定是 string 类型，允许是各种类型，包括函数 、 object 等等.

</pre>
</details>

[19.[2021-3-30] 如何手写一个 bind 方法？](https://github.com/HJY-xh/plantTrees/issues/99)

<details>
<summary>展开查看</summary>
<pre>

代码如下：

```javascript
Function.prototype.bind1 = function () {
	//将参数拆解为数组
	const args = Array.prototype.slice.call(arguments);

	//获取this（数组第一项）
	const t = args.shift();

	//fn1.bind(...) 中的fn1
	const self = this;

	return function () {
		return self.apply(t, args);
	};
};

function fn1(a, b, c) {
	console.log(this);
	console.log(a, b, c);
	return "this is fn1";
}

const fn2 = fn1.bind1({ x: 100 }, 10, 20, 30);
const res = fn2();
console.log(res);
```

</pre>
</details>

[20.[2021-3-31] 如何理解 localStorage 和 sessionStorage？](https://github.com/HJY-xh/plantTrees/issues/105)

<details>
<summary>展开查看</summary>
<pre>

**跟古老的 cookie 缓存方法相比：**

-   HTML5 专门为存储而设计，最大可存 5M
-   API 简单易用 setItem getItem
-   不会随着 http 请求被发送出去

**不同点：**

-   localStorage 数据会永久存储，除非代码或手动删除
-   sessionStorage 数据只存在于当前会话，浏览器关闭则清空
-   一般用 localStorage 会更多一些
</pre>
</details>

[21.[2021-4-1] 空值合并运算符是什么?](https://github.com/HJY-xh/plantTrees/issues/108)

<details>
<summary>展开查看</summary>
<pre>

这是 ECMAScript 2020（ES2020）新增的语法。

与[可选链操作符](https://github.com/HJY-xh/plantTrees/issues/109)类似。

空值合并运算符（??）是一个逻辑运算符。当左侧操作数为 null 或 undefined 时，其返回右侧的操作数。否则返回左侧的操作数。

与逻辑或（||）操作符不同，逻辑或会在左操作数为 假值 时返回右侧操作数。也就是说，如果你使用 || 来为某些变量设置默认的值时，你可能会遇到意料之外的行为。比如为假值（例如，'' 或 0）时。

看个 🌰

```javascript
const foo = null ?? "default string";
console.log(foo); // "default string"

const baz = 0 ?? 42;
console.log(baz); // 0
```

</pre>
</details>

[22.[2021-4-1] 可选链式操作符是什么？](https://github.com/HJY-xh/plantTrees/issues/109)

<details>
<summary>展开查看</summary>
<pre>

这是 ECMAScript 2020（ES2020）新增的语法。

与[空值合并操作符](https://github.com/HJY-xh/plantTrees/issues/108)类似。

可选链操作符( ?. )允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。

通过在点表示法之前添加一个问号，我们可以使值的路径的任何部分成为可选的，如果访问对象上不存在的属性上的属性，使用`.`操作符会直接报错。

看个 🌰

```javascript
let person = {};

// 如果person对象不包含profile会报错
console.log(person.profile.name ?? "Anonymous"); // Uncaught TypeError: Cannot read property 'name' of undefined

// 下面的路径是可选的，如果person对象不包含profile属性直接返回"Anonymous"
console.log(person?.profile?.name ?? "Anonymous"); // Anonymous

// 没有这个语法前，为了安全访问相关属性，我们是这么写的
console.log((person && person.profile && person.profile.age) || 18);
console.log(person?.profile?.age ?? 18); // 18
```

</pre>
</details>

[23.[2021-4-2] 如何准确的检测某个数据的数据类型？](https://github.com/HJY-xh/plantTrees/issues/110)

<details>
<summary>展开查看</summary>
<pre>

说到检测数据类型，你一定会想到**typeof**和**instanceof**

### typeof

-   typeof 返回值是一个字符串，该字符串说明运算数的类型，结果为 number、boolean、string、function、**object（Null、数组、对象）**、undefined
-   缺点是，可检测基本数据类型，但是遇到引用类型（数组、对象等）只能显示为 object

### instanceof

-   instanceof 返回值为 boolean，true 或 false
-   instanceof 是用来判断 A 是否为 B 的实例对象，检测的是原型

### 开发中常用的检测数据类型方法

Object.prototype.toString.call("1") //string
Object.prototype.toString.call([]) //Array
Object.prototype.toString.call(Null) //Null
Object.prototype.toString.call({}) //object
...
...
...

</pre>
</details>

[24.[2021-4-2] Promise.allSettled()的作用是什么？](https://github.com/HJY-xh/plantTrees/issues/111)

<details>
<summary>展开查看</summary>
<pre>

这是 ES2020 新特性之一。

该`Promise.allSettled()`方法返回一个在所有给定的`Promise`都已经`fulfilled`或`rejected`后的`Promise`，并带有一个对象数组，每个对象表示对应的`Promise`结果。

看个 🌰

```javascript
const p1 = new Promise((res, rej) => setTimeout(res, 1000));

const p2 = new Promise((res, rej) => setTimeout(rej, 1000));

const p3 = Promise.resolve(3);

Promise.allSettled([p1, p2, p3]).then((data) => console.log(data));

// output:
// [
//     { status: "fulfilled", value: undefined },
//     { status: "rejected", reason: undefined },
//     { status: "fulfilled", value: 3 },
// ];
```

</pre>
</details>

[25.[2021-4-2] ES2020 的 BigInt 特性是什么？](https://github.com/HJY-xh/plantTrees/issues/112)

<details>
<summary>展开查看</summary>
<pre>
JavaScript能处理的最大数字是2的53次方，我们可以使用Number的`MAX_SAFE_INTEGER`属性得到这个值。
看个🌰
```javascript
const max = Number.MAX_SAFE_INTEGER;
console.log(max); // 9007199254740991
```

如果超过了这个安全范围，就会出现一些错误情况。
看个 🌰

```javascript
console.log(max + 1); // 9007199254740992
console.log(max + 2); // 9007199254740992
console.log(max + 3); // 9007199254740994
console.log(Math.pow(2, 53) == Math.pow(2, 53) + 1); // true
```

我们可以使用新的 BigInt 数据类型来解决这个问题。通过把字母 n 放在末尾，我们可以开始使用并与大得离谱的数字进行交互。我们无法将标准数字与 BigInt 数字混合在一起，因此任何数学运算都需要使用 BigInt 来完成。
看个 🌰

```javascript
const bigNum = 100000000000000000000000000000n;
console.log(bigNum + 1n); // 100000000000000000000000000001n
```

</pre>
</details>

[26.[2021-4-2] 动态引入（Dynamic Import）是什么？](https://github.com/HJY-xh/plantTrees/issues/113)

<details>
<summary>展开查看</summary>
<pre>
如果你有一个工具函数文件，其中一些函数可能很少被使用，将他们完整导入可能只是浪费资源。现在我们可以使用async/await来动态地导入我们需要的依赖项。

看个 🌰 以下代码运行在`Node`环境
**math.js**

```javascript
const add = (x, y) => x + y;

module.exports = {
	add,
};
```

**index.js**

```javascript
const doMath = async (num1, num2) => {
	if (num1 && num2) {
		const math = await import("./math.js");
		console.log(math.add(num1, num2));
	}
};

doMath(1, 2); // 3
```

</pre>
</details>

[27.[2021-4-7] 有什么常用的阻止默认行为的方式？](https://github.com/HJY-xh/plantTrees/issues/124)

<details>
<summary>展开查看</summary>
<pre>

### 最常用

`var input = document.getElementById("submit"); input.onclick = function(e) { e.preventDefault(); }`

### 低版本浏览器

`input.onclick = function(e) { e.returnValue; }`

### 拓展

`input.onclick = function(e) { return false; //可阻止默认行为，但是后面的代码不再执行，而且只限于传统事件注册方式 }`

</pre>
</details>

[28.[2021-4-8] JavaScript 和 ECMAScript 的关系是什么？](https://github.com/HJY-xh/plantTrees/issues/127)

<details>
<summary>展开查看</summary>
<pre>

JavaScript 起源于 1995 年 Netscape 为自家游览器创造的脚本语言 LiveScript。后来因为 Sun 公司的 Java 语言兴起，Netscape 为了沾热度将 LiveScript 改名为 JavaScript，但其实 Java 和 JavaScript 没有一点关系。

1997 年 Netscape 将 JavaScript 规范提交到 Ecma International（www.ecma-international.org，简称EI），诞生了ECMAScript （简称“ES”）第 1 个版本。

随后在 1999 年诞生了十分稳定的 ES 3，也就是 2009 年 12 月之前前端工程师们最广泛使用的版本。

在 2009 年 12 月诞生了 ES 5。你可能会问 ES 4 呢，抱歉，版本 4 因为太激进，EI 委员会成员之间的意见不一，最后胎死腹中，改由更加平滑温和的版本 5 继承版本 4 的一些新特性和功能。

EI 于 2015 年 6 月发布了 ES 6，也就是我们今天广泛使用的版本。这之后每年 6 月发布一个极小更新的 ES 版本，比如 2016 年 6 月发布的 ES 2016 叫做 ES 7。

综上可见，JavaScript 是 ECMAScript 规范的一种实现。

</pre>
</details>

[29.[2021-4-8] ES7 中的 Array.prototype.includes 作用是什么？](https://github.com/HJY-xh/plantTrees/issues/128)

<details>
<summary>展开查看</summary>
<pre>

`includes`是一个 Array 上很有用的方法，用于快速查找数组中是否包含某个元素，包括 NaN（`indexOf`不能查到 NaN)。

```javascript
(() => {
	let arr = [1, 2, 3, NaN];

	if (arr.includes(2)) {
		//查找2是否存在于arr数组中
		console.log("找到了!"); //>> 找到了！
	}
	if (!arr.includes(2, 3)) {
		//第二个参数3表示数组下标为3的项，也即第4项开始查找
		console.warn("不存在!"); //>> 不存在！
	}

	//下面两句说明incluedes和indexOf的区别
	console.log(arr.includes(NaN)); //true
	console.log(arr.indexOf(NaN) != -1); //false
})();
```

</pre>
</details>

[30.[2021-4-13] replace 和 replaceAll 的区别是什么?](https://github.com/HJY-xh/plantTrees/issues/140)

<details>
<summary>展开查看</summary>
<pre>

方法解释：
两种方法都返回一个新字符串，原始字符串保持不变。并且改方法可以传两个参数：

-   参数一：pattern。 pattern 可以是一个 字符串 或一个 正则表达式，
-   参数二：replacement。 replacement 可以是一个字符串或一个在每次匹配被调用的函数。

当参数 pattern 类型不同时有区别：
当 pattern 是字符串时，replace 只替换匹配到的第一个位置，replaceAll 会替换每一个匹配到的地方。看个 🌰

```javascript
let value = "123-456-789";
let pattern = "-";
value.replace(pattern, ""); // 123456-789
value.replaceAll(pattern, ""); // 123456789
```

```javascript
let value = "123-456-789";
value.replace(/-/g, ""); // 123456789
value.replaceAll(/-/g, ""); // 123456789
```

</pre>
</details>

[31.[2021-4-13] ES8 中 Object.values() 有什么作用？](https://github.com/HJY-xh/plantTrees/issues/141)

<details>
<summary>展开查看</summary>
<pre>

`Object.values()`方法返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用`for...in`循环的顺序相同 ( 区别在于 `for-in` 循环枚举原型链中的属性 )。
看个 🌰 ：

```javascript
let obj = {
	a: 1,
	b: "哈哈哈哈",
	c: false,
};

console.log(Object.values(obj)); // [ 1, '哈哈哈哈', false ]

const vals = Object.keys(obj).map((key) => obj[key]);
console.log(vals); // [ 1, '哈哈哈哈', false ]
```

从上面代码中可以看出`Object.values()`为我们省去了遍历 key，并根据这些 key 获取 value 的步骤。

</pre>
</details>

[32.[2021-4-14] ES8 中 Object.entries()的作用是什么？](https://github.com/HJY-xh/plantTrees/issues/146)

<details>
<summary>展开查看</summary>
<pre>

`Object. entries()`方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用`for...in`循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。
看个 🌰 ：

```javascript
let obj = {
	a: 1,
	b: "哈哈哈哈",
	c: false,
};

console.log(Object.entries(obj)); // [ [ 'a', 1 ], [ 'b', '哈哈哈哈' ], [ 'c', false ] ]
```

该方法可以将 Object 转换为 Map：

```javascript
let obj = {
	a: 1,
	a: 1,
	b: "cola",
};

console.log(new Map(Object.entries(obj))); // Map(2) { 'a' => 1, 'b' => 'cola' }
```

</pre>
</details>

[33.[2021-4-14] 如何获取一个对象中的属性的描述符？](https://github.com/HJY-xh/plantTrees/issues/147)

<details>
<summary>展开查看</summary>
<pre>

可以使用 ES8 中的`Object.getOwnPropertyDescriptors()`

看个 🌰 ：

```javascript
const obj = {
	name: "cola",
};
console.log(Object.getOwnPropertyDescriptors(obj));

// {
//     name: {
//       value: 'cola',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     }
// }
```

该方法的引入目的，主要是为了解决 Object.assign() 无法正确拷贝 get 属性和 set 属性的问题。
看个 🌰 ：

```javascript
const source = {
	set foo(value) {
		console.log(value);
	},
	get bar() {
		return "bar";
	},
};
const target1 = {};
Object.assign(target1, source);
console.log(Object.getOwnPropertyDescriptor(target1, "foo"));

// {
//     value: undefined,
//     writable: true,
//     enumerable: true,
//     configurable: true
// }

const target2 = {};
Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));
console.log(Object.getOwnPropertyDescriptor(target2, "foo"));

// {
//     get: undefined,
//     set: [Function: set foo],
//     enumerable: true,
//     configurable: true
// }
```

</pre>
</details>

[34.[2021-4-17] 什么是防抖和节流?](https://github.com/HJY-xh/plantTrees/issues/155)

<details>
<summary>展开查看</summary>
<pre>

函数防抖和函数节流：优化高频率执行 js 代码的一种手段，js 中的一些事件如浏览器的 resize、scroll，鼠标的 mousemove、mouseover，input 输入框的 keypress 等事件在触发时，会不断地调用绑定在事件上的回调函数，极大地浪费资源，降低前端性能。为了优化体验，需要对这类事件进行调用次数的限制。

防抖，在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时。

```javascript
function debounce(fn, delay) {
	var timer; // 维护一个 timer
	return function () {
		var _this = this; // 取debounce执行作用域的this
		var args = arguments;
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(function () {
			fn.apply(_this, args); // 用apply指向调用debounce的对象，相当于_this.fn(args);
		}, delay);
	};
}
```

节流，字面节约流量，高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执行频率。

```javascript
function throttle(fn, delay) {
	var timer;
	return function () {
		var _this = this;
		var args = arguments;
		if (timer) {
			return;
		}
		timer = setTimeout(function () {
			fn.apply(_this, args);
			timer = null; // 在delay后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器
		}, delay);
	};
}
```

</pre>
</details>

[35.[2021-4-19] ES2020 的 globalThis 有什么作用？](https://github.com/HJY-xh/plantTrees/issues/159)

<details>
<summary>展开查看</summary>
<pre>
globalThis 是一个全新的标准方法用来获取全局 this 。之前开发者会通过如下的一些方法获取：

-   全局变量 window：是一个经典的获取全局对象的方法。但是它在 Node.js 和 Web Workers 中并不能使用
-   全局变量 self：通常只在 Web Workers 和浏览器中生效。但是它不支持 Node.js。一些人会通过判断 self 是否存在识别代码是否运行在 Web Workers 和浏览器中
-   全局变量 global：只在 Node.js 中生效

过去获取全局对象，可通过一个全局函数：

```javascript
// ES10之前的解决方案
const getGlobal = function () {
	if (typeof self !== "undefined") return self;
	if (typeof window !== "undefined") return window;
	if (typeof global !== "undefined") return global;
	throw new Error("unable to locate global object");
};

// ES10内置
globalThis.alert("hi");

// 定义一个全局对象v = { value:true } ,ES10用如下方式定义
globalThis.v = { value: true };
```

globalThis 目的就是提供一种标准化方式访问全局对象，有了 globalThis 后，你可以在任意上下文，任意时刻都能获取到全局对象。因此，不再需要考虑不同的环境问题。

```javascript
// worker.js
globalThis === self;
// node.js
globalThis === global;
// browser.js
globalThis === window;
```

另外`Object.prototype` 也在全局对象的原型链中。

```javascript
Object.prototype.isPrototypeOf(globalThis); // true
```

[globalThis 支持情况](https://www.caniuse.com/?search=globalThis)

</pre>
</details>

[36.[2021-4-19] ES2021 的数字分隔符有什么作用？](https://github.com/HJY-xh/plantTrees/issues/160)

<details></details>
<summary>展开查看</summary>
<pre>

数字太长会导致可读性很差。使用了数字分隔符 \_ （下划线），就可以读得更快更舒服，看个 🌰 :

```javascript
let x = 233333333;

let y = 2_3333_3333
console.log(y): // 233333333
```

</pre>
</details>

[37.[2021-4-20] ES2021 的 Promise.any 有什么作用？](https://github.com/HJY-xh/plantTrees/issues/161)

<details>
<summary>展开查看</summary>
<pre>

从字面意思来看，应该也能大致猜出这个 API 的作用。与 Promise.all 类似，Promise.any 也接受一个 Promise 的数组。当其中任何一个 Promise 完成（fullfill）时，就返回那个已经有完成值的 Promise。如果所有的 Promise 都拒绝（reject），则返回一个拒绝的 Promise，该 Promise 的返回值是一个 AggregateError 对象。
我们可以把 Promise.any 理解成 Promise.all 的相反操作。
看个 🌰 ：

```javascript
Promise.any(promises).then(
	(first) => {
		// 任何一个 Promise 完成了
	},
	(error) => {
		// 所有的 Promise 都拒绝了
	}
);
```

</pre>
</details>

[38.[2021-4-20] 对于不安全的 JSON 对象，JSON.stringify()会如何处理它们?](https://github.com/HJY-xh/plantTrees/issues/163)

<details>
<summary>展开查看</summary>
<pre>

-   undefined、function、symbol

    -   单独处理它们，直接返回 undefined

    ```javascript
    JSON.stringify(undefined); //  undefined
    JSON.stringify(function () {}); //  undefined
    JSON.stringify(Symbol()); //  undefined
    ```

    -   包含它们的对象，自动将其忽略

    ```javascript
    JSON.stringify({ a: 1, b: undefined, c: function () {}, [Symbol()]: 1 }); //  "{"a":1}"
    ```

    -   包含它们的数组，自动将其转成 null

    ```javascript
    JSON.stringify([1, undefined, function () {}, Symbol()]); //  "[1,null,null,null]"
    ```

-   包含循环引用的对象
    如果两个对象之间互相引用，形成一个无限循环，那么无论对其中的哪个对象进行 JSON 字符串化都会直接报错
    ```javascript
    let obj1 = {};
    let obj2 = {
    	a: obj1,
    };
    obj1.a = obj2;
    JSON.stringify(obj1); //  Uncaught TypeError
    JSON.stringify(obj2); //  Uncaught TypeError
    ```

</pre>
</details>

[39.[2021-4-20] IIFE 是什么？](https://github.com/HJY-xh/plantTrees/issues/164)

<details>
<summary>展开查看</summary>
<pre>

IIFE 是立即执行函数，在一些常见的框架中，会使用立即执行函数形成一个独立作用域，在这个函数通常会写一些依赖环境之类的东西；立即执行函数中，写完其中的变量不会被销毁，形成闭包。
`(function( window, undefined ) {//……})(window);`

jQuery 整個就是一個立即执行函数。

`(function(){})();` 是立即执行函数常用的表现形式之一。

另一种也很常用：`(function(){}());`

用途？

1.  当我们需要写一个 js 插件，并且复用率很高的时候，建议使用

2.  如果命名的函数只需要使用一次，建议使用

3.  独立模块，跟第一点差不多。开发的时候，能做到各组合模块的低耦合，减少对全局作用域的污染

</pre>
</details>

[40.[2021-4-24] 如何中断 ajax 请求？](https://github.com/HJY-xh/plantTrees/issues/177)

<details>
<summary>展开查看</summary>
<pre>

-   设置超时时间让 ajax 自动断开
-   手动停止 ajax 请求，其核心是调用 XML 对象的 abort 方法，ajax.abort()

</pre>
</details>

[41.[2021-4-25] 怎样理解作用域链？](https://github.com/HJY-xh/plantTrees/issues/181)

<details>
<summary>展开查看</summary>
<pre>

作用域链的作用是保证执行环境里有权访问的变量和函数是有序的，作用域链的变量只能向上访问，在浏览器环境下变量访问到 window 对象即被终止，作用域链乡下访问变量是不被允许的。

</pre>
</details>

[42.[2021-4-26] 创建一个 Ajax 调用的过程是什么样的？](https://github.com/HJY-xh/plantTrees/issues/183)

<details>
<summary>展开查看</summary>
<pre>

-   创建一个 XMLHttpRequest 对象，也就是创建一个异步调用对象
-   创建一个 Http 请求，并指定该请求的请求方法、URL 及验证信息
-   设置响应 Http 请求状态变化的方法
-   发送 Http 请求
-   获取异步调用返回的结果

</pre>
</details>

[43.[2021-4-27] DOM 级别与 DOM 事件有哪些？](https://github.com/HJY-xh/plantTrees/issues/186)

<details>
<summary>展开查看</summary>
<pre>

-   DOM 级别一共可以分为四个级别：DOM0 级、DOM1 级、DOM2 级和 DOM3 级。
-   DOM 事件分为 3 个级别：DOM0 级事件处理，DOM2 级事件处理和 DOM3 级事件处理。

那为什么没有 DOM1 级事件处理呢？
因为 1 级 DOM 标准并没有定义事件相关的内容，所以没有所谓的 1 级 DOM 事件模型。

先了解一下在 DOM0 级事件之前，HTML 时间处理程序是怎样的？看个 🌰

```html
<button type="button" onclick="showFn()"></button> function showFn() { alert('Hello World'); }
```

那这种方法的特定就是：

-   HTML 和 JS 耦合太强，我们如果需要修改函数名就必须修改两个地方
-   不需要操作 DOM 来完成事件的绑定

那 DOM0 级处理事件就是将一个函数赋值给一个事件处理属性，看个 🌰

```html
<button id="btn" type="button"></button> var btn = document.getElementById('btn'); btn.onclick =
function() { console.log('Hello World'); }
```

此外，还可以通过给事件处理属性赋值 null 来解绑事件。

由此可见，DOM0 级事件处理程序的一个缺点是处理程序无法同时绑定多个处理函数。

DOM2 级事件解决了 DOM0 级事件中无法同时绑定多个处理函数的痛点，它允许给一个程序添加多个处理函数。看个 🌰

```html
<button id="btn" type="button"></button> var btn = document.getElementById('btn'); function showFn()
{ alert('Hello World'); } btn.addEventListener('click', showFn, false); //
btn.removeEventListener('click', showFn, false); 解绑事件
```

再来看看 DOM3 级事件，它是在 DOM2 级事件的基础上添加很多事件类型。

-   UI 事件，当用户与页面上的元素交互时触发，如：load、scroll
-   焦点事件，当元素获得或失去焦点时触发，如：blur、focus
-   鼠标事件，当用户通过鼠标在页面执行操作时触发如：dbclick、mouseup
-   滚轮事件，当使用鼠标滚轮或类似设备时触发，如：mousewheel
-   文本事件，当在文档中输入文本时触发，如：textInput
-   键盘事件，当用户通过键盘在页面上执行操作时触发，如：keydown、keypress
-   合成事件，当为 IME（输入法编辑器）输入字符时触发，如：compositionstart
-   变动事件，当底层 DOM 结构发生变化时触发，如：DOMsubtreeModified

同时 DOM3 级事件也允许使用者自定义一些事件。

</pre>
</details>

[44.[2021-4-27] 客户区坐标、页面坐标、屏幕坐标分别是什么？](https://github.com/HJY-xh/plantTrees/issues/187)

<details>
<summary>展开查看</summary>
<pre>

-   客户区坐标：鼠标指针在可视区中的水平坐标(clientX)和垂直坐标(clientY)
-   页面坐标：鼠标指针在页面布局中的水平坐标(pageX)和垂直坐标(pageY)
-   屏幕坐标：设备物理屏幕的水平坐标(screenX)和垂直坐标(screenY)

</pre>
</details>

[45.[2021-4-27] 如何获得一个 DOM 元素的绝对位置？](https://github.com/HJY-xh/plantTrees/issues/188)

<details>
<summary>展开查看</summary>
<pre>

-   elem.offsetLeft：返回元素相对于其定位父级左侧的距离
-   elem.offsetTop：返回元素相对于其定位父级顶部的距离
-   elem.getBoundingClientRect()：返回一个 DOMRect 对象，包含一组描述边框的只读属性，单位像素

</pre>
</details>

[46.[2021-4-27] ['1', '2', '3'].map(parseInt) 运行结果是什么样的？](https://github.com/HJY-xh/plantTrees/issues/189)

<details>
<summary>展开查看</summary>
<pre>

运行结果:[1, NaN, NaN]

为什么呢？

-   parseInt(string, radix) 第 2 个参数 radix 表示进制。省略 radix 或 radix = 0，则数字将以十进制解析
-   map 每次为 parseInt 传 3 个参数(elem, index, array)，其中 index 为数组索引

结合这两点，可以知道 map 遍历 ["1", "2", "3"]，相应 parseInt 接收参数如下

parseInt('1', 0); // 1

parseInt('2', 1); // NaN

parseInt('3', 2); // NaN

所以，parseInt 参数 radix 不合法，导致返回值为 NaN

</pre>
</details>

[47.[2021-4-28] ajax 有哪几种返回状态？](https://github.com/HJY-xh/plantTrees/issues/190)

<details>
<summary>展开查看</summary>
<pre>

-   (0) UNINITIALIZED

未初始化；（XMLHttpRequest）对象已经创建，但尚未初始化（还没有调用 open 方法）

-   (1) LOADING

载入；（XMLHttpRequest）对象已经创建，但尚未调用 send 方法

-   (2) LOADED

载入完成；已经调用 send 方法，（HTTP 响应）状态及头部还不可用

-   (3) INTERACTIVE

交互；已经接收部分数据。但若在此时调用 responseBody 和 responseText 属性获取部分结果将会产生错误，因为状态和响应头部还不完全可用

-   (4) COMPLETED

完成；已经接收到了全部数据，并且在 responseBody 和 responseText 属性中可以提取到完整的数据

</pre>
</details>

[48.[2021-4-28] Window 和 Document 有什么联系？](https://github.com/HJY-xh/plantTrees/issues/191)

<details>
<summary>展开查看</summary>
<pre>

-   Window 对象表示当前浏览器窗口，是 JavaScript 的顶级对象，我们创建的所有对象、函数、变量都是 Window 对象的成员。且 Window 对象的属性和方法在全局范围内都有效。
-   Document 对象是 HTML 文档的根节点与其它所有节点（元素节点、文本节点、属性节点、注释节点），它使我们可以通过脚本对 HTML 页面中的所有元素进行访问
-   Document 对象是 Window 对象的一部分，可通过 window.document 属性进行访问

</pre>
</details>

[49.[2021-4-28] documen.write 和 innerHTML 的区别是什么？](https://github.com/HJY-xh/plantTrees/issues/192)

<details>
<summary>展开查看</summary>
<pre>

-   document.write 会重绘整个页面
-   innerHTML 重绘页面的一部分

</pre>
</details>

[50.[2021-4-29] 如何实现数组的 flatten 方法？](https://github.com/HJY-xh/plantTrees/issues/197)

<details>
<summary>展开查看</summary>
<pre>

实现如下：

```javascript
let arr = [1, 2, 3, [4, 5], [6, [7, [8]]]];

const wrap = () => {
	let res = [];
	return function flat(array) {
		for (let item of array) {
			if (item.constructor === Array) {
				res.concat(flat(item));
			} else {
				res.push(item);
			}
		}
		return res;
	};
};

console.log(wrap()(arr)); // [1, 2, 3, 4, 5, 6, 7, 8]
```

</pre>
</details>

[51.[2021-4-30] 有哪些常用的 BOM 对象属性方法？](https://github.com/HJY-xh/plantTrees/issues/199)

<details>
<summary>展开查看</summary>
<pre>

### 1. location 对象

-   location.href ==> 返回或设置当前文档的 URL
-   location.search ==> 返回 URL 中的查询字符串部分

例：`http://www.example.com/example.php?id=5&name=hi`，返回包括`?`后面的内容，即`?id=5&name=hi`

-   location.hash ==> 返回 URL`#`后面的内容，如果没有`#`，返回空
-   location.host ==> 返回 URL 中的域名部分，例如`www.example.com`
-   location.hostname ==> 返回 URL 中主域名部分，例如`example.com`
-   location.pathname ==> 返回 URL 中域名后的部分

例：`http://www/example.com/xhtml/`，返回`/xhtml/`

-   location.port ==> 返回 URL 中的端口部分
-   location.protocol ==> 返回 URL 中的协议部分，例如`http:`
-   location.assign ==> 设置当前文档的 URL
-   location.replace() ==> 设置当前文档的 URL，即用一个新文档取代当前文档，语法`location.replace(url)`
-   location.reload() ==> 重载当前页面

### 2. history 对象

-   history.go() ==> 前进或后退指定的页面数，语法`history.go(num)`
-   history.back() ==> 后退一页
-   history.forword() ==> 前进一页

### 3. Navigator 对象

-   navigator.userAgent ==> 返回用户代理头的字符串表示（就是包括浏览器版本信息等等的字符串）

例如：`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4540.147 Safari/537.36`

-   navigator.cookieEnabled ==> 返回浏览器是否支持（启用）cookie

</pre>
</details>

[52.[2021-5-2] 如何实现一个 sleep 函数](https://github.com/HJY-xh/plantTrees/issues/205)

<details>
<summary>展开查看</summary>
<pre>

比如 sleep(1000) 意味着等待 1000 毫秒，可从 Promise、Generator、Async/Await 等角度实现：

```javascript
const sleep = (time) => {
	return new Promise((resolve) => setTimeout(resolve, time));
};

sleep(1000).then(() => {
	// todo
});
```

</pre>
</details>

[53.[2021-5-4] 函数的 length 属性代表什么?](https://github.com/HJY-xh/plantTrees/issues/209)

<details>
<summary>展开查看</summary>
<pre>

length 是函数对象的一个属性值，指该函数有多少个必须要传入的参数，即形参的个数。

形参的数量不包括剩余参数个数，仅包括第一个具有默认值之前的参数个数。

看个 🌰 ：

```javascript
const sum = (a, b, c, ...d) => {
	return a + b + c;
};

console.log(sum.length); // 3
```

</pre>
</details>

[54.[2021-5-4] 柯里化如何实现？](https://github.com/HJY-xh/plantTrees/issues/210)

<details>
<summary>展开查看</summary>
<pre>

直接上代码啦：

```javascript
function curry(func) {
	return function curried(...args) {
		if (args.length >= func.length) {
			return func.apply(this, args);
		} else {
			return function (...args2) {
				return curried.apply(this, args.concat(args2));
			};
		}
	};
}
```

当我们运行它时，这里有两个 if 执行分支：

如果传入的 args 长度与原始函数所定义的（func.length）相同或者更长，那么只需要将调用传递给它即可。

否则获取一个偏函数，func 不会被调用，会返回另一个包装器 pass，它将重新应用 curried，将之前传入的参数与新的参数一起传入。然后，在一个新的调用中获得一个新的偏函数（如果参数不足的话），或者最终的结果。

</pre>
</details>

[55.[2021-5-5] ES6 代码转成 ES5 代码的实现思路是什么?](https://github.com/HJY-xh/plantTrees/issues/213)

<details>
<summary>展开查看</summary>
<pre>

ES6 转 ES5 目前常用 Babel，转换的大致流程如下：

-   解析：解析代码字符串，生成 AST
-   转换：按一定的规则转换、修改 AST
-   生成：将修改后的 AST 转换成普通代码

</pre>
</details>

[56.[2021-5-8] 箭头函数和普通函数有什么区别?](https://github.com/HJY-xh/plantTrees/issues/223)

<details>
<summary>展开查看</summary>
<pre>

-   箭头函数和普通函数的样式不同，箭头函数语法更加简洁、清晰，箭头函数是=>定义函数,普通函数是 function 定义函数
-   箭头函数会捕获其所在上下文的 this 值，作为自己的 this 值，定义的时候就确定并固定了
-   箭头函数不能作为构造函数使用，也不能使用 new 关键字(因为箭头函数没有自己的 this，它的 this 其实是继承了外层执行环境中的 this，且 this 指向永远不会改变,作为构造函数其的 this 要是指向创建的新对象)
-   箭头函数没有自己的 arguments。在箭头函数中访问 arguments 实际上获得的是外层局部（函数）执行环境中的值
-   call、apply、bind 并不会影响箭头函数 this 的指向
-   箭头函数没有原型 prototype
-   箭头函数不能当作 Generator 函数，不能使用 yield 关键字

</pre>
</details>

[57.[2021-5-8] var，let 和 const 之间有什么区别?](https://github.com/HJY-xh/plantTrees/issues/224)

<details>
<summary>展开查看</summary>
<pre>

-   变量提升方面：var 声明的变量存在变量提升，即变量可以在声明之前调用，值为 undefined。
    let 和 const 不存在变量提升问题(注意这个‘问题’后缀，其实是有提升的，只不过是 let 和 const 具有一个暂时性死区的概念，即没有到其赋值时，之前就不能用)，即它们所声明的变量一定要在声明后使用，否则报错。

-   块级作用域方面：var 不存在块级作用域,let 和 const 存在块级作用域

-   声明方面：var 允许重复声明变量,let 和 const 在同一作用域不允许重复声明变量。其中 const 声明一个只读的常量(因为如此，其声明时就一定要赋值，不然报错)。一旦声明，常量的值就不能改变。

如何使 const 声明的对象内属性不可变，只可读呢？
如果 const 声明了一个对象，对象里的属性是可以改变的。

```javascript
const obj = { name: "cola" };
obj.name = "water";
console.log(obj.name); // water
```

因为 const 声明的 obj 只是保存着其对象的引用地址，只要地址不变，就不会出错。
使用 Object.freeze(obj) 冻结 obj,就能使其内的属性不可变,但它有局限，就是 obj 对象中要是有属性是对象，该对象内属性还能改变，要全不可变，就需要使用递归等方式一层一层全部冻结。

</pre>
</details>

[58.[2021-5-10] 空值运算符和可选链运算符在 Node 环境下运行最低版本要求是多少？](https://github.com/HJY-xh/plantTrees/issues/227)

<details>
<summary>展开查看</summary>
<pre>

v14.0.0

</pre>
</details>

[59.[2021-5-11] Array.of() 的作用是什么？](https://github.com/HJY-xh/plantTrees/issues/229)

<details>
<summary>展开查看</summary>
<pre>

该方法可以将一系列值转换成数组。

为什么会有这个方法呢？这得从`new Array()`说起，当我们调用`new Array()`时，它会根据传入参数的类型和个数的不同生成不同的结果。看个 🌰 ：

```javascript
let items = new Array(5);
console.log(items.length); // 5
console.log(items[0]); // undefined

let items = new Array(1, 2, 3);
console.log(items.length); // 3
console.log(items[0]); // 1
console.log(items[1]); // 2
```

-   当使用单个数值参数来调用 Array 构造器时，数组的长度属性会被设置为该参数
-   当使用多个参数(无论是否为数值类型)来调用，这些参数也会成为目标数组的项

数组的这种行为可能会超出我们的预期，因为有时不会留意所传参数的类型。

ES6 引入了`Array.of( )`，该方法的作用非常类似 Array 构造器，但在使用单个数值参数的时候并不会导致特殊结果。`Array.of( )`方法总会创建一个包含所有传入参数的数组，而不管参数的数量与类型：

```javascript
let items = Array.of(1, 2, 3);
console.log(items.length); // 3
console.log(items[0]); // 1
console.log(items[1]); // 2
```

无论传入的参数个数是多少，该方法的行为都保持一致，因此`Array.of`基本上可以用来替代`Array()`或`new Array()`。

</pre>
</details>

[60.[2021-5-12] 柯里化有哪些性能问题？](https://github.com/HJY-xh/plantTrees/issues/236)

<details>
<summary>展开查看</summary>
<pre>

-   一些实现基于存取`argument`对象，通常比存取参数名慢一些
-   一些老版本的`argument.length`的实现上很慢
-   使用 fn.apply( … ) 和 fn.call( … )通常比直接调用 fn( … ) 稍微慢点
-   创建大量的嵌套作用域和闭包函数会带来花销，无论是内存还是速度

</pre>
</details>

[61.[2021-5-13] JavaScript 中的元编程体现在哪里?](https://github.com/HJY-xh/plantTrees/issues/237)

<details>
<summary>展开查看</summary>
<pre>

## 什么是元编程?

先来看看百度百科的定义：

> 元编程（Metaprogramming）是指某类计算机程序的编写，这类计算机程序编写或者操纵其他程序（或者自身）作为它们的数据，或者在运行时完成部分本应在编译时完成的工作。很多情况下与手工编写全部代码相比，元编程的工作效率更高。
> 编写元程序的语言称之为元语言，被操作的语言称之为目标语言。
> 一门语言同时也是自身的元语言的能力称之为反射。

## JavaScript 中的元编程体现在哪里?

根据定义，`eval`就是是实实在在的元编程了，看个 🌰 ：

```javascript
let str = `(function hello(){
    console.log('hello');
})()`;
eval(str); // hello
```

`eval`可以编写计算机程序从而动态生成一段程序，实现**用程序造程序**，这就是元编程。

而如果是程序具备自己造自己的能力，那么这门程序语言就具备反射的能力。上面的 JavaScript 就是自己造自己：通过输入一段 JavaScript 字符串，造出一段新的 JavaScript 函数，因此 JavaScript 具备反射的能力。

</pre>
</details>

[62.[2021-5-17] ES6 中的 Symbol 是什么？](https://github.com/HJY-xh/plantTrees/issues/248)

<details>
<summary>展开查看</summary>
<pre>

**Symbol**是 ES6 的新增属性，代表用给定名称作为唯一标识，这种类型的值可以这样创建：

```javascript
let id = symbol("id"）
```

-   Symbol 确保唯一，即使采用相同的名称，也会产生不同的值。当创建一个字段后，仅知道对应 Symbol 的人能访问
-   Symbol 并不是 100%隐藏，有内置方法 `Object.getOwnPropertySymbols(obj)` 可以获得所有的 Symbol
-   `Reflect.ownKeys(obj)` 可返回对象所有的键，包括 Symbol

</pre>
</details>

[63.[2021-5-17] 为什么会有 BigInt 的提案？](https://github.com/HJY-xh/plantTrees/issues/249)

<details>
<summary>展开查看</summary>
<pre>

JavaScript 中`Number.MAX_SAFE_INTEGER`表示最⼤安全数字，计算结果是`9007199254740991`，即在这个数范围内不会出现精度丢失（⼩数除外）。但是⼀旦超过这个范围，js 就会出现计算不准确的情况，这在⼤数计算的时候不得不依靠⼀些第三⽅库进⾏解决，因此官⽅提出了 BigInt 来解决此问题。

</pre>
</details>

[64.[2021-5-24] 通过 const 关键字声明的对象的属性可以修改吗？](https://github.com/HJY-xh/plantTrees/issues/261)

<details>
<summary>展开查看</summary>
<pre>

const 保证的并不是变量的值不能改动，而是变量指向的那个内存地址不能改动。对于基本类型的数据（数值、字符串、布尔值），其值就保存在变量指向的那个内存地址，因此等同于常量。

但对于引用类型的数据（主要是对象和数组）来说，变量指向数据的内存地址，保存的只是一个指针，const 只能保证这个指针是固定不变的，至于它指向的数据结构是不是可变的，就完全不能控制了。

</pre>
</details>

[65.[2021-5-25] async、await 对比 Promise 的优缺点有哪些？](https://github.com/HJY-xh/plantTrees/issues/262)

<details>
<summary>展开查看</summary>
<pre>

async/await 优点：

-   它做到了真正的串行的同步写法，代码阅读相对容易
-   处理复杂流程时，代码清晰度方面有优势
-   对于条件语句和其它流程语句比较友好，看个 🌰 ：

```javascript
function a() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("cola");
		}, 1000);
	});
}
async function b() {
	try {
		if ((await a()) === "cola") {
			console.log("yes, it is!"); // 会打印
		}
	} catch (err) {
		// ...
	}
}
```

async/await 缺点：

-   无法处理`Promise`返回的 reject 对象，要借助`try...catch...`
-   用 `await` 可能会导致性能问题，因为`await`会阻塞代码，也许之后的异步代码并不依赖于前者，但仍然需要等待前者完成，导致代码失去了并发性
-   `try...catch..`.内部的变量无法传递给下一个`try...catch...`,`Promise`和`then/catch`内部定义的变量，能通过`then`链条的参数传递到下一个`then/catch`，但是`async/await`的`try`内部的变量，如果用`let`和`const`定义则无法传递到下一个`try...catch...`，只能在外层作用域先定义好

但`async/await`确确实实是解决了`Promise`一些问题的。更加灵活的处理异步。

`Promise`的一些问题：

-   一旦执行，不能中途取消，链式调用多个`then`中间不能随意跳出
-   错误无法在外部被捕捉，只能在内部进行预判处理，如果不设置回调函数，`Promise`内部抛出的错误，不会反映到外部

</pre>
</details>

[66.[2021-6-3] typeof NaN 的结果是什么？](https://github.com/HJY-xh/plantTrees/issues/279)

<details>
<summary>展开查看</summary>
<pre>

NaN 指“不是一个数字”（not a number），NaN 是一个“警戒值”（sentinel value，有特殊用途的常规值），用于指出数字类型中的错误情况，即“执行数学运算没有成功，这是失败后返回的结果”。

```javascript
typeof NaN; // "number"
```

</pre>
</details>

[67.[2021-6-5] 使用 documentFragment 与直接操作 DOM 的区别是什么？](https://github.com/HJY-xh/plantTrees/issues/285)

<details>
<summary>展开查看</summary>
<pre>

MDN 中对 documentFragment 的解释：

> DocumentFragment，文档片段接口，一个没有父对象的最小文档对象。它被作为一个轻量版的 Document 使用，就像标准的 document 一样，存储由节点（nodes）组成的文档结构。与 document 相比，最大的区别是 DocumentFragment 不是真实 DOM 树的一部分，它的变化不会触发 DOM 树的重新渲染，且不会导致性能等问题。

当我们把一个 documentFragment 节点插入文档树时，插入的不是 documentFragment 自身，而是它所有的子孙节点。在频繁的 DOM 操作时，我们就可以将 DOM 元素插入 documentFragment，之后一次性的将所有子孙节点插入文档中。和直接操作 DOM 相比，将 documentFragment 节点插入 DOM 树时，而这个操作仅发生一个重渲染的操作，而不是每个节点分别被插入到文档中，因为后者会发生多次重渲染的操作，这样就提高了页面性能。

</pre>
</details>

[68.[2021-6-9] 什么是魔术字符串](https://github.com/HJY-xh/plantTrees/issues/292)

<details>
<summary>展开查看</summary>
<pre>

魔术字符串指的是在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。

魔术字符串不利于修改和维护，风格良好的代码，应该尽量消除魔术字符串，改由含义清晰的变量代替。

看个 🌰

```javascript
const TYPE_AUDIO = Symbol();
const TYPE_VIDEO = Symbol();
const TYPE_IMAGE = Symbol();

function consoleText(resource) {
	switch (resource.type) {
		case TYPE_AUDIO:
			console.log("TYPE_AUDIO");
			break;
		case TYPE_VIDEO:
			console.log("TYPE_VIDEO");
			break;
		case TYPE_IMAGE:
			console.log("TYPE_IMAGE");
			break;
		default:
			throw new Error("Unknown type of resource");
	}
}

const data = {
	name: "cola.jpg",
	type: TYPE_IMAGE,
};

consoleText(data);
```

</pre>
</details>

[69.[2021-6-9] Symbol 如何用于私有变量的实现](https://github.com/HJY-xh/plantTrees/issues/293)

<details>
<summary>展开查看</summary>
<pre>

看个 🌰

```javascript
const Example = (function () {
	let _private = Symbol("private");

	class Example {
		constructor() {
			this[_private] = "private";
		}
		getName() {
			return this[_private];
		}
	}

	return Example;
})();

const ex = new Example();

console.log(ex.getName()); // private

console.log(ex.name); // undefined
```

</pre>
</details>

[70.[2021-6-10] JS 异步编程方式有哪些?](https://github.com/HJY-xh/plantTrees/issues/296)

<details>
<summary>展开查看</summary>
<pre>

JavaScript 中的异步机制可以分为以下几种：

-   回调函数 的方式，使用回调函数的方式有一个缺点是，多个回调函数嵌套的时候会造成回调函数地狱，上下两层的回调函数间的代码耦合度太高，不利于代码的可维护。

-   Promise 的方式，使用 Promise 的方式可以将嵌套的回调函数作为链式调用。但是使用这种方法，有时会造成多个 then 的链式调用，可能会造成代码的语义不够明确。

-   generator 的方式，它可以在函数的执行过程中，将函数的执行权转移出去，在函数外部还可以将执行权转移回来。当遇到异步函数执行的时候，将函数执行权转移出去，当异步函数执行完毕时再将执行权给转移回来。因此在 generator 内部对于异步操作的方式，可以以同步的顺序来书写。使用这种方式需要考虑的问题是何时将函数的控制权转移回来，因此需要有一个自动执行 generator 的机制，比如说 co 模块等方式来实现 generator 的自动执行。

-   async 函数 的方式，async 函数是 generator 和 promise 实现的一个自动执行的语法糖，它内部自带执行器，当函数内部执行到一个 await 语句的时候，如果语句返回一个 promise 对象，那么函数将会等待 promise 对象的状态变为 resolve 后再继续向下执行。因此可以将异步逻辑，转化为同步的顺序来书写，并且这个函数可以自动执行。

</pre>
</details>

[71.[2021-6-12] CommonJS 和 ES6 模块的区别是什么？](https://github.com/HJY-xh/plantTrees/issues/303)

<details>
<summary>展开查看</summary>
<pre>

-   CommonJS 模块是运行时加载，ES6 Modules 是编译时输出接口
-   CommonJS 输出是值的拷贝；ES6 Modules 输出的是值的引用，被输出模块的内部的改变会影响引用的改变
-   CommonJs 导入的模块路径可以是一个表达式，因为它使用的是 require()方法；而 ES6 Modules 只能是字符串
-   CommonJS this 指向当前模块，ES6 Modules this 指向 undefined
-   且 ES6 Modules 中没有这些顶层变量：arguments、require、module、exports、**filename、**dirname

关于第一个差异，是因为 CommonJS 加载的是一个对象（即 module.exports 属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。

</pre>
</details>

[72.[2021-6-17] 什么是尾调用？](https://github.com/HJY-xh/plantTrees/issues/320)

<details>
<summary>展开查看</summary>
<pre>

尾调用指的是函数的最后一步调用另一个函数。代码的执行是基于栈的，所以当在一个函数里调用另一个函数时，会保留当前的执行上下文，然后再新建另外一个执行上下文加入栈中。使用尾调用的话没因为已经是函数的最后一步，所以这时可以不必再保留当前的执行上下文，从而节省了内存，这就是尾调用优化。

</pre>
</details>

[73.[2021-6-18] 怎么理解 JavaScript 中的垃圾回收机制？](https://github.com/HJY-xh/plantTrees/issues/322)

<details>
<summary>展开查看</summary>
<pre>

### 必要性

由于字符串、对象和数组没有固定大小，所有当他们的大小已知时，才能对他们进行动态的存储分配。JavaScript 程序每次创建字符串、数组或对象时，解释器都必须分配内存来存储那个实体。只要像这样动态地分配了内存，最终都要释放这些内存以便他们能够被再用，否则，JavaScript 的解释器将会消耗完系统中所有可用的内存，造成系统崩溃。
JS 不像 C/C++，他有自己的一套垃圾回收机制（Garbage Collection）。JavaScript 的解释器可以检测到何时程序不再使用一个对象了，当他确定了一个对象是无用的时候，他就知道不再需要这个对象，可以把它所占用的内存释放掉了，例如

```JavaScript
var a = "Hello";
var b = " World";
var a = b;
```

**这时，会释放掉"hello"，释放内存以便再引用**

### 垃圾回收的方法：标记清除、计数引用

-   **标记清除**
    这是最常见的垃圾回收方式，当变量进入环境时，就标记这个变量为”进入环境“,从逻辑上讲，永远不能释放进入环境的变量所占的内存，因为只要执行流程进入相应的环境，就可能用到他们。当离开环境时，就标记为"离开环境"。
    垃圾回收器在运行的时候会给存储在内存中的变量都加上标记（所有都加），然后去掉环境变量中的变量，以及被环境变量中的变量所引用的变量（条件性去除标记），删除所有被标记的变量，删除的变量无法在环境变量中被访问，最后垃圾回收器完成了内存的清除工作，并回收他们所占用的内存。

-   **引用记数法**
    另一种不太常见的方法就是引用计数法，引用计数法的意思就是每个值引用的次数。当声明了一个变量，并用一个引用类型的值赋值给改变量，则这个值的引用次数为 1,；相反的，如果包含了对这个值引用的变量又取得了另外一个值，则原先的引用值引用次数就减 1，当这个值的引用次数为 0 的时候，说明没有办法再访问这个值了，因此就把所占的内存给回收进来，这样垃圾收集器再次运行的时候，就会释放引用次数为 0 的这些值。
    用引用计数法会存在内存泄露，下面来看原因：

```JavaScript
function problem() {
  var objA = new Object();
  var objB = new Object();
  objA.someOtherObject = objB;
  objB.anotherObject = objA;
}
```

在这个例子里面，objA 和 objB 通过各自的属性相互引用，这样的话，两个对象的引用次数都为 2，在采用引用计数的策略中，由于函数执行之后，这两个对象都离开了作用域，函数执行完成之后，因为计数不为 0，这样的相互引用如果大量存在就会导致内存泄露。

</pre>
</details>

[74.[2021-6-21] V8 引擎如何执行 JS 代码?](https://github.com/HJY-xh/plantTrees/issues/328)

<details>
<summary>展开查看</summary>
<pre>

在执行一段代码时，JS 引擎首先会创建一个执行栈。

之后 JS 引擎再创建一个全局执行上下文，并 push 到执行栈中，在这个过程中 JS 引擎会为这段代码中所有的变量分配内存并赋一个初始值（undefined），创建完成后，JS 引擎进入执行阶段，逐行执行代码，即为之前分配好内存的变量逐个赋值（真实值）。

如果这段代码中存在函数声明和调用，那么 JS 引擎会创建一个函数执行上下文，并 push 到执行栈中，其创建和执行过程跟全局执行上下文一样。但有特殊情况，即当函数中存在对其它函数的调用，JS 引擎会在父函数执行的过程中，将子函数的全局执行上下文 push 到执行栈，这也是为什么子函数能够访问到父函数内所声明的变量。

还有一种特殊情况是，在子函数执行的过程中，父函数已经 return 了，这种情况下，JS 引擎会将父函数的上下文从执行栈中移除，与此同时，JS 引擎会为还在执行的子函数上下文创建一个闭包，这个闭包里保存了父函数内声明的变量及其赋值，子函数仍然能够在其上下文中访问并使用这边变量/常量。当子函数执行完毕，JS 引擎才会将子函数的上下文及闭包一并从执行栈中移除。

最后，JS 引擎是单线程的，那么它是如何处理高并发的呢？

比如 setTimeout 或 fetch 请求都是 non-blocking 的，当异步调用代码触发时，JS 引擎会将需要异步执行的代码移出调用栈，当返回结果，JS 引擎会立即将与之对应的回调函数 push 进任务队列中等待被调用，当调用(执行)栈中已经没有需要被执行的代码时，JS 引擎会立刻将任务队列中的回调函数逐个 push 进调用栈并执行。这个过程也称之为事件循环。

</pre>
</details>

[74.[2021-6-23] 如何优化 JavaScript 中含有多个条件的 if 语句？](https://github.com/HJY-xh/plantTrees/issues/331)

<details>
<summary>展开查看</summary>
<pre>

可以在数组中存储多个值，并且使用数组的 includes 方法，直接上代码 👇

```javascript
//一般写法
if (x === "abc" || x === "def" || x === "ghi" || x === "jkl") {
	//logic
}

// 优化后
const arr = ["abc", "def", "ghi", "jkl"];
if (arr.includes(x)) {
	//logic
}
```

</pre>
</details>

[75.[2021-6-23] 如何优化 JavaScript 中对 Null、Undefined、Empty 这些值的检查语法？](https://github.com/HJY-xh/plantTrees/issues/332)

<details>
<summary>展开查看</summary>
<pre>

直接上代码 👇

```javascript
//一般写法
if (test1 !== null || test1 !== undefined || test1 !== "") {
	let test2 = test1;
}
// 优化后
let test2 = test1 || "";
```

原理：根据 `||` 的基本使用方法而达到优化代码的效果，即**当数值参与逻辑或运算时，结果为 true，会返回第一个为真的值；如果结果为 false，会返回第二个为假的值**，具体可查看[资料](https://www.jb51.net/article/140789.htm)

</pre>
</details>

[76.[2021-6-23] 如何运用与运算符来优化多条件情况下的 JavaScript 代码？](https://github.com/HJY-xh/plantTrees/issues/333)

<details>
<summary>展开查看</summary>
<pre>

如果需要实现某个变量为 true 时调用一个函数，可以使用 && 运算符 👇

```javascript
//一般写法
if (test1) {
	callMethod();
}

//优化后
test1 && callMethod();
```

</pre>
</details>

[77.[2021-6-23] 基本数据类型和复杂数据类型存储有什么区别？](https://github.com/HJY-xh/plantTrees/issues/335)

<details>
<summary>展开查看</summary>
<pre>

-   基本数据类型存储在栈内存，存储的是值。
-   复杂数据类型存储在堆内存，地址（指向堆中的值）存储在栈内存。当我们把对象赋值给另一个变量时，复制的是地址，指向同一块内存空间。

</pre>
</details>

[78.[2021-6-24] JavaScript 中 switch 语句对应的缩写法](https://github.com/HJY-xh/plantTrees/issues/337)

<details>
<summary>展开查看</summary>
<pre>

可以把条件值保存在名值对中，基于这个条件使用键值对代替 switch👇

```javascript
//一般情况
switch (data) {
	case 1:
		test1();
		break;

	case 2:
		test2();
		break;

	case 3:
		test();
		break;
	// And so on...

	default:
		throw new Error(`no such situation '${data}'`);
}

//优化后
var datas = {
	1: test1,
	2: test2,
	3: test,
};

var func = datas[data];
if (!func) {
	throw new Error(`no such situation '${data}'`);
}
func();
```

**不过开发中尽量不要用这种方法噢，对象的形式很容易被人恶意篡改**

</pre>
</details>

[79.[2021-6-24] JavaScript 中扩展运算符的缩写法](https://github.com/HJY-xh/plantTrees/issues/338)

<details>
<summary>展开查看</summary>
<pre>

直接看例子 👇

```javascript
//一般写法 // 连接数组
const data = [1, 2, 3];
const test = [4, 5, 6].concat(data);

//优化后
const data = [1, 2, 3];
const test = [4, 5, 6, ...data];
console.log(test); // [ 4, 5, 6, 1, 2, 3];
```

拓展 👉 用扩展运算符来完成深克隆操作：

```javascript
const test1 = {
	name: "Jae",
	age: 18,
	sex: "boy",
};
const test2 = { ...test1 };
test1.name = "Jack";
console.log(test2); //name还是输出Jae，如果直接让test2 = test1的话此时test中的name也会被改成Jack
```

</pre>
</details>

[80.[2021-6-24] JavaScript 中的解构赋值缩写法](https://github.com/HJY-xh/plantTrees/issues/339)

<details>
<summary>展开查看</summary>
<pre>

直接看代码 👇

```javascript
//一般写法
const test1 = this.data.test1;
const test2 = this.data.test2;
const test2 = this.data.test3;

//优化后
const { test1, test2, test3 } = this.data;
```

</pre>
</details>

[81.[2021-6-24] JavaScript 中 Array.find 缩写法](https://github.com/HJY-xh/plantTrees/issues/340)

<details>
<summary>展开查看</summary>
<pre>

当我们需要在一个对象数组中按属性值查找特定对象时，可使用 find 方法 👇

### 一般情况

```javascript
const data = [
	{
		type: "test1",
		name: "abc",
	},
	{
		type: "test2",
		name: "cde",
	},
	{
		type: "test1",
		name: "fgh",
	},
];
function findtest1(name) {
	for (let i = 0; i < data.length; ++i) {
		if (data[i].type === "test1" && data[i].name === name) {
			return data[i];
		}
	}
}
```

### 优化后

```javascript
let filteredData = data.find((data) => data.type === "test1" && data.name === "fgh");
console.log(filteredData); // { type: 'test1', name: 'fgh' }
```

**ps:** find() 方法返回通过测试（函数内判断）的数组的第一个元素的值。

</pre>
</details>

[82.[2021-6-25] 正则如何实现字符串的 trim 功能？](https://github.com/HJY-xh/plantTrees/issues/343)

<details>
<summary>展开查看</summary>
<pre>

代码如下：

```javascript
function trim(str) {
  let reg = /^\s+|\s+$/g;
  return str.replace(reg, "");
}

trim("   哈哈哈哈   “）// 哈哈哈哈
```

</pre>
</details>

[83.[2021-6-25] JavaScript 中的 entries 方法是什么？](https://github.com/HJY-xh/plantTrees/issues/344)

<details>
<summary>展开查看</summary>
<pre>

### 定义和用法

entries() 方法返回一个数组的迭代对象，该对象包含数组的键值对 (key/value)
迭代对象中数组的索引值作为 key， 数组元素作为 value

示例 💻

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.entries();

//结果如下
[0, "Banana"][(1, "Orange")][(2, "Apple")][(3, "Mango")];
```

### 拓展：该特性可以把对象转换成一个由若干对象组成的数组

示例 💻

```javascript
const data = { test1: "abc", test2: "cde", test3: "efg" };
const arr = Object.entries(data);
console.log(arr);
/** Output:
[ 
  [ 'test1', 'abc' ],
  [ 'test2', 'cde' ],
  [ 'test3', 'efg' ]
]
**/
```

</pre>
</details>

[84.[2021-6-25] 利用扩展运算符找出一个数组中最大和最小的值](https://github.com/HJY-xh/plantTrees/issues/345)

<details>
<summary>展开查看</summary>
<pre>

直接看代码 👇

```javascript
const arr = [1, 2, 3, 4];
Math.max(…arr); // 4
Math.min(…arr); // 1
```

</pre>
</details>

[85.[2021-6-29] BigInt 和 Number 的区别是什么？](https://github.com/HJY-xh/plantTrees/issues/350)

<details>
<summary>展开查看</summary>
<pre>

-   Number 类型的数字有**精度限制**，数值的精度只能到 53 个二进制位（相当于 16 个十进制位, ±9007199254740992），大于这个范围的整数，就无法精确表示了

-   BigInt**没有位数的限制，任何位数的整数都可以精确表示**。但是其只能用于表示整数，且为了与 Number 进行区分，BigInt 类型的数据必须添加后缀 `n` 。BigInt 可以使用负号（-），但是不能使用正号（+）。

-   Number 类型的数字和 BigInt 类型的数字不能混合计算

```javascript
12n + 12; //报错
```

</pre>
</details>

[86.[2021-7-5] event 对象中 target 和 currentTarget 属性有什么区别?](https://github.com/HJY-xh/plantTrees/issues/366)

<details>
<summary>展开查看</summary>
<pre>

本质区别如下：

-   event.target 返回触发事件的元素
-   event.currentTarget 返回绑定事件的元素

</pre>
</details>

[87.[2021-7-6] es6 中新增的数组方法 Array.from()如何使用？](https://github.com/HJY-xh/plantTrees/issues/367)

<details>
<summary>展开查看</summary>
<pre>

**将其他数据类型转换为数组**

## 基本用法

```js
console.log(Array.from("str")); // ["s", "t", "r"]
```

## 哪些可以通过 `Array.from()` 转换成数组？

1. 所有**可遍历**的
   例如：数组、字符串、Set、Map、NodeList、arguments

```js
console.log(Array.from(new Set[1, 2, 1)); // [1, 2]
// 其实使用...new Set这种展开符的形式更直观些
```

2. 拥有 length 属性的任意对象

```js
const obj = {
	0: "a",
	1: "b",
	name: "Jae",
	length: 3,
};
console.log(Array.from(obj)); // ["a", "b", undefined] length控制长度，只会将数字键的元素值放进数组
```

## 第二个参数

是一个回调，作用类似于数组的 map 方法，用来对每个元素进行处理，将处理后的值放入返回的数组。相当于把 map 方法集成到第二个参数：

```js
const result = Array.from("12", (value) => value * 2);
console.log(result); // [2, 4]
```

## 第三个参数

修改 this 指向：

```js
Array.from("12", (value) => {
	console.log(this); // window对象
});

Array.from(
	"12",
	(value) => {
		console.log(this); // 还是window对象，这里注意箭头函数无法修改this指向
	},
	document
);

Array.from(
	"12",
	function (value) {
		console.log(this); // #document
	},
	document
);
```

</pre>
</details>

[88.[2021-7-8] 浏览器如何解析日期最稳妥？](https://github.com/HJY-xh/plantTrees/issues/372)

<details>
<summary>展开查看</summary>
<pre>

在 Safari 浏览器上解析 YYYY-MM-DD HH:mm:ss 这种日期格式会报错`Invalid Dat`e，但 Chrome 上解析这种日期格式没有问题。

Safari:

```html
new Date("2021-07-08 18:30:00"); // Invalid Date
```

Chrome:

```html
new Date("2021-07-08 18:30:00"); // Thu Jul 08 2021 18:30:00 GMT+0800 (中国标准时间)
```

Safari 浏览器上可用 YYYY/MM/DD HH:mm:ss 这种日期格式，简单来说就是年月日必须使用/衔接而不能使用-衔接。Chrome 也支持该格式，然而接口返回字段的日期格式通常是 YYYY-MM-DD HH:mm:ss，那么需替换其中的`-`为`/`。

```javascript
const date = "2021-07-08 18:30:00";
new Date(date.replace(/\-/g, "/"));
// Thu Jul 08 2021 18:30:00 GMT+0800 (中国标准时间)
```

</pre>
</details>

[89.[2021-7-9] 浏览器回到顶部的简单方法是什么？](https://github.com/HJY-xh/plantTrees/issues/373)

<details>
<summary>展开查看</summary>
<pre>

这个方法就是`Element`的一个方法：`scrollIntoView`。

Element 接口的 scrollIntoView()方法会滚动元素的父容器，使被调用 scrollIntoView()的元素对用户可见。简单来说就是相对视窗让容器滚动到目标元素位置。它有三个可选参数能让 scrollIntoView 滚动起来更优雅：

-   behavior：动画过渡效果，默认 auto 无，可选 smooth 平滑
-   inline：水平方向对齐方式，默认 nearest 就近对齐，可选 start 顶部对齐、center 中间对齐和 end 底部对齐
-   block：垂直方向对齐方式，默认 start 顶部对齐，可选 center 中间对齐、end 底部对齐和 nearest 就近对齐

看个 🌰：

```javascript
document.body.scrollIntoView({ behavior: "smooth" });
// 在控制台中运行即可回到页面顶部
```

</pre>
</details>

[90.[2021-7-10] export 和 export default 使用上有什么区别？](https://github.com/HJY-xh/plantTrees/issues/374)

<details>
<summary>展开查看</summary>
<pre>

export 是用于对外输出本模块（一个文件可以理解为一个模块）变量的接口。

代码如下：

```javascript
export default  xxx
import xxx from "./"

export xxx
import {xxx} from "./"
```

</pre>
</details>

[91.[2021-7-11] JSONP 的原理是什么？](https://github.com/HJY-xh/plantTrees/issues/375)

<details>
<summary>展开查看</summary>
<pre>

JSONP 是一种跨域通信的手段，它的原理如下:

-   利用 script 标签的 src 属性来实现跨域
-   通过将前端方法作为参数传递到服务器端，然后由服务器端注入参数之后再返回，实现服务器端向客户端通信
-   由于使用 script 标签的 src 属性，因此只支持 get 方法

</pre>
</details>

[92.[2021-7-14] 柯里化是什么？](https://github.com/HJY-xh/plantTrees/issues/379)

<details>
<summary>展开查看</summary>
<pre>

所谓"柯里化"，就是把一个多参数的函数，转化为单参数函数。

看个例子：

```javascript
// 柯里化之前
function add(x, y) {
	return x + y;
}

add(1, 2); // 3

// 柯里化之后
function addX(y) {
	return function (x) {
		return x + y;
	};
}

addX(2)(1); // 3
```

</pre>
</details>

[93.[2021-7-15] JS 的 new 操作符做了哪些事情？](https://github.com/HJY-xh/plantTrees/issues/380)

<details>
<summary>展开查看</summary>
<pre>

new 操作符新建了一个空对象，这个对象原型指向构造函数的 prototype，执行构造函数后返回这个对象

</pre>
</details>

[94.[2021-7-19] console 会造成内存泄露吗？](https://github.com/HJY-xh/plantTrees/issues/388)

<details>
<summary>展开查看</summary>
<pre>

在日常开发中，我们经常在控制台打印数据，之所以在控制台能看到数据输出，是因为浏览器保存了我们输出对象的信息数据引用，也正是因此未清理的 console 如果输出了对象也会造成内存泄漏。

这里看个 🌰

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Console</title>
</head>
<body>
    <button id="btn">新增数组</button>

  <script>
    (function () {
      function Test() {
        this.init();
      }
      Test.prototype.init = function () {
        this.array = new Array(50000).fill('test');
        console.log(this);
      }

      document.querySelector('#btn').onclick = function () {
        new Test();
      }
    })()
  </script>

</body>
</html>
```

在控制台中可以通过 Memory 面板来查看

</pre>
</details>

[95.[2021-7-21] Array.isArray 的 polyfill 如何实现？](https://github.com/HJY-xh/plantTrees/issues/391)

<details>
<summary>展开查看</summary>
<pre>

思路：传入需要检测的值，如果是数组，返回 true，否则 false。

```javascript
Array.myIsArray = (arg) => {
	return Object.prototype.toString.call(arg) === "[object Array]";
};
```

</pre>
</details>

[96.[2021-7-21] 带有 async 标识的函数一定会返回 Promise 吗？](https://github.com/HJY-xh/plantTrees/issues/392)

<details>
<summary>展开查看</summary>
<pre>

async 函数一定会返回一个 Promise 对象。

如果一个 async 函数的返回值看起来不是 Promise，那么它将会被隐式的包装在一个 Promise 中。

</pre>
</details>

[97.[2021-7-27] encodeURI 和 decodeURI、encodeURIComponent 和 decodeURIComponent 可以多次编解码吗？](https://github.com/HJY-xh/plantTrees/issues/404)

<details>
<summary>展开查看</summary>
<pre>

可以多次编解码，看两个例子：

```javascript
const str = `?a=1&b= 2&c=3`;

const firstEncode = encodeURIComponent(str);
console.log('[ firstEncode ]', firstEncode); // [ firstEncode ] %3Fa%3D1%26b%3D%202%26c%3D3

const secondEncode = encodeURIComponent(firstEncode);
console.log('[ secondEncode ]', secondEncode); // [ secondEncode ] %253Fa%253D1%2526b%253D%25202%2526c%253D3


const firstDecode = decodeURIComponent(secondEncode);
console.log('[ firstDecode ]', firstDecode); // [ firstDecode ] %3Fa%3D1%26b%3D%202%26c%3D3

const secondDecode = decodeURIComponent(firstDecode);
console.log('[ secondDecode ]', secondDecode) [ secondDecode ] ?a=1&b= 2&c=3
```

```javascript
const str = `?a=1&b= 2&c=3`;

const firstEncode = encodeURI(str);
console.log("[ firstEncode ]", firstEncode); // [ firstEncode ] ?a=1&b=%202&c=3

const secondEncode = encodeURI(firstEncode);
console.log("[ secondEncode ]", secondEncode); // [ secondEncode ] ?a=1&b=%25202&c=3

const firstDecode = decodeURI(secondEncode);
console.log("[ firstDecode ]", firstDecode); // [ firstDecode ] ?a=1&b=%202&c=3

const secondDecode = decodeURI(firstDecode);
console.log("[ secondDecode ]", secondDecode); // [ secondDecode ] ?a=1&b= 2&c=3
```

</pre>
</details>

[98.[2021-8-1] 获得对象上的属性有哪些办法？](https://github.com/HJY-xh/plantTrees/issues/409)

<details>
<summary>展开查看</summary>
<pre>

这里提供三种方式：

-   for（let I in obj）该方法依次访问一个对象及其原型链中所有可枚举的类型
-   object.keys:返回一个数组，包括所有可枚举的属性名称
-   object.getOwnPropertyNames:返回一个数组包含不可枚举的属性

</pre>
</details>

[99.[2021-8-9] 包装类跟普通类有什么区别？](https://github.com/HJY-xh/plantTrees/issues/428)

<details>
<summary>展开查看</summary>
<pre>

JS 提供了 3 个包装类 分别是 new String()，new Number()，new Boolean()。由于基础类型不能添加属性和方法，js 的包装类的作用是将基础类型包装成一个对象，这样就可以有属性和方法。

tips:当我们对一些基本数据类型的值去调用属性和方法时，浏览器会临时使用包装类将其转换为对象，然后在调用对象的属性和方法；调用完以后，在将其转换为基本数据类型。

</pre>
</details>

[100.[2021-8-12] Object.assign()是深拷贝还是浅拷贝？](https://github.com/HJY-xh/plantTrees/issues/430)

<details>
<summary>展开查看</summary>
<pre>

先来看看`Object.assign()`的定义：用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标目标对象。

该方法拷贝的是属性值，假如源对象的属性值是一个对象的引用，那么它也指向那个引用。也就是说，如果对象的值为简单类型，那么该方法的表现为深拷贝，如果对象的值是引用类型，那么对于这个对象是浅拷贝。

看个 🌰：

```javascript
let source = {
	a: 1,
	b: 2,
	c: {
		d: 3,
		e: 4,
	},
};

let target = Object.assign({}, source);

target.a = 10;
target.c.d = 30;

console.log(source, target); // { a: 1, b: 2, c: { d: 30, e: 4 } } { a: 10, b: 2, c: { d: 30, e: 4 } }
```

</pre>
</details>

[101.[2021-8-12] JSON.stringify()转换规则是什么样的？](https://github.com/HJY-xh/plantTrees/issues/431)

<details>
<summary>展开查看</summary>
<pre>

JSON.stringify()将值转换为相应的 JSON 格式：

-   转换值如果有 toJSON() 方法，该方法定义什么值将被序列化。
-   非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中。
-   布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。
-   undefined、任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 null（出现在数组中时）。函数、undefined 被单独转换时，会返回 undefined，如 JSON.stringify(function(){}) or JSON.stringify(undefined).
-   对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。
-   所有以 symbol 为属性键的属性都会被完全忽略掉，即便 replacer 参数中强制指定包含了它们。
-   Date 日期调用了 toJSON() 将其转换为了 string 字符串（同 Date.toISOString()），因此会被当做字符串处理。
-   NaN 和 Infinity 格式的数值及 null 都会被当做 null。
-   其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性。

看两个 🌰：

```javascript
let source = {
	a: 1,
	b: 2,
	c: {
		d: 3,
		e: 4,
	},
	f: undefined,
	e: null,
	g: NaN,
	h: Infinity,
	i: new Date(),
	j: new Map().set("k", 5),
	undefined: 6,
	[Symbol()]: 7,
};

let target = JSON.stringify(source);

console.log(target); // {"a":1,"b":2,"c":{"d":3,"e":4},"e":null,"g":null,"h":null,"i":"2021-08-12T03:16:37.251Z","j":{},"undefined":6}
```

```javascript
let source = {
	toJSON() {
		return { a: 1 };
	},
};
let target = JSON.stringify(source);

console.log(target); // {"a":1}
```

</pre>
</details>
