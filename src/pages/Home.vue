<template>
  <div>
    <h1>Home</h1>
    <p>hello world</p>
    <button
      @click="
        openPopupWithData({
          popupId: 'initial popup',
          title: 'initial popup',
          content: 'initial popup'
        })"
    >
      openPopup
    </button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const popupHelper = createNamespacedHelpers('popup')

export default {
  name: 'home-page',
  methods: {
    ...popupHelper.mapMutations(['openPopupWithData', 'closePopupById'])
  }
}
</script>

<style></style>
