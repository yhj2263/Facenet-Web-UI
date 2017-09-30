import Api from '@/services/Api'

export default {
  start (file) {
    return Api().post('start_classify', file)
  }
}
