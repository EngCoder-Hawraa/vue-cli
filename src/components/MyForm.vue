<template>
  <div class="my-form">
    <form action="" @submit.prevent>
      <div>
        <label for="">First Name</label>
        <input v-model.lazy="student.firstName" type="text" />
        <p>Result is {{ student.firstName }}</p>
      </div>
      <div>
        <label for="">Last Name</label>
        <input v-model="student.lastName" type="text" />
        <p>Result is {{ student.lastName }}</p>
      </div>
      <div>
        <label for="">Age</label>
        <input v-model="student.age" type="number" />
        <p>Result is {{ student.age }}</p>
      </div>
      <div>
        <label for="">Email</label>
        <input v-model="student.email" type="email" />
        <p>Result is {{ student.email }}</p>
      </div>
      <div>
        <h3>Favorite Sports</h3>
        <label for="tennis">Tennis</label>
        <input
          v-model="student.sports.tennis"
          type="checkbox"
          name="tennis"
          id="tennis"
        />
        <p>{{ student.sports.tennis }}</p>
        <label for="football">Football</label>
        <input
          v-model="student.sports.football"
          type="checkbox"
          name="football"
          id="football"
        />
        <p>{{ student.sports.football }}</p>
      </div>
      <div>
        <h3>Gender</h3>
        <label for="male">Male</label>
        <input
          v-model="student.gender"
          value="male"
          type="radio"
          name="male"
          id="male"
        />
        <label for="female">Female</label>
        <input
          v-model="student.gender"
          value="female"
          type="radio"
          name="female"
          id="female"
        />
        {{ student.gender }}
      </div>
      <div>
        <label for="bio">Bio</label>
        <textarea name="bio" id="bio" v-model="student.bio"></textarea>
        {{ student.bio }}
      </div>
      <div>
        <label for="grade">Grade</label>
        <select v-model="student.grade" name="grade" id="grade">
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
          <option value="four">Four</option>
        </select>
        {{ student.grade }}
      </div>
      <div class="actions" style="width: 100%">
        <input type="submit" style="width: 50%" value="submit" />
      </div>
    </form>
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
        sports: {
          tennis: false,
          football: false,
        },
        gender: "",
        bio: "",
        grade: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.my-form {
  form {
    display: flex;
    flex-wrap: wrap;

    div {
      width: 40%;
    }
  }
}
</style>
