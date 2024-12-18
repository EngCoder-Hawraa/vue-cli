<template>
  <div class="my-form">
    <form action="" @submit.prevent="addStudent">
      <div>
        <label for="Name">Name</label>
        <input v-model="student.name" type="text" name="firstName" />
      </div>
      <div>
        <label for="age">Age</label>
        <input v-model="student.age" type="number" name="age" />
      </div>
      <div>
        <h3>Grade</h3>
        <select v-model="student.grade" name="grade" id="grade">
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
        </select>
      </div>
      <div>
        <h3>Gender</h3>
        <label for="male">Male</label>
        <input v-model="student.gender" type="radio" value="male" name="male" />
        <label for="female">Female</label>
        <input
          v-model="student.gender"
          type="radio"
          value="female"
          name="female"
        />
      </div>
      <div>
        <label for="">Favourite Sports</label>
        <input v-model="sport" type="text" />
        <button type="button" @click="addSport">Add Sport</button>
      </div>
      <div style="margin-left: 50px; margin-top: 10px">
        <span
          style="margin-right: 100px"
          v-for="(sport, i) in student.favouriteSports"
          :key="i"
        >
          {{ sport }}
        </span>
      </div>
      <div style="width: 100%">
        <input style="width: 50%" type="submit" value="Add" />
      </div>
      <div>
        <h3>Update Student</h3>
        <label for="">Age</label>
        <input type="number" v-model="changeAge" />
        <label for="">Id</label>
        <input type="number" v-model="changeId" />
        <button type="button" @click="updateStudents">Update</button>
      </div>
    </form>
    <div>
      <ul>
        <li v-for="st in students" :key="st.id">
          <p>Id: {{ st.id }}</p>
          <p>Name:{{ st.name }}</p>
          <p>Age: {{ st.age }}</p>
          <p>Gender: {{ st.gender }}</p>
          <p>Grade: {{ st.grade }}</p>
          <p>
            Favaourite Sports:
            <strong v-for="(sport, i) in st.favouriteSports" :key="i">
              {{ sport }} <br />
            </strong>
          </p>
          <span
            @click="($event) => deleteStudents(st.id)"
            style="cursor: pointer; font-size: 25px"
            >X</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyForm",
  data() {
    return {
      sport: "",
      student: {
        name: "",
        age: "",
        grade: "",
        gender: "",
        favouriteSports: [],
      },
      students: [],
      changeAge: "",
      changeId: "",
    };
  },
  methods: {
    addSport() {
      // console.log(this.student);
      this.student.favouriteSports.push(this.sport);
      this.sport = "";
    },
    async getStudents() {
      await fetch("https://course-backend.onrender.com/")
        .then((res) => res.json())
        .then((data) => (this.students = data));
    },
    async addStudent() {
      const requestData = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(this.student),
      };
      await fetch(
        "https://course-backend.onrender.com/add-student",
        requestData
      )
        .then((res) => res.json())
        .then((data) => (this.students = data));
    },
    async updateStudents() {
      if (!this.changeAge || !this.changeId) {
        return;
      }
      const requestData = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          age: this.changeAge,
        }),
      };
      await fetch(
        `https://course-backend.onrender.com/update-student/${this.changeId}`,
        requestData
      )
        .then((res) => res.json())
        .then((data) => (this.students = data));
    },
    async deleteStudents(id) {
      const requestData = {
        headers: { "Content-Type": "application/json" },
        method: "DELETE",
      };
      await fetch(
        `https://course-backend.onrender.com/delete-student/${id}`,
        requestData
      )
        .then((res) => res.json())
        .then((data) => (this.students = data));
    },
  },
  async mounted() {
    await this.getStudents();
  },
};
</script>

<style lang="scss" scoped>
.my-form {
  form {
    display: flex;
    flex-wrap: wrap;

    div {
      width: 45%;
      margin-bottom: 20px;
    }
  }
}
</style>
