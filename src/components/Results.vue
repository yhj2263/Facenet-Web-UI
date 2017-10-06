<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="item in classifyResult" key=item.filename sm5 ml-5 mr-5 mb-3 mt-3>
        <v-card class="blue" dark text-xs-center>
          <v-layout row warp>
            <v-flex >
              <v-avatar
                size=75px
                class="grey lighten-4"
              >
                <img :src="item.path" alt="avatar">
              </v-avatar>
            </v-flex>
            <v-flex>
              <v-card-text>
                Name : {{item.name}} <br />
                File : {{item.filename}}
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>

      <!-- <v-flex sm4>
        <v-card class="blue" dark>
          <v-layout row warp>
            <v-flex >
              <v-avatar
                tile
                class="grey lighten-4"
              >
                <img src="http://localhost:8081/no_label/01.jpg" alt="avatar">
              </v-avatar>
            </v-flex>
            <v-flex>
              <v-card-text>Mao Zedong</v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex> -->


      <!-- <v-flex sm 4></v-flex> -->
    </v-layout>
  </v-container>
</template>

<script>
import indexService from '@/services/IndexService.js'
export default {
  data () {
    return {
      classifyResult: 'empty',
    }
  },
  methods: {

  },
  async mounted () {
    let resultJson = await indexService.classifyResult()
    this.classifyResult = resultJson.data
    console.log('result from the server')
    console.log(this.classifyResult)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
