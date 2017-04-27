<template>
  <div class="notices">
        <panel :list="list" :type="type" :footer="footer"></panel>
  </div>
</template>

<script>
import { Panel, Group, Radio } from 'vux'

export default {
  name: 'notices',
  components: {
    Panel,
    Group,
    Radio
  },
  data () {
    return {
      type: '1',
      list: [
        {
          title: '消息1',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: '/notices/detail'
        },
        {
          title: '消息2',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: '/notices/detail'
        }
      ],
      footer: {
        title: '没有更多了'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
