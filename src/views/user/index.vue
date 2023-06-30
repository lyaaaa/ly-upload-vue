<template>
  <div class="user">
    user
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  methods: {},
  created() {
    console.log('user created')
  },
  destroyed() {
    console.log('user destroyed')
  }
}
</script>

<style scoped>
.app-box {
  padding: 40px 20px;
}
</style>
