<template>
  <div class="my-main">
    <button @click="routerFunc">Click Me</button>
    <h3>My Name Is {{ fullName }}</h3>
    <h3>Total Nums Is {{ calcNums }}</h3>
    <div class="container" v-containerWidth="80">
      <h2>this is my main page</h2>
      <p v-maxSize="20" v-change-color="'red'">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
        perferendis, tenetur. Consequatur cum dolor ducimus enim expedita illum
        incidunt ipsam libero molestiae mollitia nobis nulla, quisquam
        repudiandae similique, tempore voluptatum.
      </p>
      <MyForm></MyForm>
      <ul>
        <input type="search" v-model="search" />
        <li v-for="st in searchSt" :key="st.id">
          <p>Name: {{ st.name }}</p>
          <p>Age: {{ st.age }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MyForm from "@/components/MyForm.vue";
import stMixin from "@/mixins/stMixin";
export default {
  name: "MyMain",
  // mounted() {
  //   console.log(this.$router.options.routes);
  // },
  mixins: [stMixin],
  data() {
    return {
      firstName: "Hawraa",
      lastName: "Arkan",
      myArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      search: "",
    };
  },
  methods: {
    routerFunc() {
      this.$router.replace({ name: "About" });
    },
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    calcNums() {
      return this.myArr.reduce((acc, cur) => acc + cur);
    },
    getOldSt() {
      return this.students.filter((st) => st.age >= 14);
    },
    searchSt() {
      return this.students.filter((st) => st.name.match(this.search));
    },
  },
  directives: {
    containerWidth(el, order) {
      el.style.maxWidth = order.value + "%";
      el.style.marginRight = "auto";
      el.style.marginLeft = "auto";
    },
  },
  components: {
    MyForm,
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
