<template>
  <nav class="my-nav">
    <div class="logo">
      <img src="@/assets/nav-logo.png" />
    </div>
    <div class="links">
      <ul>
        <li v-for="link in myRoutes" :key="link.name">
          <router-link
            v-if="link.name == 'my_profile'"
            :to="{
              name: link.name,
              params: { userId: 150, userName: 'Hawraa Arkan' },
            }"
            >{{ link.meta.title }}</router-link
          >
          <router-link v-else :to="{ name: link.name }">{{
            link.meta.title
          }}</router-link>
        </li>
      </ul>
    </div>
    <div class="btns">
      <button style="margin-right: 10px">LOG IN</button>
      <button>SIGN UP</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MyNav",
  data() {
    return {
      logo: "My Logo",
      myRoutes: [],
    };
  },
  mounted() {
    this.myRoutes = this.$router.options.routes;
  },
};
</script>

<style scoped>
.my-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #d4d4d4;
  box-shadow: 0px 0px 9px -3px black;
}
ul {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  list-style: none;
}
img {
  width: 50px;
}
button {
  background-color: rgb(0, 128, 98);
  color: #fff;
  padding: 5px 10px;
}
</style>
