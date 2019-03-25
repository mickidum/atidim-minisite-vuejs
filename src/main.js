import Vue from "vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue from "bootstrap-vue";
import Axios from "axios";

import "./assets/main.scss";
import "./assets/media.scss";

import App from "./App.vue";
import router from "./router";
import store from "./store";

// import "./assets/access/access";

Vue.prototype.$http = Axios;

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
