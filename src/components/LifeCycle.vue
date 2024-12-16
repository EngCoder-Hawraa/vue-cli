<template>
  <div class="life" style="margin-top: 50px">
    <h2>Life Cycle Hooks</h2>
    <p>age is {{ age }}</p>
    <button @click="($event) => age++">Inc Age</button>
  </div>
</template>

<script>
export default {
  name: "LifeCycle",
  data() {
    return {
      name: "Hawraa",
      age: 30,
    };
  },
  beforeCreate() {
    alert("Before Created");
  },
  created() {
    alert("Created");
  },
  beforeMount() {
    alert("Before Mount");
  },
  mounted() {
    alert("Mounted");
  },
  beforeUpdate() {
    alert("Before Updated");
  },
  updated() {
    alert("Updated");
  },
  beforeUnmount() {
    alert("Before Unmount");
  },
  unmounted() {
    alert("Unmounted");
  },
};
</script>

<style scoped></style>
