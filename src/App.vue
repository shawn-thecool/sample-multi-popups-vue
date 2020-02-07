<template>
  <div id="app">
    <Home />
    <!-- <Popup
      v-for="{ popupId, title, content } in popups"
      :key="popupId"
      :popupId="popupId"
      :title="title"
      :content="content"
    /> -->
    <popup></popup>
    <popup></popup>
    <popup></popup>
    <popup></popup>
  </div>
</template>

<script>
import Home from './pages/Home.vue'
// import Popup from './components/Popup.vue'
import Popup from './components/popup/Popup'

import { createNamespacedHelpers } from 'vuex'

const popupHelper = createNamespacedHelpers('popup')

export default {
  name: 'app',
  computed: {
    ...popupHelper.mapGetters(['popups'])
  },
  components: {
    Home,
    Popup
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
