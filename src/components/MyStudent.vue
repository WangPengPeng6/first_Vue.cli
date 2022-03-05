<template>
  <!-- 组件的结构 -->
  <div>
    <h2>学校名称{{ name }}</h2>
    <h2>学校地址{{ age }}</h2>
  </div>
</template>

<script>
// 组件交互的代码（数据，方法）
export default {
  name: "MyStudent",
  data() {
    return {
      name: "尚硅谷",
      age: 18,
    };
  },
};
</script>

