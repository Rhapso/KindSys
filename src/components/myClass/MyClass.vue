<!--todo rewrite css, tooooooooo terrible!!!-->
<template>
  <div class="myClass">
    <h1> 我的班级 </h1>
    <a href="#/myClass/classMember">
        <Card id='title'>
          <img class="pic" src="/static/imgs/icon1.jpg" />
          <div class="text">
            <h1> {{ classType }} ({{ classNum }}) 班 </h1>
            <p> {{ teacher }} &nbsp &nbsp &nbsp 老师: {{ teacherNum }} </p>
          </div>
        </Card>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'myClass',
    data () {
      return {
        classType: 'small',
        classNum: 1,
        teacher: '小明',
        teacherNum: 666
      }
    }
  }
</script>

<style scoped>
.myClass { margin-top:10px; }
.myClass>h1 { width:100%; text-align:center; margin-bottom:10px; }
.myClass #title .pic {width:50px; height:50px; float:left;border-radius: 50px;}
.myClass #title .text {color: black; margin-left: 70px; position:relative; bottom:7px;}
.myClass #title .text p {color: darkgray;}
.myClass #title .text h1 {font-size: 26px;}
</style>
