<template>
  <div class="my-main">
    <h2>this is my main page</h2>
    <div class="products">
      <ul>
        <li v-for="product in products" :key="product.id">
          <p>Title: {{ product.title }}</p>
          <p>Brand: {{ product.brand }}</p>
          <p>Category: {{ product.category }}</p>
          <p>Description: {{ product.description }}</p>
          <p>Price: {{ product.price }}</p>
          <p>Rating: {{ product.rating }}</p>
          <p>Stock: {{ product.stock }}</p>
          <img :src="product.thumbnail" width="100" alt="" />
          <hr />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyMain",
  components: {},
  data() {
    return {
      name: "Hawraa",
      isCompTwo: false,
      products: [],
    };
  },
  methods: {
    async getProducts() {
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => (this.products = data.products));
    },
  },
  async mounted() {
    await this.getProducts();
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
