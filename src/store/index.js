import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import log from './modules/log'
import login from './modules/login'
import role from './modules/role'
import businessname from './modules/businessname'
import businesstype from './modules/businesstype'
import businesstable from './modules/businesstable'
import businesstake from './modules/businesstake'
import navigation from './modules/navigation'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: 'zh-CN'
  },
  getters,
  actions,
  mutations,
  modules: {
    log,
    navigation,
    role,
    businessname,
    businesstype,
    businesstable,
    businesstake,
    login
  }
})
