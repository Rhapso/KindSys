<template>
  <div class="teacher">
    <div class="wraper">
      <div> <img class="icon" v-bind:src="url" /> </div>
      <Card> <p style="width:50%; display:inline;"> 身份: </p> <p style="width:50%; float:right; text-align:right;"> {{ name }}老师 </p> </Card>
      <Card> <p style="width:50%; display:inline;"> 任教科目: </p> <p  style="width:50%; float:right; text-align:right;"> {{ subject }} </p> </Card>
      <div class="button"> <Button style="background:#3399ff;">leave message</Button> </div>
      <div class="button"> <Button style="background:#00cc66;">phone call</Button> </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'teacher',
    data () {
      return {
        url: '/static/imgs/icon1.jpg',
        name: 'foo',
        subject: 'math'
      }
    }
  }
</script>

<style scoped>
div.teacher { margin-top: 30px; width:400px; position:absolute; left:50%; }
div.wraper { width: 400px; position:absolute; left:-50%; }
img.icon { width:100px; height:100px; margin-left:150px; }
.button Button { width:300px; margin-left:50px; margin-top:20px; font-size:20px; }
</style>
