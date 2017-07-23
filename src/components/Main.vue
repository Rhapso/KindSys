<template>
  <div class="hello">
    <div>
    <router-link to ="/home">
	<span class="theme-icon-3 micon micon-group02-04"></span>
	<span class="csqb-text" style="font-size:100px">Home page</span>
    </router-link>
    </div>
    <div>
    <router-link to ="/news">
	<span class="theme-icon-3 micon micon-group02-04"></span>
	<span class="csqb-text">News</span>
    </router-link>

    <router-link to ="/teachers">
	<span class="theme-icon-3 micon micon-group02-04"></span>
	<span class="csqb-text">Teachers</span>
    </router-link>

    <router-link to ="/pictures">
	<span class="theme-icon-3 micon micon-group02-04"></span>
	<span class="csqb-text">Pictures</span>
    </router-link>

    <router-link to ="/notices">
	<span class="theme-icon-3 micon micon-group02-04"></span>
	<span class="csqb-text">Notices</span>
    </router-link>

    <router-link to ="/attendance">
	<span class="theme-icon-3 micon micon-group02-04"></span>
	<span class="csqb-text">Attendance</span>
    </router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
