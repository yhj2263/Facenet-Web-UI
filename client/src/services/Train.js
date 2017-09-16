import Api from '@/services/Api'

export default {
  train (file) {
    return Api().post('start_train', file)
  }
}
