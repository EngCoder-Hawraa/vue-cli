<template>
  <div class="my-main">
    <h2>this is my main page</h2>
    <keep-alive>
      <my-component :name="name" v-if="!isCompTwo">
        <template #slotHeader>
          <h3>This is slot Header One</h3>
        </template>
        <template #slotInputs>
          <div>
            <input type="text" placeholder="Enter Your name" />
            <input type="password" placeholder="Enter Your Password" />
          </div>
        </template>
        <template #slotActions>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </template>
      </my-component>
    </keep-alive>
    <keep-alive>
      <my-component2 name="Hawraa" v-if="isCompTwo">
        <template #slotHeader>
          <h3>This is slot Header Two</h3>
        </template>
        <template #slotInputs>
          <div>
            <input type="text" placeholder="Enter Your name" />
            <input type="password" placeholder="Enter Your Password" />
          </div>
        </template>
        <template #slotActions>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </template>
      </my-component2>
    </keep-alive>
    <button @click="isCompTwo = !isCompTwo">Toggle Data</button>
  </div>
</template>

<script>
import MyComponent from "@/components/MyComponent.vue";
import MyComponent2 from "@/components/MyComponent.vue";

export default {
  name: "MyMain",
  components: {
    MyComponent,
    MyComponent2,
  },
  data() {
    return {
      name: "Hawraa",
      isCompTwo: false,
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
