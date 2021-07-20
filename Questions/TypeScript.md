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
