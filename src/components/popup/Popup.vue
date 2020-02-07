<template>
  <div class="popup">
    <popup-header :closeBtn="true" title="find 함수" desc="find가 처리할 배열 요소의 범위는 첫 callback이 호출되기 전에 먼저 결정됩니다. " />
    <popup-body />
    <popup-footer />
  </div>
</template>

<script>
import PopupHeader from './PopupHeader'
import PopupBody from './PopupBody'
import PopupFooter from './PopupFooter'

export default {
  name: 'popup-comp',
  props: {
    header: {
      type: Object,
      default: null
    },
    body: {
      type: Object,
      required: false
    },
    footer: {
      type: Object,
      default: null
    }
  },
  components: {
    PopupHeader,
    PopupBody,
    PopupFooter
  }
}
</script>

<style scoped>
.popup {
  display: inline-block;
  min-width:200px;
  margin: 0 auto;
  -webkit-box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.75);
}
</style>
