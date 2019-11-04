# sample



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

### service层

- 处理model层里跨model的操作
- 复杂的运算和处理逻辑
- 对远程的操作(接口调用,数据库)

### loader挂载到app和ctx上的区别?

- ctx: 当次请求的上下文; app: 整个应用

### 购物车demo 需求

- 用户->支持登录验证
- 商品-支持商品查看购买
- 购物车->支持用户把商品添加进购物车
