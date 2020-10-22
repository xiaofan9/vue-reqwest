if (!String.prototype.startsWith) {
  Object.defineProperty(String.prototype, "startsWith", {
    value: function (search, pos) {
      pos = !pos || pos < 0 ? 0 : +pos;
      return this.substring(pos, pos + search.length) === search;
    },
  });
}

export const version = "1.2.0";

let vueVersion = window?.Vue?.version || "";

function vueReqwest(app, reqwest) {
  let tmpReqwest = reqwest;

  if (!tmpReqwest) {
    if (typeof window !== "undefined" && window.reqwest) {
      tmpReqwest = window.reqwest;
    } else if (require) {
      tmpReqwest = require("reqwest");
    }
  }

  if (!tmpReqwest) {
    return console.error("你没有安装或者卸载了 reqwest，本插件依赖于 reqwest！");
  }

  const vueVersion = app?.version || "";

  if (vueVersion?.startsWith("3.") && typeof app === "object") {
    app.config.globalProperties.$ajax = tmpReqwest;
  }

  if (vueVersion?.startsWith("2.") && typeof app === "function") {
    app.prototype.$ajax = tmpReqwest;
  }

  app.reqwest = tmpReqwest;
}

// window环境且vue版本为2.x，自动注册；
if (typeof window !== "undefined" && window.reqwest && window.Vue) {
  if (vueVersion?.startsWith("2.")) {
    vueReqwest(window.Vue, window.reqwest);
  }
}

export default {
  install: vueReqwest,
  version,
};

export const install = vueReqwest;
