# vue-reqwest (ajax轻量级实现
 由 requwest 搬运而成的vue插件 --- vue-reqwest


## 安装 && 引入

> * npm

``` bash
npm install --save vue-reqwest
```

```javascript
import vueReqwest from 'vue-reqwest';
Vue.use(vueReqwest);
```

> * 直接引入

```html
<script src="./vue.js"></script>
<script src="./vue-reqwest.js"></script>
```


## 使用

Vue.reqwest 或者 this.$ajax 均可调用

> * 回调函数形式

```javascript
Vue.reqwest({
    url: 'xxx'
  , method: 'get'
  , data: { ... }
  , success: function (resp) {
      ...
    }
})
```

> * Promise形式

```javascript
this.$ajax({
    url: 'xxx'
  , method: 'get'
  , data: { ... }
}).then( data => {...} )
```


## API

参看 - [reqwest api](https://github.com/ded/reqwest)
