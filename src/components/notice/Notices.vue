<template>
  <div>
    <Row type="flex" align="middle" style="height:50px">
      <Col span="6" offset="10">
        <ks-select :items = "classList"></ks-select>
      </Col>	
    </Row>
    <div class="notices">
          <panel :list="list" :type="type" :footer="footer"></panel>
    </div>
  </div>
</template>

<script>
import { Panel, Group, Radio } from 'vux'
import ksSelect from '../global/Select'

export default {
  name: 'notices',
  components: {
    Panel,
    Group,
    Radio,
    ksSelect
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
      classList: [
        {
          value: '0',
          name: '周一',
          className: '小小班（1）班'
        },
        {
          value: '1',
          name: '周二',
          className: '小班（2）班'
        },
        {
          value: '2',
          name: '周三',
          className: '小班（2）班'
        },
        {
          value: '3',
          name: '周四',
          className: '小班（2）班'
        },
        {
          value: '4',
          name: '周五',
          className: '小班（2）班'
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
