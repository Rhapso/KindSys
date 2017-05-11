<template>
  <div>
    <Row>
      <kstitle></kstitle>
    </Row>
    <Row>
        <div class="ks-page-content">
            秋高气爽的十月，歌舞声、欢笑声在红升侨颐敬老院。
        </div>
    </Row>
    <Row>
      <div class="ks-page-content">
        <checklist :title="'投票截止时间： 2016-09-08'"  required :options="commonList" v-model="checklist" @on-change="change"></checklist>
      </div>
    </Row>
    <Row>
      <div class="ks-page-content">
        <x-button type="primary">投票</x-button>
      </div>
    </Row>
  </div>
</template>
<script>
  import kstitle from '../global/kstitle'
  import { Checklist, XButton } from 'vux'

  export default {
    name: 'ActivitiesDetail',
    components: {
      kstitle,
      Checklist,
      XButton
    },
    methods: {
      change (val) {
        console.log('change', val)
      }
    },
    data () {
      return {
        commonList: [ 'China', 'Japan', 'America' ],
        checklist: []
      }
    }
  }
</script>
<style scoped>    
</style>
