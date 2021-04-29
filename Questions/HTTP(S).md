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

[13.[2021-3-31] 状态码的分类以及常见的几个状态码是什么？](https://github.com/HJY-xh/plantTrees/issues/106)

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

[14.[2021-4-1] 如何理解 http headers？](https://github.com/HJY-xh/plantTrees/issues/107)

<details>
<summary>展开查看</summary>
<pre>

**http headers** 分为常见的 `Request Headers` 和常见的 `Response Headers`

### Request Headers

-   `Accept` 浏览器可接收的数据格式
-   `Accept-Encoding` 浏览器可接收的压缩算法，如 gzip
-   `Accept-Language` 浏览器可接收的语言，如 zh-CN
-   `Connection: keep-alive` 一次 TCP 连接重复使用
-   `cookie`
-   `Host` 域名
-   `User-Agent` （简称 UA）浏览器信息
-   `Content-type` 发送数据的格式，如 application/json

### Response Headers

-   `Content-type` 返回数据的格式，如 application/json
-   `Content-length` 返回数据的大小，多少字节
-   `Content-Encoding` 返回数据的压缩算法，如 gzip
-   `Set-Cookie` server 端修改 cookie

### 缓存相关的 headers

-   ` Cache-Control``Expires `
-   ` Last-Modified``If-Modified-Since `
-   ` Etag``If-None-Match `

### Cache-Control

-   在 `Response Headers` 中
-   控制强制缓存的逻辑
-   例如 Cache-Control: max-age = 31536000 （单位是秒）

### Cache-Control 的值

-   `max-age`
-   `no-cache` 不用强制缓存，让 server 端处理
-   `no-store` 不用本地缓存，server 端也不处理

### http 缓存-协商缓存

-   服务器缓存策略
-   服务器判断客户端资源，是否和服务端资源一样
-   一致则返回 304，否则返回 200 和最新的资源

### 资源标识

-   在 Response Headers 中，有两种
-   `Last-Modified` 资源的最后修改时间
-   `Etag` 资源的唯一标识（一个字符串，可理解为指纹）

### Last-Modified 和 Etag

-   会优先使用 Etag
-   Last-Modified 只能精确到秒级
-   如果资源被重复生成，而内容不变，则 Etag 更准确

### HTTP 缓存总结

![imag](https://github.com/HJY-xh/plantTrees/blob/master/Image/%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%9B%BE%E7%89%87/issues_107/http-cache.png)

</pre>
</details>

[15.[2021-4-6] HTTP/1.1 中的队头阻塞有哪些解决方法？](https://github.com/HJY-xh/plantTrees/issues/123)

<details>
<summary>展开查看</summary>
<pre>

虽然近几年来网络带宽增长非常快，然而我们却并没有看到网络延迟有对应程度的降低。网络延迟问题主要由于队头阻塞(Head-Of-Line Blocking),导致带宽无法被充分利用。

队头阻塞是指当顺序发送的请求序列中的一个请求因为某种原因被阻塞时，在后面排队的所有请求也一并被阻塞，会导致客户端迟迟收不到数据。

针对队头阻塞,人们尝试过以下办法来解决:

-   将同一页面的资源分散到不同域名下，提升连接上限。 Chrome 有个机制，对于同一个域名，默认允许同时建立 6 个 TCP 持久连接，使用持久连接时，虽然能公用一个 TCP 管道，但是在一个管道中同一时刻只能处理一个请求，在当前的请求没有结束之前，其他的请求只能处于阻塞状态。另外如果在同一个域名下同时有 10 个请求发生，那么其中 4 个请求会进入排队等待状态，直至进行中的请求完成。
-   Spriting 合并多张小图为一张大图,再用 JavaScript 或者 CSS 将小图重新“切割”出来的技术。
-   内联(Inlining)是另外一种防止发送很多小图请求的技巧，将图片的原始数据嵌入在 CSS 文件里面的 URL 里，减少网络请求次数。
    ```javascript
    .icon1 {
        background: url(data:image/png;base64,<data>) no-repeat;
      }
    .icon2 {
        background: url(data:image/png;base64,<data>) no-repeat;
      }
    ```
-   拼接(Concatenation)将多个体积较小的 JavaScript 使用 webpack 等工具打包成 1 个体积更大的 JavaScript 文件,但如果其中 1 个文件的改动就会导致大量数据被重新下载多个文件。

</pre>
</details>

[16.[2021-4-7] HTTP 的无状态怎么理解？](https://github.com/HJY-xh/plantTrees/issues/125)

<details>
<summary>展开查看</summary>
<pre>

无状态是指协议对于事务处理没有记忆能力，服务器不知道客户端是什么状态。即我们给服务器发送 HTTP 请求之后，服务器根据请求，会给我们发送数据过来，但是，发送完，不会记录任何信息。

HTTP 是一个无状态协议，这意味着每个请求都是独立的，Keep-Alive 没能改变这个结果。

缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。

HTTP 协议这种特性有优点也有缺点，优点在于解放了服务器，每一次请求“点到为止”不会造成不必要连接占用，缺点在于每次请求会传输大量重复的内容信息。

由于报文 Header 一般会携带"User Agent"，"Cookie"，"Accept"，"Server"等许多固定的头字段，多达几百字节甚至上千字节，但 Body 却经常只有几十字节（比如 GET 请求、 204/301/304 响应）。Header 里携带的内容过大，在一定程度上增加了传输的成本。更要命的是，成千上万的请求响应报文里有很多字段值都是重复的。

客户端与服务器进行动态交互的 Web 应用程序出现之后，HTTP 无状态的特性严重阻碍了这些应用程序的实现，毕竟交互是需要承前启后的，简单的购物车程序也要知道用户到底在之前选择了什么商品。于是，两种用于保持 HTTP 连接状态的技术就应运而生了，一个是 Cookie，而另一个则是 Session。

</pre>
</details>

[17.[2021-4-7] HTTP/1.1 中明文传输带来的不安全性怎么理解？](https://github.com/HJY-xh/plantTrees/issues/126)

<details>
<summary>展开查看</summary>
<pre>

HTTP/1.1 在传输数据时，所有传输的内容都是明文，客户端和服务器端都无法验证对方的身份，这在一定程度上无法保证数据的安全性。

"免费 WiFi 陷阱”：黑客就是利用了 HTTP 明文传输的缺点，在公共场所架设一个 WiFi 热点开始“钓鱼”，诱骗网民上网。一旦你连上了这个 WiFi 热点，所有的流量都会被截获保存，里面如果有银行卡号、网站密码等敏感信息的话那就危险了，黑客拿到了这些数据就可以冒充你为所欲为。

</pre>
</details>

[18.[2021-4-11] GET 和 POST 有什么区别？](https://github.com/HJY-xh/plantTrees/issues/134)

<details>
<summary>展开查看</summary>
<pre>

首先最直观的是语义上的区别。

而后又有这样一些具体的差别:

-   从缓存的角度，GET 请求会被浏览器主动缓存下来，留下历史记录，而 POST 默认不会。
-   从编码的角度，GET 只能进行 URL 编码，只能接收 ASCII 字符，而 POST 没有限制。
-   从参数的角度，GET 一般放在 URL 中，因此不安全，POST 放在请求体中，更适合传输敏感信息。
-   从幂等性的角度，GET 是幂等的，而 POST 不是。(幂等表示执行相同的操作，结果也是相同的)
-   从 TCP 的角度，GET 请求会把请求报文一次性发出去，而 POST 会分为两个 TCP 数据包，首先发 header 部分，如果服务器响应 100(continue)， 然后发 body 部分。(火狐浏览器除外，它的 POST 请求只发一个 TCP 包)

</pre>
</details>

[19.[2021-4-18] HTTP/2 的多路复用有什么作用？](https://github.com/HJY-xh/plantTrees/issues/158)

<details>
<summary>展开查看</summary>
<pre>

在 HTTP/1 中，每次请求都会建立一次 HTTP 连接，也就是我们常说的 3 次握手和 4 次挥手，这个过程在一次请求过程中占用了相当长的时间，即使开启了 Keep-Alive，解决了多次连接的问题，但是依然有两个效率上的问题，一是串行的文件传输，二是连接数过多导致的性能问题。

HTTP/2 的多路复用就是为了解决上述的两个性能问题。

在 HTTP/2 中，有两个非常重要的概念，分别是帧（frame）和流（stream）。帧代表着最小的数据单位，每个帧会标识出该帧属于哪个流，流也就是多个帧组成的数据流。

多路复用，就是在一个 TCP 连接中可以存在多条流。换句话说，也就是可以发送多个请求，对端可以通过帧中的标识知道属于哪个请求。通过这个技术，可以避免 HTTP 旧版本中的队头阻塞问题，极大的提高传输性能。

</pre>
</details>

[20.[2021-4-22] HTTP/2 的头部压缩有什么改进？](https://github.com/HJY-xh/plantTrees/issues/173)

<details>
<summary>展开查看</summary>
<pre>

在 HTTP/1.1 及之前的时代，请求体一般会有响应的压缩编码过程，通过 Content-Encoding 头部字段来指定，但没有头部字段本身的压缩。当请求字段非常复杂的时候，尤其对于 GET 请求，请求报文几乎全是请求头，这个时候还是存在非常大的优化空间的。

HTTP/2 针对头部字段，也采用了对应的压缩算法——HPACK，对请求头进行压缩。

HPACK 算法是专门为 HTTP/2 服务的，它主要的亮点有两个：

首先是在服务器和客户端之间建立哈希表，将用到的字段存放在这张表中，那么在传输的时候对于之前出现过的值，只需要把索引(比如 0，1，2，...)传给对方即可，对方拿到索引查表就行了。这种传索引的方式，可以说让请求头字段得到极大程度的精简和复用。

其次是对于整数和字符串进行哈夫曼编码，哈夫曼编码的原理就是先将所有出现的字符建立一张索引表，然后让出现次数多的字符对应的索引尽可能短，传输的时候也是传输这样的索引序列，可以达到非常高的压缩率。

</pre>
</details>

[21.[2021-4-29] 怎么理解 http 和 https？](https://github.com/HJY-xh/plantTrees/issues/195)

<details>
<summary>展开查看</summary>
<pre>

### 一、基本概念

-   HTTP
    超文本传输协议，是互联网上应用最为广泛的一种网络协议，是一个客户端和服务端请求和应答的标准（TCP），用于从 WWW 服务器传输超文本到本地浏览器的传输协议，它可以使浏览器更加高效，使网络传输减少

-   HTTPS
    是以安全为目标的 HTTP 通道，简单来讲是 HTTP 的安全版，即 HTTP 下加入 SSL 层，HTTPS 的安全基础是 SSL，因此加密的详细内容就需要 SSL。需知道，HTTPS 的 SSL 加密是在传输层实现的

### 二、两者区别

HTTP 传输的数据都是未加密的，也就是明文的，网景公司设置了 SSL 协议来对 HTTP 协议传输的数据进行加密处理，简单来说就是 HTTPS 协议是由 HTTP 和 SSL 协议或 HTTP 和 TLS 协议构建的可进行加密传输和身份认证的网络协议，比 HTTP 协议的安全性更高。主要区别如下：

-   HTTPS 协议需要 ca 证书
-   HTTP 的超文本传输协议，信息是明文传输，HTTPS 则是具有安全性的 SSL 加密传输协议
-   二者使用不同的链接方式，端口也不同。一般来说，HTTP 协议的端口号为 80，HTTPS 的端口号为 443

</pre>
</details>
[22.[2021-4-29] WebSocket是什么？](https://github.com/HJY-xh/plantTrees/issues/196)

<details>
<summary>展开查看</summary>
<pre>

-   WebSocket 是 HTML5 中的协议，支持持久连接
-   http 的生命周期通过 request 来界定，也就是 request 一个 response，那么在默认情况下的 http1.0 协议中，这次 http 请求就结束了。在 http1.1 中进行了改进，出现了`keep-alive`，http/1.1 和之前版本的显著区别是 http/1.1 默认使用持久连接。在一个 http 连接中，可以发送多个 request，接受多个 response。但是必须记住，在 http 中一个 request 只能对应有一个 response，而且这个 response 是被动的，不能主动发起。WebSocket 是基于 http 协议的，或者说借用了 http 协议来完成一部分握手，在握手阶段与 http 是相同的。以下为一个 websocket 握手协议的实现：

```
GET/char HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
//告诉服务端发送的是websocket--------start
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
//告诉服务端发送的是websocket--------end
Origin: http://example.com
```

</pre>
</details>
