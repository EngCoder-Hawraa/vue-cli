<template>
  <div class="my-fporm">
    <form action="" @submit.prevent>
      <div>
        <label for="">First Name</label>
        <input type="text" />
      </div>
      <hr />
      <div>
        <label for="">Last Name</label>
        <input type="text" />
      </div>
      <hr />
      <div>
        <label for="">Age</label>
        <input type="number" />
      </div>
      <hr />
      <div>
        <label for="">Email</label>
        <input type="email" />
      </div>
      <hr />
      <div class="actions">
        <input type="submit" value="submit" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "MyForm",
  data() {
    return {};
  },
};
</script>

<style scoped></style>
