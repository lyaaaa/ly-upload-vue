<template>
  <Button :type="type" :loading="loading" @click="handleClick">
    {{ text }}
  </Button>
</template>

<script>
import { Button } from 'ant-design-vue'

export default {
  data() {
    return {
      loading: false
    }
  },
  props: {
    text: {
      type: String,
      default: '确定'
    },
    type: {
      type: String,
      default: 'primary'
    },
    delay: {
      type: Number,
      default: 0
    },
    asyncFunc: {
      type: Function,
      default: () => {}
    }
  },
  components: {
    Button
  },
  computed: {
    isFunc() {
      return typeof this.asyncFunc === 'function'
    }
  },
  methods: {
    async handleClick() {
      const asyncFunc = this.asyncFunc
      if (!this.isFunc) {
        return
      }
      const ret = asyncFunc()

      // 如果是异步函数，则显示loading
      if (ret && ret.then) {
        this.loading = {
          delay: this.delay
        }
        ret.finally(() => {
          this.loading = false
        })
      }
    }
  }
}
</script>
