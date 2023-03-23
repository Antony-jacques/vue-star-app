<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Firstname
        </th>
        <th class="text-left">
          Lastname
        </th>
        <th class="text-left">
          Description
        </th>
        <th class="text-left">
          Image URL
        </th>
        <th class="text-left">
          Image
        </th>
        <th class="text-left">
          Actions
        </th>
      </tr>
    </thead>
    <tbody>
      <AdminStarItem v-for="star in listOfStars" :key="star.id" :star="star"/>
    </tbody>
  </v-table>
</template>

<script>
import { mapState } from 'vuex'
import AdminStarItem from '@/components/AdminStarItem.vue'

export default {
    data(){
        return {}
    },
    components: { AdminStarItem, },
    computed: {
        ...mapState({
            listOfStars: 'listOfStars'
        })
    }
}
</script>

<style scoped>
    img {
        max-height: 50px
    }
</style>