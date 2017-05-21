<template>
    <div class="parent">
      <div class="wrapper">
        <div class="img_wrapper"> <img class="icon" v-bind:src="url" /> </div>
        <group>
          <cell title="身份" value="李颖家长"></cell>
          <cell title="任教科目" value="数学"></cell>
        </group>
        <br/>
        <x-button type="primary">打电话</x-button>
        <br/>
      </div>
    </div>
</template>

<script>
  import { Cell, Group, XButton } from 'vux'

  export default {
    name: 'teacher',
    components: {
      Cell,
      Group,
      XButton
    },
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
