import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import Routes from "./routes";

/*import 'material-design-icons-iconfont/dist/material-design-icons.css';*/

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routesConst = new VueRouter({
    routes: Routes,
    mode: 'history'
});

new Vue({
    render: h => h(App),
    router: routesConst,
}).$mount('#app');
