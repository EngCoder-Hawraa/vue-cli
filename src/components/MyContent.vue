<template>
  <div class="my-content">
    <ul>
      <li v-for="(student, i) in myStudents" :key="i">
        {{ student }}
      </li>
    </ul>
    <button @click="deleteStudent()">Change Ref</button>
    <p>active is {{ myActive }}</p>
    <button @click="($event) => (myActive = !myActive)">Change Prem</button>
  </div>
</template>

<script>
export default {
  name: "MyContent",
  // props: ["students", "isActive"],
  props: {
    students: {
      type: Array,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      myStudents: this.students,
      myActive: this.isActive,
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
