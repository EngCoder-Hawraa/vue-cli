import { createRouter, createWebHashHistory } from "vue-router";
import MyMain from "@/views/MyMain.vue";
import AboutPage from "@/views/AboutPage.vue";
const routes = [
  {
    name: "my_main",
    path: "/",
    component: MyMain,
  },
  {
    name: "about_page",
    path: "/about",
    component: AboutPage,
    meta: {
      title: "My About Component",
      description: "This is a desc for my page",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
