<template>
<div v-clickoutside="handleClose">
  <div @click="toggleMenu">
    <span v-show="showPlaceholder">{{ localePlaceholder }}</span>
    <span v-show="!showPlaceholder">{{ selectedSingle }}</span>
    <Icon type="chevron-down"></Icon>
  </div>
  <transition name="slide-up">
    <Dropdown v-show="visible" ref="dropdown">
      <ul ref="options"><slot></slot></ul>
    </Dropdown>
  </transition>  
</div>
</template>

<script>
import Emitter from '../../mixins/emitter'
import clickoutside from '../../directives/clickoutside'

export default {
  name: 'ksSelect',
  mixins: [ Emitter ],
  directives: { clickoutside },
  props: {
    value: {
      type: [String, Number, Array],
      default: ''
    },
    title: String
  },
  data () {
    return {
      visible: false,
      focusIndex: 0,
      options: [],
      selectedSingle: '',
      palceholder: '',
      model: this.value
    }
  },
  computed: {
    showPlaceholder () {
      let status = false
      if (this.selectedSingle === '') {
        status = true
      }
      return status
    },
    localePlaceholder () {
      return this.palceholder
    }
  },
  methods: {
    toggleMenu () {
      this.visible = !this.visible
    },
    hideMenu () {
      this.visible = false
      this.focusIndex = 0
      this.broadcast('ksOption', 'on-select-close')
    },
    handleClose () {
      this.hideMenu()
    },
    findChild (cb) {
      const find = function (child) {
        const name = child.$options.componentName

        if (name) {
          cb(child)
        } else if (child.$children.length) {
          child.$children.forEach((innerChild) => {
            find(innerChild, cb)
          })
        }
      }
      this.$children.forEach((child) => {
        find(child)
      })
    },
    updateOptions (init, slot = false) {
      let options = []

      this.findChild((child) => {
        options.push({
          value: child.value,
          label: (child.label === undefined) ? child.$el.innerHTML : child.label
        })
      })

      this.options = options
      this.palceholder = this.options[0].label
      if (init) {
        this.updateSingleSelected(true, slot)
      }
    },
    updateSingleSelected (init = false, slot = false) {
      const type = typeof this.model

      if (type === 'string' || type === 'number') {
        let findModel = false

        for (let i = 0; i < this.options.length; i++) {
          if (this.model === this.options[i].value) {
            this.selectedSingle = this.options[i].label
            findModel = true
            break
          }
        }

        if (slot && !findModel) {
          this.model = ''
        }
      }

      this.toggleSingleSelected(this.model, init)
    },
    toggleSingleSelected (value, init = false) {
      this.findChild((child) => {
        if (child.value === value) {
          child.selected = true
        } else {
          child.selected = false
        }
      })

      this.hideMenu()
    }
  },
  mounted () {
    this.updateOptions(true)

    this.$on('on-select-selected', (value) => {
      if (this.model === value) {
        this.hideMenu()
      } else {
        this.model = value
        console.log(this.model)
      }
    })
  },
  watch: {
    model () {
      this.updateSingleSelected()
    }
  }
}
</script>
<style scoped>
  
</style>
