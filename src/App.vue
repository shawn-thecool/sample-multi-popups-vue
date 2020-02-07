<template>
  <div id="app">
    <Home />
    <Popup
      v-for="{ popupId, title, content } in popups"
      :key="popupId"
      :popupId="popupId"
      :title="title"
      :content="content"
    />
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import Popup from './components/Popup.vue'

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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.popup_comp {
  margin: 0 auto;
  width: 260px;
  padding: 20px;
  -webkit-box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.75);
}
</style>
