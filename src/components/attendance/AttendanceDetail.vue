<template>
    <div>
        <group gutter='0'>
		    <cell title="请假日期" is-link :link="url"></cell>
		    <cell :border-intent="false" primary='content'>
			    <x-textarea :height="200" style="padding:0" :placeholder="placeholder" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')" ></x-textarea>
		    </cell>
	    </group> 
        <group>
	       <x-button type="primary" action-type="button">提交</x-button>
        </group> 
    </div>
</template>

<script>
import { XTextarea, Group, Cell, XInput, XButton, DatetimeRange } from 'vux'

export default {
  name: 'AttendanceDetail',
  data () {
    return {
      placeholder: '请输入请假事由',
      url: '/attendance/date'
    }
  },
  computed: {
    value: function () {
      var myDate = new Date()
      var year = myDate.getFullYear()
      var month = myDate.getMonth()
      var date = myDate.getDate()
      var hours = myDate.getHours()
      var minutes = myDate.getMinutes()
      var time = time.push(year, month, date, hours, minutes)
      return time
    }
  },
  components: {
    XTextarea,
    Group,
    Cell,
    XInput,
    XButton,
    DatetimeRange
  },
  methods: {
    onChange (value) {
      console.log('change', value)
    },
    onEvent (event) {
      console.log('on', event)
    }
  }
}
</script>
