## RN 项目开发实践

- 基于 `create-react-native-app` 搭建
- 基于 `antd-mobile` UI框架，`react-navigation` 路由管理
- 基于 `redux`，`redux-persist`, `remote-redux-devtools` 数据管理
- 基于 `redux-thunk` 设计中间件（[第一个版本](https://github.com/deot/rn-examples/tree/9c69333391076a78d81775213cba20a6c4ec1169)），之后改用 `redux-saga` 开发

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
