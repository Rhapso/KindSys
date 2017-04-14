<template>
  <div class="info-container">
    <div class="info-item">
      <div class="info-photo">
        <img  src="/static/imgs/photo1.jpg" />
      </div>
      <div class="info-post">
        <h2 class="info-title">童心献爱 温暖老人心</h2>
        <div class="info-data">09月27日</div>
        <div class="info-readers">19阅读</div>
      </div>
    </div>
    <div class="info-item">
      <div class="info-photo">
        <img  src="/static/imgs/photo2.jpg" />
      </div>
      <div class="info-post">
        <h2 class="info-title">童心献爱 温暖老人心</h2>
        <div class="info-data">09月27日</div>
        <div class="info-readers">19阅读</div>
      </div>
    </div>
    <div class="info-item">
      <div class="info-photo">
        <img src="/static/imgs/photo3.jpg" />
      </div>
      <div class="info-post">
        <h2 class="info-title">童心献爱 温暖老人心</h2>
        <div class="info-data">09月27日</div>
        <div class="info-readers">19阅读</div>
      </div>
    </div>
    <div class="info-item">
      <div class="info-photo">
        <img src="/static/imgs/photo4.jpg" />
      </div>
      <div class="info-post">
        <h2 class="info-title">童心献爱 温暖老人心</h2>
        <div class="info-data">09月27日</div>
        <div class="info-readers">19阅读</div>
      </div>
    </div>
    <div class="info-item">
      <div class="info-photo">
        <img  src="/static/imgs/photo5.jpg" />
      </div>
      <div class="info-post">
        <h2 class="info-title">童心献爱 温暖老人心</h2>
        <div class="info-data">09月27日</div>
        <div class="info-readers">19阅读</div>
      </div>
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
  .info-item{
    padding:10px 10px 10px 15px;
  }
  .info-photo{
    width: 100px;
    height:100px;
    float: left;
    margin-right: 20px;
  }
  img{
    width:100%;
  }
  .info-post{
    height:100px;
  }
</style>
