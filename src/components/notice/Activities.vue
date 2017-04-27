<template>
  <div>
      <div v-on:click="gotodetail()">
        <kspanel></kspanel>
      </div>
      <div v-on:click="gotodetail()">
        <kspanel></kspanel>
      </div>
      <div v-on:click="gotodetail()">
        <kspanel></kspanel>
      </div>
  </div>
</template>
<script>
  import kspanel from '../global/kspanel'

  export default {
    name: 'Activities',
    components: {
      kspanel
    },
    methods: {
      gotodetail () {
        this.$router.push('detail')
      }
    },
    data () {
      return {
      }
    }
  }
</script>
<style scoped>
</style>
