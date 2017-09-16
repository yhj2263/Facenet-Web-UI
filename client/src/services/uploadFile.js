import Api from '@/services/Api'

export default {
  upload_train (file) {
    return Api().post('upload_train', file)
  },
  upload_test (file) {
    return Api().post('upload_test', file)
  }
}
