<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM" ref="btn">点我输出上方的DOM元素</button>
    <MySchool ref="sch" />
  </div>
</template>

<script>
import MySchool from "./components/MySchool.vue";
export default {
  name: "App",
  components: { MySchool },
  data() {
    return {
      msg: "欢迎学习Vue!",
    };
  },
  methods: {
    showDOM() {
      console.log(this.$refs.title); //真实DOM元素
      console.log(this.$refs.btn); //真实DOM元素
      console.log(this.$refs.sch); //School组件的实例对象（VC）
    },
  },
};
</script>

<style>
</style>