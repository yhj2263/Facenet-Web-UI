import Api from '@/services/Api'

export default {
  upload(file) {
    return Api().post('upload', file);
  }
}
