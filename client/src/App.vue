<template>
  <v-app dark>
    <v-toolbar>
      <v-toolbar-title>Facenet</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click='home'>
          <v-icon left class="blue--text text--darken-2">home</v-icon>
          Home
        </v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>
</v-app>
</template>

<script>
export default {
  data () {
  },
  methods: {
    home () {
      this.$router.push('home')
    }
  }
}
</script>

<style>
</style>
