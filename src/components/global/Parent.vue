<template>
  <div class="parent">
    <div class="wraper">
      <div> <img class="icon" v-bind:src="url" /> </div>
      <Card> <p style="width:50%; display:inline;"> 身份: </p> <p style="width:50%; float:right; text-align:right;"> {{ name }}家长 </p> </Card>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'parent',
    data () {
      return {
        url: '/static/imgs/icon2.jpg',
        name: 'bar'
      }
    }
  }
</script>

<style scoped>
div.parent { margin-top: 30px; width:400px; position:absolute; left:50%; }
.parent div.wraper { width: 400px; position:absolute; left:-50%; }
.parent .wraper img.icon { width:100px; height:100px; margin-left:150px; }
</style>
