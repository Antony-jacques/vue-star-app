<template>
      <v-card
      class="mx-auto star-card"
      max-width="344"
      mt=2
    >
    <v-img
      :src="star.imageURL ? star.imageURL : 'https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1'"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      {{star.firstname}} {{star.lastname}}
    </v-card-title>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        variant="text"
      >
        Description
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ star.description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card> 

</template>

<script>
export default {
    data(){
        return {
          show: false,
        }
    },
    props: {
        star: {
            firstname: String,
            lastname: String,
            description: String,
            imageURL: String
        },
    },
}
</script>

<style scoped>
    .star-card {
        margin-top: 2rem;
        width: 100%;
    }
</style>>