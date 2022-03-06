<template>
  <div>
    <MyStudent name="老六" sex="男" :age="21" />
  </div>
</template>

<script>
import MyStudent from "./components/MyStudent.vue";
export default {
  name: "App",
  components: { MyStudent },
};
</script>

<style>
</style>