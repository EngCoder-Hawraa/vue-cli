<template>
  <div class="my-main">
    <h2>this is my main page</h2>
    <my-component :name="name">
      <template #slotTitle>
        <h3>This is slot title</h3>
      </template>
      <template #slotText>
        <p>This is slot paragraph</p>
      </template>
    </my-component>
  </div>
</template>

<script>
import MyComponent from "@/components/MyComponent.vue";
export default {
  name: "MyMain",
  components: {
    MyComponent,
  },
  data() {
    return {
      name: "Hawraa",
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
