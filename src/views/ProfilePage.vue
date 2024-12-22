<template>
  <div class="profile">
    <h2>This is profile page</h2>
    <h1>{{ $route.params.userId }}</h1>
    <h1>{{ $route.params.userName }}</h1>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style scoped></style>
