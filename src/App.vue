<template>
  <div class="app-box">
    <div class="content">
      <div class="item" @click="handleRoute('home')">Home</div>
      <div class="item" @click="handleRoute('user')">User</div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      testData: 123,
      options: [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' }
      ]
    }
  },
  methods: {
    handleRoute(name) {
      // eslint-disable-next-line no-debugger
      debugger
      if (name === 'home') {
        this.$router.push('/')
      } else {
        this.$router.push('/user')
      }
    }
  },
  created() {
    console.log('created')
  }
}
</script>

<style scoped>
.app-box {
  padding: 40px 20px;
}
</style>
