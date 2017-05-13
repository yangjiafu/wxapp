import types from './types'
import Model from '../../../models/role'

// 角色的所有请求
export default {
  /**
   * 获取列表
   */
  getRoles ({commit}, {params}) {
    return new Model().GET({params}).then((res) => {
      commit(types.GET_ROLES, {
        data: res.data.data
      })
    })
  },

  /**
   * 获取详情
   */
  getRole ({commit}, {uri}) {
    return new Model().GET({uri}).then((res) => {
      commit(types.GET_ROLE, {
        data: res.data
      })
    })
  },

  /**
   * 删除
   */
  deleteRole ({commit}, {params}) {
    return new Model().DELETE({params})
  },

  /**
   * 添加数据
   */
  addRole ({commit}, {params}) {
    return new Model().POST({params})
  },

  /**
   * 修改数据
   */
  alterRole ({commit}, {params}) {
    return new Model().PUT({params})
  }
}
