import { createRouter, createWebHistory } from "vue-router";
import MyMain from "@/views/MyMain.vue";
import AboutPage from "@/views/AboutPage.vue";
import ProfilePage from "@/views/ProfilePage.vue";

const routes = [
  {
    name: "my_main",
    path: "/",
    component: MyMain,
    meta: {
      title: "Home",
    },
  },
  {
    name: "about_page",
    path: "/about",
    component: AboutPage,
    meta: {
      title: "About",
    },
  },
  {
    name: "my_profile",
    path: "/profile/:userId/ :userName",
    component: ProfilePage,
    meta: {
      title: "Profile",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("To is: ", to);
  console.log("From is: ", from);
  next();
});
export default router;
