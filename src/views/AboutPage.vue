<template>
  <div class="about">
    <h2>This is about page</h2>
    <ul>
      <li v-for="st in students" :key="st.id">
        <p>Name: {{ st.name }}</p>
        <p>Age: {{ st.age }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped></style>
