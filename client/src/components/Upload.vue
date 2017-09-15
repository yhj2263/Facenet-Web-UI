<template>
  <div>
    <h1>Upload File</h1>

    <input
    ref="fileInput"
    type="file"
    accept=".zip"
    name="sampleFile" />
    <button
    @click="upload">
    upload</button>
  </div>
</template>

<script>
import uploadFile from '@/services/uploadFile.js'
export default {
  methods: {
    // used to upload file to the server
    upload (e) {
      let files = this.$refs.fileInput.files
      let formData = new FormData()
      console.log('button clicked')
      console.log('selected file is ' + files[0].name)
      formData.append('sampleFile', files[0])
      uploadFile.upload(formData)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
