<template>
  my name is {{ name }}
  <div class="parent">
    <form action="">
      <slot name="slotHeader"></slot>
      <slot name="slotInputs"></slot>
      <slot name="slotActions"></slot>
    </form>
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
