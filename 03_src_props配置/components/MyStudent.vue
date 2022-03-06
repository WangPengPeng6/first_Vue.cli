<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge + 1 }}</h2>
    <button @click="updateAge">点我年龄加1</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      msg: "我是商丘工学院的一名学生",
      myAge: this.age,
    };
  },
  methods: {
    updateAge() {
      this.myAge++;
    },
  },
  //简单接收
  props: ["name", "age", "sex"],

  //接收的同时对数据类型进行限制
  /* props: {
    name: String,
    age: Number,
    sex: String,
  }, */

  //接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
  /* props: {
    name: {
      type: String, //name的类型是字符串
      required: true, //必填项
    },
    age: {
      type: Number,
      default: 99, //默认值
    },
    sex: {
      type: String,
      required: true,
    },
  }, */
};
</script>

<style>
</style>