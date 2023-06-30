<template>
  <div class="app-box">
    <!-- home
    <div class="add-query" @click="addQuery">add-query</div> -->
    <div style="white-space: pre;">{{ pdfText }}</div>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash'
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      pdfText: ''
    }
  },
  methods: {
    addQuery() {
      let query = cloneDeep(this.$route.query)
      query.a = '1'

      // eslint-disable-next-line no-debugger
      debugger
      this.$router.push({
        query
      })
    }
  },
  async created() {
    // console.log('home created')
    // const data = await axios.get('/api/pdf')
    // this.pdfText = data.data.text

    const data = await axios.get('/api/pdfHtml')
    console.log('data', data)
  },
  destroyed() {
    console.log('home destroyed')
  }
}
</script>

<style scoped>
.app-box {
  padding: 40px 20px;
}
</style>
