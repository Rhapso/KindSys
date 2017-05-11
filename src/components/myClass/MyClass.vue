<template>
  <div class="myClass">
    <h1> 我的班级 </h1>
    <a href="#/myClass/classMember">
      <div class='wraper'>
        <Card id='title'>
          <img class="pic" src="/static/imgs/icon1.jpg" />
          <div class="text">
            <h1> {{ classType }} ({{ classNum }}) 班 </h1>
            <p> {{ teacher }} &nbsp &nbsp &nbsp 老师: {{ teacherNum }} </p>
          </div>
        </Card>
      </div>
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
        teacher: 'xiaoming',
        teacherNum: 666
      }
    }
  }
</script>

<style scoped>
.myClass { margin-top:10px; }
.myClass h1 { width:100%; text-align:center; margin-bottom:10px; }
.myClass .wraper #title h1 { width:100%; text-align:center; }
.myClass .wraper #title p { width:100%; text-align:center; }
.myClass a { width:200px; }
.myClass div.wraper { 
  width:600px;
  position:absolute;
  left:50%;
}
.myClass .wraper #title {
  background:#00ff66;
  width:600px;
  position:absolute;
  left:-50%;
  margin:0;
  padding-bottom:16px;
}
#title img.pic {
  float:left;
  width:100px;
  height:100px;
  border-radius:100px;
}
#title div.text {
  position:relative;
  top:12px;
}
</style>
