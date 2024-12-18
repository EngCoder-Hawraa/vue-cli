import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const vueApp = createApp(App);
vueApp.use(router).mount("#app");
vueApp.directive("maxSize", (el, order) => {
  console.log(el);
  console.log(order);
});
