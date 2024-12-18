<template>
  <div class="my-main">
    <h2>this is my main page</h2>
    <p v-maxSize="20">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
      perferendis, tenetur. Consequatur cum dolor ducimus enim expedita illum
      incidunt ipsam libero molestiae mollitia nobis nulla, quisquam repudiandae
      similique, tempore voluptatum.
    </p>
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
