## TypeScript

[1.[2021-7-20] TypeScript 的交叉类型如何使用？](https://github.com/HJY-xh/plantTrees/issues/389)

<details>
<summary>展开查看</summary>
<pre>

交叉类型是将多个类型合并成一个类型，它允许将多种类型叠加到一起成为一种新的类型，它包含了所有类型的的特性。

用法示例：

```javascript
interface Car {
	name: string;
}

interface Toy {
	price: number;
}

const toyCat: Car & Toy = {
	name: "BWN",
	price: 100,
};
```

这里的`toyCat`是` Car & Toy`联合类型，故必须有两个类型所包含的所有类型。

</pre>
</details>

[2.[2021-7-20] TypeScript 的联合类型如何使用？](https://github.com/HJY-xh/plantTrees/issues/390)

<details>
<summary>展开查看</summary>
<pre>

联合类型与交叉类型很有关联，但是使用上却完全不同。

联合类型表示一个值可以是几种类型之一。 我们用竖线（|）分隔每个类型，所以 number | string | boolean 表示一个值可以是 number，string，或 boolean。

如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。

看个例子：

```javascript
interface Car {
	name: string;
}

interface Toy {
	price: number;
}

const toyCat: Car | Toy = {
	name: "BWN",
};
```

</pre>
</details>

[3.[2021-7-28] 类型断言的用法有哪些？](https://github.com/HJY-xh/plantTrees/issues/405)

<details>
<summary>展开查看</summary>
<pre>

可以使用关键字`as`和`<类型>`，看个例子：

```typescript
interface Student {
	name: string;
	studentId: string;
}

interface Teacher {
	name: string;
	teacherId: string;
}

const getPerson = (): Student | Teacher => {
	return {
		name: "小黄",
		studentId: "001",
	};
};

const person = getPerson();

if ((<Student>person).studentId) {
	console.log("[ person ]", (<Student>person).studentId);
}

if ((person as Student).studentId) {
	console.log("[ person ]", (person as Student).studentId);
}
```

这里的`getPerson`是联合类型，只能访问此联合类型的所有类型里共有的成员，为了让这段代码工作，可以使用类型断言。

</pre>
</details>
