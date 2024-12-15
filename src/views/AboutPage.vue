<template>
  <div class="about">
    <MyContent :students="students" />
    <h2>This is about page</h2>
  </div>
</template>

<script>
import MyContent from "@/components/MyContent.vue";
export default {
  name: "AboutPage",
  components: { MyContent },
  data() {
    return { students: ["Sura", "Zahraa", "Muhammed"] };
  },
};
</script>

<style scoped></style>
