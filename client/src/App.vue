<template>
  <v-app dark>
    <v-toolbar>
      <a href="https://github.com/yhj2263/Facenet-Web-UI">
        <img src = "./assets/mylogo.png" width = 65 height = 48/>
      </a>
      <v-toolbar-title>Facenet</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click='home'>
          <v-icon left class="blue--text text--darken-2">home</v-icon>
          Home
        </v-btn>
        <!-- <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn> -->
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
</v-app>
</template>

<script>
export default {
  data () {
    return {
      e2: 3
    }
  },
  methods: {
    home () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
