<p align="center">
<img src="https://s2.loli.net/2022/03/25/nj78ISe1U4EhwHQ.png" height="150">
</p>

<h1 align="center">incall vscode extension <sup>VS Code</sup></h1>

一个前端 vscode 插件，帮助快速建立组件文件目录和基础代码.

<img src="https://s2.loli.net/2022/03/25/9iTdZ54rw6buyLA.gif" height="400">

#### 使用

点击左下角 `incall-generate` 按钮， 输入 packageName，然后回车即可.

> 注意: packageName 建议为小驼峰命名方式


#### 特性

- 自动生成 `views`, `router`, `store`, `servieces` 等文件目录
- 自动生成 `index.js`:
  
```js
import router from "./router";
import store from "./store";
import services from "./services";

const use${packageUperName} = () => ({
  router,
  store,
  services
});

export default use${packageUperName};
```

- 自动生成 `package.json`

```json
{
    "name": "@changan-incall/${moudleName}${packageBottomName}",
    "version": "0.0.1",
    "description": "${moudleName}${packageBottomName}",
    "main": "index.js",
    "scripts": {
        "publish": "npm publish"
    },
    "author": "${user?.name} <${user?.email}>",
    "license": "ISC",
    "publishConfig": {
        "registry": "http://tspdemo.changan.com.cn/nexus/repository/npmhosted/"
    }
}
```

Engjoy it!!!
