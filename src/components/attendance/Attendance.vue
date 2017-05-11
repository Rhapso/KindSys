<template>
	<div class="attendance">
		<Row type="flex" align="middle" style="height:40px">
    	    <Col span="6" offset="8">
    	    	<ks-select>
    	    			<ks-option v-for="item in stuList" :value="item.value" :key="item">{{ item.label }}</ks-option>
				</ks-select>
        	</Col>
        	<Col span="6" offset="4">
        		<div>
					<router-link to="/attendance/detail">
                        <Row type="flex" justify="center" align="middle">
                            <Col>
                                <x-icon type="ios-plus-outline" class="cell-x-icon" size="24"></x-icon>
                            </Col>
                            <Col>
                                <span style="color:green;line-height:29px">请假</span>
                            </Col>
                        </Row>
					</router-link>
				</div>
			</Col>		
        </Row>
        <panel :list="list" :type="type" :footer="footer" style="margin:0"></panel>
    </div>	
</template>
<script>
  import ksOption from '../global/Option'
  import ksSelect from '../global/Select'
  import { Panel } from 'vux'
  export default {
    name: 'Attendance',
    components: {
      ksSelect,
      ksOption,
      Panel
    },
    data () {
      return {
        stuList: [
          {
            value: '0',
            label: '周道'
          },
          {
            value: '1',
            label: '小道'
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
