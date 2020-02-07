<template>
  <div class="popup_header">
    <h3 class="tit_popup">{{ title }}</h3>
    <i class="desc_popup">{{ desc }}</i>
    <button class="btn_close" @click="closePopup">x</button>
  </div>
</template>

<script>
export default {
  name: 'popup-header-comp',
  props: {
    closeBtn: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    }
  },
  methods: {
    closePopup() {}
  }
}
</script>

<style scoped>
.popup_header {
  position:relative;
  min-height: 50px;
  padding: 5px 60px;
  border-bottom: 1px solid #333;
  text-align: center;
  box-sizing: border-box
}
.tit_popup {
  line-height:26px;
  color:#333
}
.desc_popup {
  line-height:14px;
  color:#777;
}
.btn_close {
  position: absolute;
  top:5px;
  right:5px;
  width:40px;
  height:40px;
}
</style>
