<template>
    <div>
        <group gutter='0'>
		    <cell title="联系我们"></cell>
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
  name: 'Page',
  data () {
    return {
      placeholder: '您有什么建议?'
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
