<template>
  <div>
      <kspanel></kspanel>
  </div>
</template>
<script>
  import { Panel, Group, Radio } from 'vux'
  import kspanel from '../global/Panel'

  export default {
    name: 'Info',
    components: {
      Panel,
      Group,
      Radio,
      kspanel
    },
    data () {
      return {
        type: '1',
        list: [
          {
            title: '消息1',
            src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            url: '/notices/detail'
          },
          {
            title: '消息2',
            src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            url: '/notices/detail'
          }
        ],
        footer: {
          title: '查看更多',
          url: 'http://vux.li'
        }
      }
    }
  }
</script>
<style scoped>
</style>
