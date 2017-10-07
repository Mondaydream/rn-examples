## RN 项目开发实践

- 基于 `create-react-native-app` 搭建
- 基于 `antd-mobile` UI框架，`react-navigation` 路由管理
- 基于 `redux`，`redux-persist`, `remote-redux-devtools` 数据管理
- 基于 `redux-thunk` 设计中间件的[第一个版本](https://github.com/deot/rn-examples/tree/3f56c741b5d2c224bade81127457a7f9e965ca96), 基于`redux-saga`设计中间件的[第一个版本](https://github.com/deot/rn-examples/tree/f26269365869085f4892b3814c83ca3130e7f887),  之后版本基于 `redux-saga` 开发

```js
// 环境
- npm install -g create-react-native-app
// 切换到项目，下面两种都行
- npm install yarn -g && yarn install && yarn start // 推荐使用yarn
- npm install && npm start // 不推荐使用`cnpm`, 会导致异常
// 数据模拟
- cd src/mock && npm start
```

## demo

![Alt text](https://raw.githubusercontent.com/deot/rn-examples/master/demo.gif)
