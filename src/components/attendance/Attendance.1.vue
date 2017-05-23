<template>
  <div class="attendance">
    <Row type="flex" align="middle" style="height:40px">
      <Col span="8" offset="8">
      <ks-select :items = "stuList"></ks-select>
      </Col>
    </Row>
    <hr color=#eee></hr>
    <group title="2017年4月">
      <cell title="14 周二">
        <div slot="value">
          <span style="color: green">黄清昊</span>
        </div>
      </cell>
      <cell title="14 周二">
        <div slot="value">
          <span style="color: green">黄清昊</span>
        </div>
      </cell>
    </group>
    <group title="2017年1月">
      <cell title="14 周二">
        <div slot="value">
          <span style="color: green">黄清昊</span>
        </div>
      </cell>
    </group>
  </div>	
</template>
<script>
  import ksSelect from '../global/Select'
  import { Panel, Group, Cell } from 'vux'
  export default {
    name: 'Attendance',
    components: {
      Group,
      Cell,
      ksSelect,
      Panel
    },
    data () {
      return {
        stuList: [
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
<style scoped>
  .cell-x-icon {
    fill: green;

  }
</style>
