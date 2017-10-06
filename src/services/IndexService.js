import Api from '@/services/Api'

export default {
  modelIndex () {
    return Api().get('model')
    // return ['model1', 'model2']
  },
  classifierIndex () {
    return Api().get('classifier')
  },
  classifyResult () {
    return Api().get('classify_result')
  }
}

// Json object:
// {
//   name: 20170511-185253
//   accuracy: 0.987
//   trainSet: CASIA-WebFace
// }
