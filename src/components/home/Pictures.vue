<template>
  <div>
      <kstitle></kstitle>
      <div class="ks-container">
          <Row :gutter="16">
            <Col span="8">
                <img class="ks-pic-01" src="http://file.baojy.cn/group1/M00/00/0F/rBAfY1f4rquERO1GAAAAAOn7R0M816.jpg"></img>
            </Col>
            <Col span="8">
                <img class="ks-pic-01" src="http://file.baojy.cn/group1/M00/00/0F/rBAfY1f4rquERO1GAAAAAOn7R0M816.jpg"></img>
            </Col>
            <Col span="8">
                <img class="ks-pic-01" src="http://file.baojy.cn/group1/M00/00/0F/rBAfY1f4rquERO1GAAAAAOn7R0M816.jpg"></img>
            </Col>
          </Row>
      </div>
      <kstitle></kstitle>
      <div class="ks-container">
          <Row :gutter="16">
            <Col span="8">
                <img class="ks-pic-01" src="http://file.baojy.cn/group1/M00/00/0F/rBAfY1f4rquERO1GAAAAAOn7R0M816.jpg"></img>
            </Col>
            <Col span="8">
                <img class="ks-pic-01" src="http://file.baojy.cn/group1/M00/00/0F/rBAfY1f4rquERO1GAAAAAOn7R0M816.jpg"></img>
            </Col>
            <Col span="8">
                <img class="ks-pic-01" src="http://file.baojy.cn/group1/M00/00/0F/rBAfY1f4rquERO1GAAAAAOn7R0M816.jpg"></img>
            </Col>
          </Row>
      </div>
  </div>
</template>
<script>
  import kstitle from '../global/Title'

  export default {
    name: 'Pictures',
    components: {
      kstitle
    },
    data () {
      return {
      }
    }
  }
</script>
<style scoped>
    .ks-pic-01 {
        width: 100%;
        height: 100%;
    }
</style>
