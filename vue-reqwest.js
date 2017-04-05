(function() {
    /**
     * Install plugin
     * @param Vue
     * @param reqwest
     */
    var reqwest = typeof require === 'function' ?
        require('reqwest') :
        window.reqwest

    function vueReqwest() {
        if (vueReqwest.installed) {
            return;
        }

        if (!reqwest) {
            console.error('You have to install reqwest');
            return
        }

        Vue.reqwest = reqwest;

        Vue.prototype.$ajax = reqwest;

        vueReqwest.installed = true;
    }

    if (typeof exports == "object") {
        module.exports = vueReqwest
    } else if (typeof define == "function" && define.amd) {
        define([], function() { return vueReqwest })
    } else if (window.Vue) {
        window.vueReqwest = vueReqwest
        Vue.use(vueReqwest)
    }
})()