<template>
  <div class="classMember">
    <div class="memberContainer">
      <Row>
        <Col span="6" class="col" v-for="member in memberList" :key="member.id">
          <div class="member">
            <a v-bind:href="member.ref">
            <div> <img class="icon" v-bind:src="member.url" /> </div>
            </a>
            <p class="name"> {{ member.name }} </p>
          </div>
        </Col>
      </Row>
    </div>
    <group>
      <cell title="小小班（1）" link="/myClass/classInfo" :inline-desc='code'></cell>
    </group>
    <Button class="quit">退出班级</Button>
  </div>
</template>

<script>
  import { Cell, Group } from 'vux'

  export default {
    name: 'classMember',
    components: {
      Cell,
      Group
    },
    data () {
      return {
        classType: 'small',
        classNum: 1,
        code: 24678,
        memberList: [
          {
            ref: '#/Teacher',
            url: '/static/imgs/icon1.jpg',
            name: 'teaoo'
          },
          {
            ref: '#/Parent',
            url: '/static/imgs/icon2.jpg',
            name: 'par'
          },
          {
            ref: '#/Teacher',
            url: '/static/imgs/icon1.jpg',
            name: 'teacho'
          },
          {
            ref: '#/Parent',
            url: '/static/imgs/icon2.jpg',
            name: 'pat_far'
          },
          {
            ref: '#/Teacher',
            url: '/static/imgs/icon1.jpg',
            name: 'troobar'
          }
        ]
      }
    }
  }
</script>

<style scoped>
Col.col { margin:0; padding:0; }
Button.quit { width:100%; font-size:20px; padding:10px; margin-top:30px; background-color:white}
.member { width:100%; height:100%; margin-top:20px; margin-bottom:0; }
.member img.icon { width:80%; height:80%; margin-left:10%; margin-right:10%; }
.member p.name { width:100%; text-align:center; margin-top:0; font-size:20px; }
.classMember {height: 100%; background: #fafafa; }
.memberContainer {background: white; width: 100%; padding-left: 5%; padding-right:5%;}
</style>
