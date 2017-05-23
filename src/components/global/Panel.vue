<template>
  <div id="kspanel" class="ks-panel">
    <Card :bordered="false">
      <Row :gutter="16">
          <Col span="6">
              <div><img style="width:100%;height:60px;" src="http://file.baojy.cn/group1/M00/00/14/rBAfY1gGBnaEdvgUAAAAAIBMbjQ544_94x57.png"></img></div>
          </Col>
          <Col span="17" offset="1">
              <Row class="ks-panel-title">
                配套幼儿园为住宅小区“标配”
              </Row>
              <Row style="margin-top:20px;">
                <Col span="16" class="ks-panel-date">10月18日</Col>
                <Col span="8" class="ks-panel-reading"><p>31阅读</p></Col>
              </Row>  
          </Col>
      </Row>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'kspanel',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
