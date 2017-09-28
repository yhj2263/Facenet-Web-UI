<template>
  <v-data-table
      v-bind:items="items"
      hide-actions
      class="elevation-1"
    >
    <template slot="items" scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.value }}</td>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            value: '0.985',
            name: 'accuracy'
          },
          {
            value: 'CASIA',
            name: 'train set'
          }
        ]
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
