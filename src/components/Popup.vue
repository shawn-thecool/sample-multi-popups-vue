<template>
  <div class="popup_comp">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <button @click="closePopupById(`${popupId}`)">cancel</button>
    <button @click="openPopupWithData({ popupId: `${popupId}${tempId}`, title: `${title}`, content: `${tempId}` })">ok</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const popupHelper = createNamespacedHelpers('popup')

export default {
  name: 'popup-comp',
  props: {
    popupId: {
      type: String,
      require: true
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      tempId:''
    }
  },
  mounted(){
    this.tempId = Math.random()
  },
  methods: {
    ...popupHelper.mapMutations(['openPopupWithData', 'closePopupById'])
  }
}
</script>

<style></style>
