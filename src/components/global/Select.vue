<template>
<div v-clickoutside="handleClose">
  <div @click="toggleMenu" class="green" style="font-size: 24px;">
    <span v-show="showPlaceHolder">{{ localePlaceHolder }}</span>
    <span v-show="!showPlaceHolder">{{ selectedItem }}</span>
    <Icon v-show="!visible" type="chevron-down" class="green"></Icon>
    <Icon v-show="visible" type="chevron-up" class="green"></Icon>
  </div>
  <transition name="slide-up"> 
    <div class="poptip" v-show="visible">
      <span class="bot"></span>
      <span class="top"></span>
        <ul @click="select">
        	<li v-for="item in items">{{ item.name }}</li>
        </ul>
    </div>
  </transition> 
</div>
</template>

<script>
import clickoutside from '../../directives/clickoutside'
export default {
  name: 'ksSelect',
  directives: { clickoutside },
  props: {
    items: {
      type: [ Object, Array ]
    }
  },
  data () {
    return {
      isSelect: false,
      visible: false,
      selectedItem: '',
      showPlaceHolder: true
    }
  },
  computed: {
    localePlaceHolder () {
      return this.items[0].name
    }
  },
  methods: {
    fontColorChange () {
      var list = document.getElementsByTagName('li')
      for (var i = list.length - 1; i >= 0; i--) {
        list[i].style.color = '#999'
        if (list[i].innerHTML === this.selectedItem || (list[i].innerHTML === this.localePlaceHolder && this.showPlaceHolder === true)) {
          list[i].style.color = 'green'
        }
      }
    },
    toggleMenu () {
      this.visible = !this.visible
      this.fontColorChange()
    },
    hideMenu () {
      this.visible = false
    },
    handleClose () {
      this.hideMenu()
    },
    select (event) {
      this.showPlaceHolder = false
      this.selectedItem = event.target.innerHTML
      this.fontColorChange()
      this.hideMenu()
    }
  }
}
</script>
<style scoped>
  .poptip{
    width:250px; 
    margin-top: 6px;
    padding: 0 10px;
    border:2px solid #F5F5F5;
    background-color: #F5FFFA;
    position:absolute; 
    z-index: 1000;
    text-align: center;
    font-size: 18px;
    left:-50px;
  }

  .poptip span{
    width:0; 
    height:0; 
    font-size:0; 
    overflow:hidden; 
    position:absolute;
    z-index: 2000;
  }
  .poptip span.bot{
    border-width:10px; 
    border-style:solid; 
    border-color:transparent transparent #F5F5F5; 
    left:62px; 
    top: -20px;
  }
  .poptip span.top{
    border-width:10px; 
    border-style:solid; 
    border-color:transparent transparent #F5FFFA; 
    left:62px; 
    top:-18px;
  }
  li {
  	padding: 5px;
  	border-bottom: 1px solid #F5F5F5;
  } 
  .active {
  	color: green 
  }
  li:last-child {  
   border-bottom: none;  
	}   
	li::after {
		content: "小小班";
		font-size: 12px;
	}
</style>
