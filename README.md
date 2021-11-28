# vue-qq-music

## Element

npm安装：`npm i element-ui -S`

快速上手：

```
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

借助 `babel-plugin-component`，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：
```
npm install babel-plugin-component -D
```
然后，将 `.babelrc` 修改为：
```
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

## vue-svgicon基本使用

安装项目依赖：`npm install vue-svgicon -D`

配置svg图标解析和输出路径

因为vue-svgicon本质会把svg图标解析成js文件，在项目中是通过import导入生成的js文件来达到对svg图标的引用，具体可以在package.json中做以下配置：

```
scripts: {
  'svg': 'vsvg -s ./src/assets/svg -t ./src/icons'
}
```

引入全局svgIcon组件，执行`npm run svg`命令

```
<svg-icon name="logo" class="menu-icon" color="#fff" width="16" height="16"></svg-icon>

import '@/icons/logo'
```

## 文档

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
