<template>
  <div id="app">
    <Uploader />
    <Button>哈哈哈</Button>
    <Pagination :default-current="6" :total="500" />
  </div>
</template>

<script>
import { Button, Pagination } from 'ant-design-vue'

export default {
  name: 'App',
  components: {
    Button,
    Pagination
  }
}
</script>
