<template>
  <div class="my-main">
    <h2>this is my main page</h2>
    <my-content :students="students" :isActive="isActive" />
    <hr />
    <MyContent :students="students" :isActive="isActive" />
  </div>
</template>

<script>
import MyContent from "@/components/MyContent.vue";
export default {
  name: "MyMain",
  components: { MyContent },
  data() {
    return {
      students: ["Hawraa", "Saja", "Ghofran", "Ali", "Kadhim"],
      isActive: true,
    };
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
