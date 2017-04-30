<template>
	<div>
		<ks-date-picker></ks-date-picker>
		<group>
	    	<x-button type="primary" action-type="button">确定</x-button>
    	</group>
	</div>
</template>
<script>
  import ksDatePicker from '../global/DatePicker'
  import { Group, XButton } from 'vux'
  export default {
    components: { ksDatePicker, Group, XButton }
  }
</script>
