<template>
  <nav class="my-nav">
    <div class="icon">Icon</div>
    <div class="logo">{{ logo }}</div>
    <div class="links">
      <ul>
        <li v-for="link in links" :key="link">{{ link }}</li>
      </ul>
    </div>
    <div class="btns"></div>
  </nav>
</template>

<script>
export default {
  name: "MyNav",
  data() {
    return {
      logo: "My Logo",
      links: ["Link One", "Link Two"],
    };
  },
};
</script>

<style scoped>
.my-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ul {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
</style>
