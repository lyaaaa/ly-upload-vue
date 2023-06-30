<template>
  <div>
    <LoadingButton :delay="500" :asyncFunc="asyncFunc" />
  </div>
</template>

<script>
import LoadingButton from './LoadingButton.vue'

export default {
  data() {
    return {
      loading: false
    }
  },
  components: {
    LoadingButton
  },
  methods: {
    asyncFunc() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, 2000)
      })
    }
  }
}
</script>
