<template>
  <div class="my-form">
    <form action="" @submit.prevent="addStudent">
      <div>
        <label for="firstName">First Name</label>
        <input v-model="student.firstName" type="text" name="firstName" />
      </div>
      <div>
        <label for="lastName">Last Name</label>
        <input v-model="student.lastName" type="text" name="lastName" />
      </div>
      <div>
        <label for="age">Age</label>
        <input v-model="student.age" type="number" name="age" />
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
      <div>
        <h3>Grade</h3>
        <select v-model="student.grade" name="grade" id="grade">
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
        </select>
      </div>
      <div>
        <label for="email">Email</label>
        <input v-model="student.email" type="email" name="email" />
      </div>
      <div>
        <label for="bio">Bio</label>
        <textarea v-model="student.bio" name="bio" id="bio"></textarea>
      </div>
      <div style="width: 100%">
        <input style="width: 50%" type="submit" value="Save" />
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
      student: {
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        gender: "",
        sports: {
          tennis: "",
          football: "",
          basketball: "",
        },
        bio: "",
        grade: "",
      },
      students: [],
    };
  },
  methods: {
    addStudent() {
      // console.log(this.student);
      this.students.push(this.student);
      this.student = {
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        gender: "",
        sports: {
          tennis: "",
          football: "",
          basketball: "",
        },
        bio: "",
        grade: "",
      };
    },
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
