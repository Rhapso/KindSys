<template>
    <div class="parent">
      <div class="wrapper">
        <div class="img_wrapper"> <img class="icon" v-bind:src="url" /> </div>
        <group>
          <cell title="身份" value="李颖老师"></cell>
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
    name: 'parent',
    components: {
      Cell,
      Group,
      XButton
    },
    data () {
      return {
        url: '/static/imgs/icon2.jpg',
        name: 'bar'
      }
    }
  }
</script>

<style scoped>
.parent { margin-top: 30px; height: 100%; background: #fafafa;}
.wrapper { background: white; padding-left:10px; padding-right:10px;}
.img_wrapper {margin-left:50%;}
.img_wrapper img.icon { width:100px; height:200px; position:relative; right: 50px;}
.parent .wrapper img.icon { width:100px; height:100px; }
</style>
