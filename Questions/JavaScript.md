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

```
(function(){
	"use strict"
	b=1//Uncaught ReferenceError: b is not defined
})()
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

```
<div id="test" class="button" custom-attr="1"></div>
```

```
document.getElementById('test').attributes;
// 返回：[custom-attr="hello", class="button", id="test"]
```

2. Attribute 是 String 类型。对于上面的 div，`document.getElementById('test').getAttribute('custom-attr')` 或 `$('#test').attr('custom-attr') `都会返回 string: "1"。

### **_property_**

1. Property 属于 DOM，DOM 的本质就是 JavaScript 中的一个 object。我们可以像操作普通 object 一样读取、设置 property，property 可以是任意类型。

```
document.getElementById('test').foo = 1;
// 设置property：foo为number: 1
document.getElementById('test').foo;
// 读取property，返回number：1
$('#test').prop('foo');
// jQuery读取property，返回number：1
```

```
$('#test').prop('foo', {
    age: 23,
    name: 'John'
});
// jQuery设置property：foo为一个object
document.getElementById('test').foo.age;
// 返回number：23
document.getElementById('test').foo.name;
// 返回string："John"
```

2. 非自定义 attribute，如 id、class、titile 等，都会有对应的 property 映射。

```
<div id="test" class="button" foo="1"></div>
```

```
document.getElementById('test').id;
// 返回string："test"
document.getElementById('test').className;
// 返回string："button"
document.getElementById('test').foo;
// 返回undefined，因为foo是自定义attribute
```

注：由于 **_class_** 为 JavaScript 的保留关键字，所以通过 property 操作 class 时应使用 **_className_**。

3. 非自定义的 property 或 attribute 的变化多数是联动的。

```
<div id="test" class="button"></div>
```

```
var div = document.getElementById('test');
div.className = 'red-input';
div.getAttribute('class');
// 返回string："red-input"
div.setAttribute('class','green-input');
div.className;
// 返回string："green-input"
```

4. 带有默认值的 attribute 不随 property 变化而变化。

```
<input id="search" value="foo" />
```

```
var input = document.getElementById('search');
input.value = 'foo2';
input.getAttribute('value');
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

```
Function.prototype.bind1 = function(){
    //将参数拆解为数组
    const args = Array.prototype.slice.call(arguments);

    //获取this（数组第一项）
    const t = args.shift();

    //fn1.bind(...) 中的fn1
    const self = this;

    return function(){
        return self.apply(t, args);
    }
}

function fn1(a, b, c){
    console.log(this);
    console.log(a, b, c);
    return 'this is fn1'
}

const fn2 = fn1.bind1({x: 100}, 10, 20, 30);
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
