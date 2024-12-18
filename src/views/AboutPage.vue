<template>
  <div class="about">
    <h2>This is about page</h2>
    <li v-for="st in students" :key="st.id">
      <p>Name: {{ st.name }}</p>
      <p>Age: {{ st.age }}</p>
    </li>
  </div>
</template>

<script>
import stMixin from "@/mixins/stMixin";

export default {
  name: "AboutPage",
  components: {},
  mixins: [stMixin],
  data() {
    return {
      firstName: 'Hawraa',
      lastName: 'Arkan',
    }
  }
};
</script>

<style scoped></style>
