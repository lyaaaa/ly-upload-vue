import Uploader from './uploader'

export default {
  install: function(Vue) {
    // require.context
    Vue.component('Uploader', Uploader)
  }
}
