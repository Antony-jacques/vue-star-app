import { mapState } from 'vuex';
<template>
      <tr>
        <td>{{ star.firstname }}</td>
        <td>{{ star.lastname }}</td>
        <td>{{ star.description }}</td>
        <td>{{ star.imageURL }}</td>
        <td><img :src="star.imageURL" alt="image preview"></td>
      </tr>
</template>

<script>
export default {
    data(){
        return {}
    },
    props: {
        star: Object
    }

}
</script>

<style scoped>
    td img {
        max-height: 50px;
    }
</style>>