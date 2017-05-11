<template>
    <li @click.stop="select" @mouseout.stop="blur"><slot>{{ showLabel }}</slot></li>
</template>
<script>
import Emitter from '../../mixins/emitter'

export default {
  name: 'ksOption',
  componentName: 'select-item',
  mixins: [ Emitter ],
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    label: {
      type: [String, Number]
    }
  },
  data () {
    return {
      selected: false,
      index: 0,    // for up and down to focus
      isFocus: false
    }
  },
  computed: {
    showLabel () {
      return (this.label) ? this.label : this.value
    }
  },
  methods: {
    select () {
      this.dispatch('ksSelect', 'on-select-selected', this.value)
    },
    blur () {
      this.isFocus = false
    }
  },
  mounted () {
    this.searchLabel = this.$el.innerHTML
    this.$on('on-select-close', () => {
      this.isFocus = false
    })
  },
  beforeDestroy () {
    this.dispatch('ksSelect', 'remove')
  }
}
</script>
