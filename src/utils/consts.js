// 当前 host
const HOST = window.location.host

// 开发
const DEV = 'DEV'

// 生产
const PROD = 'PROD'

// 当前环境
const ENV = HOST === 'http://localhost:3000' ? DEV : PROD

const ak = 'CObclvvLzT4gQTAg08oIrKo134TIWmEP'

// 基础地址
const BASE_URL = ENV === DEV ? 'http://admin.chiprincess.cn/api' : '/api'

// 文件上传接口
const UPLOAD_URL = '/api/upload'

// 接口地址
const API_URL = BASE_URL

// 分页大小
const PAGE_SIZE = 10

// 网站标题
const TITLE = '蕨菜后台管理'

export default {
  BASE_URL,
  API_URL,
  PAGE_SIZE,
  TITLE,
  UPLOAD_URL,
  ak
}
