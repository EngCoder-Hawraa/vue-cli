<template>
  <div class="my-content">
    <ul>
      <li v-for="(student, i) in myStudents" :key="i">
        {{ student }}
      </li>
    </ul>
    <button @click="deleteStudent()">Change Ref</button>
  </div>
</template>

<script>
export default {
  name: "MyContent",
  props: ["students", "isActive"],
  data() {
    return {
      myStudents: this.students,
    };
  },
  methods: {
    deleteStudent() {
      this.myStudents.shift();
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
