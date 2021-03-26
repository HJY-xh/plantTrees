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
