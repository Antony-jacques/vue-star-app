import { mapState } from 'vuex';
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
          Image
        </th>
        <th class="text-left">
          Image URL
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="star in listOfStars"
        :key="star.id"
      >
        <td>{{ star.firstname }}</td>
        <td>{{ star.lastname }}</td>
        <td>{{ star.description }}</td>
        <td>{{ star.imageURL }}</td>
        <td><img :src="star.imageURL" alt="image preview"></td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data(){
        return {}
    },
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