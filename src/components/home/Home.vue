<template>
  <div class="home">
    <div class="wgw-header wgw-index-bg">
	    <div class="wgw-index-header">
		    <img src="http://file.baojy.cn/group1/M00/00/03/rBAfY1fp3j-EOLaWAAAAAE8jQ9o909.png">
	    </div>
		<ul class="wgw-menu-list">
			<li class="item">
				<router-link to="/info">
					<span class="theme-icon-3 micon micon-group02-04"></span>
					<span class="csqb-text">幼园概况</span>
				</router-link>
			</li>
            <li class="item">
				<router-link to="/news">
					<span class="theme-icon-3 micon micon-group02-01"></span>
					<span class="csqb-text">信息快递</span>
				</router-link>
			</li>
            <li class="item">
				<router-link to="/teachers">
					<span class="theme-icon-3 micon micon-group02-08"></span>
					<span class="csqb-text">教师风采</span>
				</router-link>
            </li>
            <li class="item">
				<router-link to="/pictures">
					<span class="theme-icon-3 micon micon-group02-03"></span>
					<span class="csqb-text">宝宝相册</span>
				</router-link>
            </li>
            <li class="item">
				<router-link to="/news">
					<span class="theme-icon-3 micon micon-group02-06"></span>
					<span class="csqb-text">育儿知识</span>
				</router-link>
			</li>
            <li class="item">
				<router-link to="/page">
					<span class="theme-icon-3 micon micon-group02-07"></span>
					<span class="csqb-text">联系我们</span>
				</router-link>
            </li>
		</ul>
	</div>
    <div>
        <Card>
            <p slot="title">最新动态</p>
            <Row>
                <Col span="6">
                    <img style="width:100%;" src="http://file.baojy.cn/group1/M00/00/03/rBAfY1fp3j-EOLaWAAAAAE8jQ9o909.png">
                </Col>
                <Col span="16">
                    <p>xxx幼儿园是一所教育部直属的普通全日制幼儿园。</p>
                </Col>
            </Row>
        </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wgw-index-bg {
    background-image: url(http://wx.baojy.cn/statics/images/index-csqb-bg.jpg);
    height: 33rem;
    background-size: 100% 100%;
    overflow: hidden;
}
.wgw-index-header {
    text-align: center;
    margin-top: 12.375rem;
    height: 10.25rem;
}
.wgw-index-header>img {
    height: 6rem;
}
.wgw-menu-list {
    overflow: hidden;
    padding: 0;
}
.wgw-menu-list .item {
    width: 16.66%;
    float: left;
    box-sizing: border-box;
    text-align: center;
    height: 10.8rem;
}
.wgw-menu-list .item a {
    width: 100%;
    height: 100%;
    color: #fff;
    display: block;
    padding: 0 30%;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.2;
}
.wgw-menu-list .item:nth-child(1) a {
    padding-top: 1.875rem;
}
.wgw-menu-list .item:nth-child(2) a {
    padding-top: 3.4rem;
}
.wgw-menu-list .item:nth-child(3) a {
    padding-top: 2.9rem;
}
.wgw-menu-list .item:nth-child(4) a {
    padding-top: 1.57rem;
}
.wgw-menu-list .item:nth-child(5) a {
    padding-top: 2.8rem;
}
.wgw-menu-list .item:nth-child(6) a {
    padding-top: 3.5rem;
}
.micon {
    background: url(http://wx.baojy.cn/statics/images/wgw-theme-icon-x3.png);
    background-size: 590px 189px;
}
.micon-group02-04 {
    background-position: -150px -50px;
}
.micon-group02-01 {
    background-position: 0 -50px;
}
.micon-group02-08 {
    background-position: -350px -50px;
}
.micon-group02-03 {
    background-position: -100px -50px;
}
.micon-group02-06 {
    background-position: -250px -50px;
}
.micon-group02-07 {
    background-position: -300px -50px;
}
.csqb-text {
    font-size: .875rem;
    transform: translate(0,-22%);
    font-weight: 700;
}
</style>
