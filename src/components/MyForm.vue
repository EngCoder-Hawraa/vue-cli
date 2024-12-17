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
        <h3>Favourite Sports</h3>
        <label for="tennis">Tennis</label>
        <input v-model="student.sports.tennis" type="checkbox" name="tennis" />
        <label for="tennis">Football</label>
        <input
          v-model="student.sports.football"
          type="checkbox"
          name="football"
        />
        <label for="tennis">BasketBall</label>
        <input
          v-model="student.sports.basketball"
          type="checkbox"
          name="basketball"
        />
      </div>
      <div style="width: 100%">
        <input style="width: 50%" type="submit" value="Add" />
      </div>
    </form>
    <div>
      <ul>
        <li v-for="(st, i) in students" :key="i">
          <p>Name:{{ st.firstName }} {{ st.lastName }}</p>
          <p>Age: {{ st.age }}</p>
          <p>Gender: {{ st.gender }}</p>
          <p>
            Sports:
            <strong>
              <span v-for="(val, key, i) in st.sports" :key="i"
                ><span v-if="val">{{ key }}</span> <br
              /></span>
            </strong>
          </p>
          <p>Grade: {{ st.grade }}</p>
          <p>Email: {{ st.email }}</p>
          <p>Bio: {{ st.bio }}</p>
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
        .then(res => res.json())
        .then(data => console.log(data));
    },
  },
  async mounted(){
    await this.getStudents();
  }

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
