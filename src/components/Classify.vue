<template>
  <v-container>
    <v-layout column warp>
      <v-flex xs12 sm12 mt-5 class="text-sm-center">
        <v-btn
        raised
        class="blue"
        @click="onPickFile"
        >
          Pick File
          <v-icon right dark>add_box</v-icon>
        </v-btn>
        <input
        type="file"
        accept=".zip"
        style="display: none"
        ref="fileInput"
        @change="onFilePicked"/>

        <v-flex xs6 sm2 offset-sm5>
          <p ref="fileName">
            {{fileName}}
          </p>
        </v-flex>

      </v-flex>
      <v-flex xs12 sm12 class="text-sm-center">
        <v-btn
        @click="upload"
        class="blue-grey white--text">
        Upload
        <v-icon right dark>cloud_upload</v-icon>
        </v-btn>
      </v-flex>

      <v-flex xs12 sm4 offset-sm4 mb-4 class="text-sm-right">
        <v-select
          v-bind:items="classifierNames"
          v-model="e1"
          label="Select a classifier"
          single-line
          auto
          prepend-icon="list"
          hide-details
        ></v-select>
      </v-flex>

      <v-flex xs12 sm12 class="text-sm-center">
        <v-btn
        large
        class="green"
        @click="classify">
        Classify
        </v-btn>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import uploadFile from '@/services/uploadFile.js'
import indexService from '@/services/IndexService.js'
import Classifier from '@/services/Classify.js'

export default {
  data () {
    return {
      fileName: '',
      modelArray: null,
      modelName: '20170512-110547',
      classifierName: 'testClassifier1',
      e1: null,
      classifierNames: [
      ]
    }
  },
  methods: {
    // used to upload file to the server
    upload (e) {
      let files = this.$refs.fileInput.files
      let formData = new FormData()
      console.log('button clicked')
      console.log('selected file is ' + files[0].name)
      formData.append('sampleFile', files[0])
      uploadFile.upload_test(formData)
    },
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (e) {
      const files = e.target.files
      this.filename = files[0].name
      this.$refs.fileName.textContent = files[0].name
    },
    classify () {
      console.log(this.classifierName)
      Classifier.start({
        modelName: this.modelName,
        classifierName: this.classifierName,
        msg: 'test message from front end'
      })
    }
  },
  async mounted () {
    let classifierJson = await indexService.classifierIndex()
    // console.log(modelJson)
    this.modelArray = classifierJson.data
    var classifierNames = []
    this.modelArray.forEach(function (item, index, array) {
      classifierNames.push(item.name)
    })
    this.classifierNames = classifierNames
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
