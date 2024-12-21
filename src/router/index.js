import { createRouter, createWebHistory } from "vue-router";
import MyMain from "@/views/MyMain.vue";
import AboutPage from "@/views/AboutPage.vue";
import ProfilePage from "@/views/ProfilePage.vue";

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
  {
    name: "my_profile",
    path: "/profile",
    component: ProfilePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
