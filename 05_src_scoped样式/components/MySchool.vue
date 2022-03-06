<template>
  <div>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "MySchool",
  data() {
    return {
      name: "商丘工学院",
      address: "商丘",
    };
  },
};
</script>

<style scoped>
</style>