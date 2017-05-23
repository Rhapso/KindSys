<template>
    <div class="teacher">
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
.teacher { margin-top: 30px; height: 100%; background: #fafafa;}
.wrapper { background: white; padding-left:10px; padding-right:10px;}
.img_wrapper {margin-left:50%;}
.img_wrapper img.icon { width:100px; height:100px; position:relative; right: 50px;}
.parent .wrapper img.icon { width:100px; height:100px; }
</style>
