import Vue from "vue";

import App from "./App.vue";

// 引入混入(全局混入)
// import { mixin } from "./mixin";
Vue.config.productionTip = false;
// Vue.mixin(mixin);

new Vue({
    el: '#app',
    render: h => h(App),
})