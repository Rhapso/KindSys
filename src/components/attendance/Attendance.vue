<template>
	<Card :bordered="false">
		<p slot="title">
		    <Select v-model="小道" style="width:100%">
		        <Option v-for="item in stuList" :value="item.value" :key="item">{{item.label}}</Option>
		    </Select>
		</p>
		<ul class="item">
			<li>4月20日 周四 全天</li>
			<li>4月17日 周一 全天</li>
			<li>4月17日 周一 全天</li>
			<li>4月17日 周一 全天</li>
			<li>4月17日 周一 全天</li>
			<li>4月17日 周一 全天</li>
			<li>4月17日 周一 全天</li>
			<li>4月17日 周一 全天</li>
			<li>4月17日 周一 全天</li>
		</ul>
	</Card>
	
</template>

<script>
  export default {
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
        ]
      }
    }
  }
</script>
<style scoped>
	.item li{ 
		height: 40px;
		border-width:0 0 1px 0;
		border-style: solid;
		border-color: #000;
		line-height: 40px;
	}
</style>
