<template>
	<div>
    <Card :bordered="false" :padding="14">
        <Row type="flex" align="middle" slot="title">
          <Col span="6" offset="8">
            <ks-select :items = "stuList"></ks-select>
          </Col>
          <Col span="6" offset="4">
            <Icon type="ios-star" color="green"></Icon>
            <span style="color:green">请假</span>
            <Icon type="ios-star-outline" color="green"></Icon>
            <span style="color:green">缺勤</span>
          </Col> 
        </Row> 
		  <ks-date-picker></ks-date-picker>	 
    </Card>
	</div>
</template>
<script>
  import ksSelect from '../global/Select'
  import ksDatePicker from '../global/DatePicker'
  export default {
    name: 'AttendanceRecord',
    components: {
      ksSelect,
      ksDatePicker
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
        isPicked: false
      }
    }
  }
</script>
