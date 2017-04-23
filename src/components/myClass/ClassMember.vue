<template>
  <div class="classMember">

    <Row :gutter="16">
      <Col span="6" class="col" v-for="member in memberList" :key="member.id">
        <div class="member">
          <a v-bind:href="member.ref">
          <div> <img class="icon" v-bind:src="member.url" /> </div>
          </a>
          <p class="name"> {{ member.name }} </p>
        </div>
      </Col>
    </Row>

    <a href="#/myClass/classInfo"> <Button class="info">
      <div>
        <h1> {{ classType }} ({{ classNum }}) 班 </h1>
        <p> 代码: {{code}} </p>
      </div>
    </Button> </a>
    <Button class="quit">退出班级</Button>
  </div>
</template>

<script>
  export default {
    name: 'classMember',
    data () {
      return {
        classType: 'small',
        classNum: 1,
        code: 24678,
        memberList: [
          {
            ref: '#/Teacher',
            url: '/static/imgs/icon1.jpg',
            name: 'teacher_foo'
          },
          {
            ref: '#/Parent',
            url: '/static/imgs/icon2.jpg',
            name: 'parent_bar'
          },
          {
            ref: '#/Teacher',
            url: '/static/imgs/icon1.jpg',
            name: 'teacher_boo'
          },
          {
            ref: '#/Parent',
            url: '/static/imgs/icon2.jpg',
            name: 'parent_far'
          },
          {
            ref: '#/Teacher',
            url: '/static/imgs/icon1.jpg',
            name: 'teacher_foobar'
          }
        ]
      }
    }
  }
</script>

<style scoped>
Col.col { margin:0; padding:0; }
Button.info { width:100%; margin-top:60px; text-align:center; }
.info div { padding:10px; }
Button.quit { width:100%; font-size:20px; padding:10px; margin-top:30px; }

.member { width:100%; height:100%; margin-top:20px; margin-bottom:0; }
.member img.icon { width:80%; height:80%; margin-left:10%; margin-right:10%; }
.member p.name { width:100%; text-align:center; margin-top:0; font-size:20px; }
</style>
