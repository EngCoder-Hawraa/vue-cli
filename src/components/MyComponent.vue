<template>
  <div class="parent">
    <slot name="slotTitle"></slot>
    <h2>This is Slot Component, My name is {{ name }}</h2>
    <slot name="slotText"></slot>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  props: {
    name: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
