<template>
  <div>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
// 引入混合(局部混入)
import { mixin } from "../mixin";
export default {
  name: "MyStudent",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
  mixins: [mixin],
};
</script>

<style>
</style>