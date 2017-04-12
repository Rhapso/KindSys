<template>
  <div class="teachers">
    <ul class="wgw-elegant-list wgw-elegant">
		<li class="item">
		    <a href="#/elegant/detail/195">
				<div class="avatar-container">
				<div class="avatar-box">
					<div class="avatar-line">
					<div class="avatar">
						<img class="img" src="http://file.baojy.cn/group1/M00/00/54/rBAfY1ivyYSEbWh3AAAAAKjfEBc188.jpg" width="100px" height="100px"></img>
					</div>
					</div>
				</div>
				</div>
				<div class="content">
				    <div class="f-toe name">邱凤春</div>
				    <div class="f-toe position">老师</div>
		        </div>
		    </a>
	    </li>
        <li class="item">
		    <a href="#/elegant/detail/196">
				<div class="avatar-container">
				<div class="avatar-box">
					<div class="avatar-line">
					<div class="avatar">
						<img class="img" src="http://file.baojy.cn/group1/M00/00/54/rBAfY1ivyYSEbWh3AAAAAKjfEBc188.jpg" width="100px" height="100px"></img>
					</div>
					</div>
				</div>
				</div>
				<div class="content">
				    <div class="f-toe name">魏书生</div>
				    <div class="f-toe position">老师</div>
		        </div>
		    </a>
	    </li>
	</ul>
  </div>
</template>

<script>
export default {
  name: 'teachers',
  data () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wgw-elegant-list {
    overflow: hidden;
    margin: 0 15px 30px;
}
.wgw-elegant-list .item {
    overflow: hidden;
    border-radius: 6px;
    float: left;
    text-align: center;
    box-sizing: border-box;
    width: 50%;
    margin-top: 15px;
}
.wgw-elegant-list .item .avatar-container {
    overflow: hidden;
}
.wgw-elegant .avatar-box {
    display: inline-block;
    border-radius: 100%;
    border: 2px solid #ffc375;
    overflow: hidden;
    width: 75%;
}
.wgw-elegant .avatar-line {
    border: 1px solid #ff9633;
    border-radius: 100%;
}
.wgw-elegant .avatar {
    padding: 0;
    font-size: 0;
    margin: 2px;
    border-radius: 100%;
    border: 1px dashed #d68f8f;
}
.wgw-elegant .avatar .img {
    width: 100%;
    border-radius: 100%;
    padding: 3px;
    box-sizing: border-box;
}
</style>
