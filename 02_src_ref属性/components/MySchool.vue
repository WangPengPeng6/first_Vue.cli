<template>
  <div class="school">
    <h2>学校的名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "MySchool",
  data() {
    return {
      name: "商丘工学院",
      address: "221",
    };
  },
};
</script>

<style>
.school {
  background-color: pink;
}
</style>