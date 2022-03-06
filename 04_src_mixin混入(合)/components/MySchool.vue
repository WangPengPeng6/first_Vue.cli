<template>
  <div>
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
// 引入混合(局部混入)
import { mixin } from "../mixin";
export default {
  name: "MySchool",
  data() {
    return {
      name: "商丘工学院",
      address: "商丘",
    };
  },
  mixins: [mixin],
};
</script>

<style>
</style>