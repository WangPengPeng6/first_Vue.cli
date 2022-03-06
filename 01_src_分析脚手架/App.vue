<template>
  <div>
    <img src="./assets/logo.png" alt="logo" />
    <MySchool></MySchool>
    <MyStudent />
  </div>
</template>

<script>
import MySchool from "./components/MySchool.vue";
import MyStudent from "./components/MyStudent.vue";
export default {
  name: "App",
  template: `<App></App>`,
  components: {
    MySchool,
    MyStudent,
  },
};
</script>

