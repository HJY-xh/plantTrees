## 该例子通过`Node.js`演示`postMessage`

### 相关issues: 
[[2021-2-23] 浏览器内多个标签页之间的通信方式有哪些？](https://github.com/HJY-xh/plantTrees/issues/9)


### 演示步骤：👇

1. 打开`clientA.js`所在目录，命令行输入`node clientA.js`

2. 打开`clientB.js`所在目录，命令行输入`node clientB.js`

3. 在浏览器中打开`http://localhost:3000/`，进入页面时会自动打开`http://localhost:4000/`，打开两个客户端的控制台，即可看见通信
