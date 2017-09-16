<template>
  <!-- <div>
    <h1>Upload File</h1>
    <input
    ref="fileInput"
    type="file"
    accept=".zip"
    name="sampleFile" />
    <button
    @click="upload">
    upload</button>
  </div> -->
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
        <p>
          {{fileName}}
        </p>
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
          v-bind:items="states"
          v-model="e1"
          label="Select a model"
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
        @click="train">
        Classify
        </v-btn>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import uploadFile from '@/services/uploadFile.js'
export default {
  data () {
    return {
      fileName: '',
      classifierName: 'test_classifier',
      e1: null,
      states: [
        'modle1', 'modle2', 'modle3'
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
      uploadFile.upload(formData)
    },
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (e) {
      const files = e.target.files
      this.filename = files[0].name
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
