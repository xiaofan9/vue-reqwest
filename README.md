# vue-reqwest

## 介绍
由 [requwest](https://github.com/ded/reqwest) 搬运而成的vue插件。

## 更新
最新版本，同时支撑vue2/3，也能在vue + ts中使用

## 安装 && 引入

> * npm

``` bash
npm install --save vue-reqwest
```

```javascript
import vueReqwest from 'vue-reqwest';
// 不引入这个将自动注入 reqwest
import reqwest from 'reqwest';
```

使用 Vue 2:

```javascript
// 第二个参数可选
Vue.use(vueReqwest[, reqwest]);
```

使用 Vue 3:

```javascript
import { createApp } from 'vue';

const app = createApp(...);
// 第二个参数可选
app.use(vueReqwest[, reqwest]);
```

> * 直接引入

```html
<script src="https://unpkg.com/reqwest"></script>
<script src="https://unpkg.com/vue-reqwest"></script>
```

## 使用

Vue.reqwest 或者 this.$ajax 均可调用

#### 注意：
- vue3 使用app.reqwest

> * 回调函数形式

```javascript
Vue.reqwest({
  url: 'xxx', 
  method: 'get',
  data: { ... },
  success: function (resp) {
    ...
  }
})
```

> * Promise形式

```javascript
this.$ajax({
  url: 'xxx',
  method: 'get',
  data: { ... }
}).then( data => {...} )
```


## API

参看 - [reqwest api](https://github.com/ded/reqwest)
