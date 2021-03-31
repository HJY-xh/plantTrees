## HTTP(S) 相关

[1.[2021-2-28] 什么是反向代理？](https://github.com/HJY-xh/plantTrees/issues/18)

<details>
<summary>展开查看</summary>
<pre>
反向代理（Reverse Proxy)是指通过代理服务器来接收互联网上的连接请求，然后将请求转发给内部网络上服务器，并把从服务器上得到的结果返回给互联网上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器。
</pre>
</details>

[2.[2021-3-1] TCP 和 UDP 的区别是什么？](https://github.com/HJY-xh/plantTrees/issues/20)

<details>
<summary>展开查看</summary>
<pre>
TCP(Transmission Control Protocol，传输控制协议)是基于连接的协议，也就是说，在收发数据前，必须和对方建立可靠的连接。 一个TCP连接必须要经过三次“对话”才能建立起来。
UDP(User Data Protocol，用户数据报协议)是面向非连接的协议，它不与对方建立连接，而是直接就把数据包发送过去。

具体区别如下表格：
| | UDP | TCP |
| ---- | ---- | ---- |
| 是否连接 | 无连接|面向连接|
| 是否可靠 | 不可靠传输，不使用流量控制和拥塞控制 |可靠传输，使用流量控制和拥塞控制|
| 连接对象个数| 支持一对一，一对多，多对一和多对多交互通信|只能是一对一通信|
| 传输方式| 面向报文|面向字节流|
| 首部开销| 首部开销小，仅 8 字节|首部最小 20 字节，最大 60 字节|
| 适用场景 |适用于实时应用（IP 电话、视频会议、直播等）|适用于要求可靠传输的应用，例如文件传输|

</pre>
</details>

[3.[2021-3-8] 有哪些常见的 http 状态码？](https://github.com/HJY-xh/plantTrees/issues/37)

<details>
<summary>展开查看</summary>
<pre>

-   200 成功

-   301 重定向

-   304 (未修改) 自从上次请求后，请求的网页未修改过。 服务器返回此响应时，不会返回网页内容。

-   400 (错误请求) 服务器不理解请求的语法。

-   403 (禁止) 服务器拒绝请求。

-   404 (未找到) 服务器找不到请求的网页。

-   500 (服务器内部错误) 服务器遇到错误，无法完成请求。

-   501 (尚未实施) 服务器不具备完成请求的功能。 例如，服务器无法识别请求方法时可能会返回此代码。

-   502 (错误网关) 服务器作为网关或代理，从上游服务器收到无效响应。

-   503 (服务不可用) 服务器目前无法使用(由于超载或停机维护)。 通常，这只是暂时状态。

-   504 (网关超时) 服务器作为网关或代理，但是没有及时从上游服务器收到请求。

-   505 (HTTP 版本不受支持) 服务器不支持请求中所用的 HTTP 协议版本。
</pre>
</details>

[4.[2021-3-14] HTTP/2 中二进制协议的概念是什么？](https://github.com/HJY-xh/plantTrees/issues/57)

<details>
<summary>展开查看</summary>
<pre>
HTTP/2 是一个二进制协议。
在 HTTP/1.1 版中，报文的头信息必须是文本（ASCII 编码），数据体可以是文本，也可以是 二进制。
HTTP/2 则是一个彻底的二进制协议，头信息和数据体都是二进制，并且统称为"帧"，可以分为头信息帧和数据帧。 帧的概念是它实现多路复用的基础。
</pre>
</details>

[4.[2021-3-17] 命中强缓存有什么表现？](https://github.com/HJY-xh/plantTrees/issues/63)

<details>
<summary>展开查看</summary>
<pre>
命中强缓存时，浏览器并不会将请求发送给服务器。在Chrome的开发者工具中看到http的返回码是200，但是在Size列会显示出该请求或文件为缓存中取得。

强缓存是利用 http 的返回头中的 Expires 或者 Cache-Control 两个字段来控制的，用来表示资源的缓存时间。

</pre>
</details>

[5.[2021-3-19] Expires 的具体含义是什么？](https://github.com/HJY-xh/plantTrees/issues/69)

<details>
<summary>展开查看</summary>
<pre>

缓存过期时间，用来指定资源到期的时间，是服务器端的具体的时间点。也就是说，Expires=max-age + 请求时间，需要和 Last-modified 结合使用。 Expires 是 Web 服务器响应消息头字段，在响应 http 请求时告诉浏览器在过期时间前浏览器可以直接从浏览器缓存取数据，而无需再次请求。

该字段会返回一个时间，比如 Expires:Thu,31 Dec 2037 23:59:59 GMT。这个时间代表着这个资源的失效时间，也就是说在 2037 年 12 月 31 日 23 点 59 分 59 秒之前都是有效的，即命中缓存。

这种方式有一个明显的缺点，由于失效时间是一个`绝对时间`，所以当客户端本地时间被修改以后，服务器与客户端时间偏差变大以后，就会导致缓存混乱。于是发展出了 Cache-Control。cache-control 的优先级更高。

</pre>
</details>

[6.[2021-3-20] Cache-Control 的具体含义是什么？](https://github.com/HJY-xh/plantTrees/issues/70)

<details>
<summary>展开查看</summary>
<pre>

Cache-Control 是一个`相对时间`，例如 Cache-Control:3600，代表着资源的有效期是 3600 秒。由于是相对时间，并且都是与客户端时间比较，所以服务器与客户端时间偏差也不会导致问题。

Cache-Control 与 Expires 可以在服务端配置同时启用或者启用任意一个，同时启用的时候 Cache-Control 优先级高。

Cache-Control 可以由多个字段组合而成，主要有以下几个取值：

-   **max-age** 指定一个时间长度，在这个时间段内缓存是有效的，单位是 s。例如设置 Cache-Control:max-age=31536000，也就是说缓存有效期为（31536000 / 24 / 60 \* 60）天，第一次访问这个资源的时候，服务器端也返回了 Expires 字段，并且过期时间是一年后。在没有禁用缓存并且没有超过有效时间的情况下，再次访问这个资源就命中了缓存，不会向服务器请求资源而是直接从浏览器缓存中取。

-   **s-maxage** 同 max-age，覆盖 max-age、Expires，但仅适用于共享缓存，在私有缓存中被忽略。

-   **public** 表明响应可以被任何对象（发送请求的客户端、代理服务器等等）缓存。

-   **private** 表明响应只能被单个用户（可能是操作系统用户、浏览器用户）缓存，是非共享的，不能被代理服务器缓存。

-   **no-cache** 强制所有缓存了该响应的用户，在使用已缓存的数据前，发送带验证器的请求到服务器。不是字面意思上的不缓存。

-   **no-store** 禁止缓存，每次请求都要向服务器重新获取数据。

-   **must-revalidate**指定如果页面是过期的，则去服务器进行获取。这个指令并不常用，就不做过多的讨论了。

</pre>
</details>

[7.[2021-3-20] 协商缓存是什么？](https://github.com/HJY-xh/plantTrees/issues/71)

<details>
<summary>展开查看</summary>
<pre>

若未命中强缓存，则浏览器会将请求发送至服务器。服务器根据 http 头信息中的 Last-Modify/If-Modify-Since 或 Etag/If-None-Match 来判断是否命中协商缓存。如果命中，则 http 返回码为 304，浏览器从缓存中加载资源。

</pre>
</details>

[8.[2021-3-21] Last-Modify/If-Modify-Since 的作用是什么？](https://github.com/HJY-xh/plantTrees/issues/72)

<details>
<summary>展开查看</summary>
<pre>

浏览器第一次请求一个资源的时候，服务器返回的 header 中会加上 Last-Modify，Last-modify 是一个时间标识该资源的最后修改时间，例如 Last-Modify: Thu,31 Dec 2037 23:59:59 GMT。

当浏览器再次请求该资源时，发送的请求头中会包含 If-Modify-Since，该值为缓存之前返回的 Last-Modify。服务器收到 If-Modify-Since 后，根据资源的最后修改时间判断是否命中缓存。

如果命中缓存，则返回 http304，并且不会返回资源内容，并且不会返回 Last-Modify。由于对比的服务端时间，所以客户端与服务端时间差距不会导致问题。但是有时候通过最后修改时间来判断资源是否修改还是不太准确（资源变化了最后修改时间也可以一致）。于是出现了 ETag/If-None-Match。

</pre>
</details>

[9.[2021-3-22] 如何理解 URI？](https://github.com/HJY-xh/plantTrees/issues/75)

<details>
<summary>展开查看</summary>
<pre>

URI, 全称为(Uniform Resource Identifier), 也就是统一资源标识符，它的作用很简单，就是区分互联网上不同的资源。

但是，它并不是我们常说的网址, 网址指的是 URL, 实际上 URI 包含了 URN 和 URL 两个部分，由于 URL 过于普及，就默认将 URI 视为 URL 了。

URI 真正最完整的结构是这样的。
![img](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_75/uri.png)

scheme 表示协议名，比如 http, https, file 等等。后面必须和://连在一起。

user:passwd@ 表示登录主机时的用户信息，不过很不安全，不推荐使用，也不常用。

host:port 表示主机名和端口。

path 表示请求路径，标记资源所在位置。

query 表示查询参数，为 key=val 这种形式，多个键值对之间用&隔开。

fragment 表示 URI 所定位的资源内的一个锚点，浏览器可以根据这个锚点跳转到对应的位置。

举个例子:

```html
https://www.baidu.com/s?wd=HTTP&rsv_spt=1
```

在这个 URI 中，https 即 scheme 部分，www.baidu.com为host:port部分（注意，http 和 https 的默认端口分别为 80、443），/s 为 path 部分，而 wd=HTTP&rsv_spt=1 就是 query 部分。

</pre>
</details>

[10.[2021-3-27] ETag/If-None-Match 的作用是什么？](https://github.com/HJY-xh/plantTrees/issues/89)

<details>
<summary>展开查看</summary>
<pre>

与 Last-Modify/If-Modify-Since 不同的是，Etag/If-None-Match 返回的是一个校验码（ETag: entity tag）。ETag 可以保证每一个资源是唯一的，资源变化都会导致 ETag 变化。ETag 值的变更则说明资源状态已经被修改。服务器根据浏览器上发送的 If-None-Match 值来判断是否命中缓存。

</pre>
</details>

[11.[2021-3-27] Last-Modified 和 Etag 有什么区别？](https://github.com/HJY-xh/plantTrees/issues/90)

<details>
<summary>展开查看</summary>
<pre>

我们可能会觉得使用 Last-Modified 已经足以让浏览器知道本地的缓存副本是否足够新，为什么还需要 Etag（实体标识）呢？

HTTP1.1 中 Etag 的出现主要是为了解决几个 Last-Modified 比较难解决的问题：

-   Last-Modified 标注的最后修改只能精确到秒级，如果某些文件在 1 秒钟以内，被修改多次的话，它将不能准确标注文件的修改时间
-   如果某些文件会被定期生成，当有时内容并没有任何变化，但 Last-Modified 却改变了，导致文件没法使用缓存
-   有可能存在服务器没有准确获取文件修改时间，或者与代理服务器时间不一致等情形

Etag 是服务器自动生成或者由开发者生成的对应资源在服务器端的唯一标识符，能够更加准确的控制缓存。Last-Modified 与 ETag 是可以一起使用的，服务器会优先验证 ETag，一致的情况下，才会继续比对 Last-Modified，最后才决定是否返回 304。

</pre>
</details>

[12.[2021-3-31] 如何手写一个简易的 ajax 请求？](https://github.com/HJY-xh/plantTrees/issues/104)

<details>
<summary>展开查看</summary>
<pre>

代码如下：

    ```
    function ajax(url){
        const p = new Promise((resolve, reject) => {
            //创建ajax对象并实例化
            const xhr = new XMLHttpRequest()
            xhr.open('GET', url, true)
            //readystate是xhr对象中的属性，用来获取ajax状态码 0 1 2 3 4
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if(xhr.status === 200){
                        resolve(
                            JSON.parse(xhr.responseText)
                        )
                    }else if(xhr.status === 404){
                        reject(new Error('404'))
                    }
                }
            }
            xhr.send(null)
        })
        return p
    }
    const url = '/data/data.json';
    ajax(url).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
    ```

</pre>
</details>

[13.[2021-3-31] 如何理解 localStorage 和 sessionStorage？](https://github.com/HJY-xh/plantTrees/issues/105)

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

[14.[2021-3-31] 状态码的分类以及常见的几个状态码是什么？](https://github.com/HJY-xh/plantTrees/issues/106)

<details>
<summary>展开查看</summary>
<pre>

### **状态码分类**

-   1xx 服务器收到请求
-   2xx 请求成功，如 200
-   3xx 重定向，如 302
-   4xx 客户端错误，如 404
-   5xx 服务端错误，如 500

### **常见状态码**

-   200 成功
-   301 永久重定向（配合 location，浏览器自动处理）
-   302 临时重定向（配合 location，浏览器自动处理）
-   304 资源未被修改
-   403 没有权限
-   404 资源未找到
-   500 服务器错误
-   504 网关超时
</pre>
</details>
