<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm12 class>
        <h1 class="Welcome">
          Welcome to Facenet App!
        </h1>
      </v-flex>
    </v-layout>
    <v-layout row warp>
      <v-flex xs12 sm6 class="text-sm-right">
        <v-btn large router to="/train" class="blue">Train</v-btn>
      </v-flex>
      <v-flex xs12 sm6>
        <v-btn large router to="/classify" class="error">Classify</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Welcome {
  color: #3888f2
}

</style>
