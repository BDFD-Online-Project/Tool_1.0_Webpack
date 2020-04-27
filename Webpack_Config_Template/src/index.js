import Vue from "vue";
import App from "./App.vue";
import "./styles/reset.css";

Vue.config.productionTip = false;

new Vue({
  el: "#root",
  render: (h) => h(App),
});
