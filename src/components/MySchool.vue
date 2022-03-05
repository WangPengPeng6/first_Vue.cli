<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称{{ schoolName }}</h2>
    <h2>学校地址{{ address }}</h2>
    <button @click="msg">点我提示学校名称</button>
  </div>
</template>

<script>
// 组件交互的代码（数据，方法）
export default {
  name: "MySchool",
  data() {
    return {
      schoolName: "尚硅谷",
      address: "北京",
    };
  },
  methods: {
    msg() {
      alert(this.schoolName);
    },
  },
};
</script>

<style>
/* 组件的样式 */
.demo {
  background-color: pink;
}
</style>
