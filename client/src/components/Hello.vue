<template>
  <v-container>
    <v-layout row warp>
      <v-flex xs12 sm6 class="text-sm-right">
        <v-btn large router to="/upload" class="blue">Train</v-btn>
      </v-flex>
      <v-flex xs12 sm6>
        <v-btn large router to="/classify" class="error">Classify</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Facenet App'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
