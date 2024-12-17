<template>
  <div class="my-main">
    <h2>this is my main page</h2>
    <MyForm></MyForm>
  </div>
</template>

<script>
import MyForm from "@/components/MyForm.vue";
export default {
  name: "MyMain",
  components: {
    MyForm,
  },
  data() {
    return {
      name: "Hawraa",
      isCompTwo: false,
      products: [],
    };
  },
  methods: {
    async getProducts() {
      await fetch("https://dummyjson.com/products").then;
    },
  },
};
</script>

<style scoped lang="scss">
.my-main {
  h2 {
    color: red;
  }
  p {
    color: green;
  }
}
</style>
