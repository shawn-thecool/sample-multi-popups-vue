// utils
const hasKeyInList = (list, key) => list.map(item => item[key]).indexOf(key)

const state = {
  popups: []
}

const mutations = {
  closePopupById(state, popupId) {
    state.popups = state.popups.filter(popup => popup.popupId !== popupId)
  },
  openPopupWithData(state, payload) {
    state.popups = [...state.popups, payload]
  }
}

const getters = {
  popups: state => state.popups
}

const actions = {
  go({commit}){
    // suc
    commit('closePopupById', )
    // 데이터
    // suc - data
    // fail - cb
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
