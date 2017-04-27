<template>
  <div class="classInfo">
    <h1> 班级信息 </h1>
    <p> 班级名称: {{ classType }} ({{ classNum }}) 班 </p>
    <p> 班级代码: {{code}} </p>
    <p> 学校代码: {{schoolName }} </p>
    <img v-bind:src="url" />
  </div>
</template>

<script>
  export default {
    name: 'classInfo',
    data () {
      return {
        classType: 'small',
        classNum: 1,
        code: 2333333,
        schoolName: 'haobangbang',
        url: '/static/imgs/2weima.jpeg'
      }
    }
  }
</script>

<style scoped>
.classInfo { text-align:center; }
.classInfo h1 { margin-top:40px; font-size:30px; }
.classInfo p {margin-top:10px; font-size:15px; }
.classInfo img { margin-top:40px; }
</style>
