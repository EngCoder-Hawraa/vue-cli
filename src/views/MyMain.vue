<template>
  <div class="my-main">
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
        <li v-for="st in students" :key="st.id">
          <p>Name: {{ st.name }}</p>
          <p>Age: {{ st.age }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MyForm from "@/components/MyForm.vue";
export default {
  name: "MyMain",
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
  data() {
    return {
      name: "Hawraa",
      isCompTwo: false,
      students: [],
    };
  },
  methods: {
    async getStudents() {
      await fetch("https://course-backend.onrender.com/")
        .then((res) => res.json())
        .then((data) => (this.students = data));
    },
  },
  async mounted() {
    await this.getStudents();
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
