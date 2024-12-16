<template>
  <div class="my-main">
    <h2>this is my main page</h2>
    <my-content
      :students="students"
      @updateActive="changeActive($event)"
      :isActive="isActive"
    />
    <hr />
    <MyContent
      :students="students"
      @updateActive="changeActive($event)"
      :isActive="isActive"
    />
    <LifeCycle />
  </div>
</template>

<script>
import MyContent from "@/components/MyContent.vue";
import LifeCycle from "@/components/LifeCycle.vue";
export default {
  name: "MyMain",
  components: {
    MyContent,
    LifeCycle,
  },
  data() {
    return {
      students: ["Hawraa", "Saja", "Ghofran", "Ali", "Kadhim"],
      isActive: true,
    };
  },
  methods: {
    changeActive(data) {
      this.isActive = data;
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
