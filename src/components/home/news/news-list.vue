<template>
  <div class="info-container">
    <div class="news-item">
      <Row>
        <Col span="5" offset="1" style="height: 100%">
        <img  src="/static/imgs/photo1.jpg" />
        </Col>
        <Col span="16" offset="1" type="flex" align-content="space-between">
        <Row>
          <h2 style="font-weight: bold">
            童心献爱 温暖老人心
          </h2>
        </Row>
        <br>
        <Row>
            <Col span="19" >
            09月27日
          </Col>
            <Col span=4>
            29阅读
          </Col>
        </Row>

        </Col>
      </Row>
    </div>
    <div class="news-item">
      <Row>
        <Col span="5" offset="1" style="height: 100%">
        <img  src="/static/imgs/photo2.jpg" />
        </Col>
        <Col span="16" offset="1" type="flex" align-content="space-between">
        <Row>
          <h2 style="font-weight: bold">
            童心献爱 温暖老人心
          </h2>
        </Row>
        <br>
        <Row>
          <Col span="19" >
          09月27日
        </Col>
          <Col span=4>
          29阅读
        </Col>
        </Row>

        </Col>
      </Row>
    </div>
    <div class="news-item">
      <Row>
        <Col span="5" offset="1" style="height: 100%">
        <img  src="/static/imgs/photo3.jpg" />
        </Col>
        <Col span="16" offset="1" type="flex" align-content="space-between">
        <Row>
          <h2 style="font-weight: bold">
            童心献爱 温暖老人心
          </h2>
        </Row>
        <br>
        <Row>
          <Col span="19" >
          09月27日
        </Col>
          <Col span=4>
          29阅读
        </Col>
        </Row>

        </Col>
      </Row>
    </div>
    <div class="news-item">
      <Row type="flex">
        <Col span="5" offset="1">
        <img  src="/static/imgs/photo4.jpg" />
        </Col>
        <Col span="16" offset="1" type="flex" align-content="space-between">
         <Row>
           <h2 style="font-weight: bold">
             童心献爱 温暖老人心
           </h2>
          </Row>
          <br>
          <Row>
            <Col span="19" >
              09月27日
            </Col>
            <Col span="4">
              29阅读
            </Col>
          </Row>
        </Col>
      </Row>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'NewsList',
    data () {
    }
  }
</script>
<style scoped>
  .news-item{
    padding:10px 0;
    position: relative;
  }
  .news-item:before{
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #eee;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  img{
    width:100%;
  }

</style>
