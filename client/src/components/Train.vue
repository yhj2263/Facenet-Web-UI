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
      <v-flex xs12 sm4 offset-sm4 mb-3 mt-3 class="text-sm-right">
        <v-text-field
          name="input-1"
          label="Name"
          placeholder="Enter a name for your classifier"
          dark
          prepend-icon="keyboard_arrow_right"
          v-model="classifierName"
        ></v-text-field>
      </v-flex>

      <v-flex xs12 sm12 mb-4 class="text-sm-right">
        <v-layout row warp>
          <v-flex xs12 sm4 offset-sm4 mr-4>
            <v-select
              v-bind:items="modelNames"
              label="Select a model"
              single-line
              auto
              prepend-icon="list"
              hide-details
              @change="onSelected"
            ></v-select>
          </v-flex>
          <v-flex xs6 sm2>
            <table
            style="display:none"
            ref="modelTable"
            border="1"
            cellpadding="10"
            width="100%">
              <tr>
                <td align="center">Accuracy</td>
                <td align="center">{{accuracy}}</td>
              </tr>
              <tr>
                <td align="center">Data Set</td>
                <td align="center">{{trainSet}}</td>
              </tr>
            </table>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex xs12 sm12 class="text-sm-center">
        <v-btn
        large
        class="green"
        @click="train">
        Start Training
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import uploadFile from '@/services/uploadFile.js'
import trainClassifier from '@/services/Train.js'
import indexService from '@/services/IndexService.js'

export default {
  data () {
    return {
      fileName: '',
      modelArray: null,
      classifierName: '',
      modelNames: [
      ],
      accuracy: null,
      trainSet: null,
      items: [
        {
          name: 'Accuracy',
          value: this.accuracy
        },
        {
          name: 'train set',
          value: this.trainSet
        }
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
      uploadFile.upload_train(formData)
    },
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (e) {
      const files = e.target.files
      this.filename = files[0].name
      this.$refs.fileName.textContent = files[0].name
    },
    onSelected (e) {
      console.log(e)
      var accuracy
      var trainSet
      this.modelArray.forEach(function (item, index, array) {
        if (item.name === e) {
          accuracy = item.accuracy
          trainSet = item.trainSet
        }
      })
      this.accuracy = accuracy
      this.trainSet = trainSet
      this.$refs.modelTable.style = 'display:on'
    },
    train () {
      console.log(this.classifierName)
      trainClassifier.train({
        name: this.classifierName,
        msg: 'test message from front end'
      })
    }
  },
  async mounted () {
    let modelJson = await indexService.modelIndex()
    // console.log(modelJson)
    this.modelArray = modelJson.data
    var modelNames = []
    this.modelArray.forEach(function (item, index, array) {
      modelNames.push(item.name)
    })
    this.modelNames = modelNames
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table {
    border: 1px;
    border-collapse: collapse;
    border-color: #969696
  }
</style>
