<template>
<div>
  <div class="header">
    <h2> {{ getMessage }} </h2>
  </div>
  <div class="grid-container">
    <StarCard  v-for="star in listOfStars" :key="star.id" :star="star"  />
  </div>
</div>
</template>

<script>
  import { mapState } from 'vuex'
  import StarCard from '@/components/StarCard.vue'
    export default {
      data(){

      },
      computed: {
        ...mapState(['listOfStars']),
        getMessage(){
          return this.listOfStars.length ? 'Here are our Stars !' : 'No Stars yet :( . Please go to the Back Office to add some Stars'
        }
      },
      components: { StarCard },
    }
</script>

<style>
    h2 {
    margin: 2rem auto;
    text-align: center;
  }

  .grid-container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      justify-content: center;
  }
</style>>