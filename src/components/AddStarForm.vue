<template>
    <v-form @submit.prevent="submit"  ref="form" v-model="isFormValid" >
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="firstname" label="First name" :rules="nameRules" ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field v-model="lastname" label="Last name" :rules="nameRules" ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-textarea clearable label="Description" v-model="description" :rules="descriptionRules"></v-textarea>
        </v-col>

        <v-col cols="12">
            <v-file-input @change="handleFileChange" accept="image/*" clearable 
             label="Select an image"></v-file-input>
        </v-col>
      </v-row>

      <div class="img-preview">
      <img :src="imageURL" alt="star image"></div>

      <div class="d-flex flex-column">

        <v-alert v-if="isSubmited" type="success" title="Thank tou !" text="You star has been added"></v-alert>
        <v-btn
          color="success"
          class="mt-4"
          block
          type=submit
          :disabled="!isFormValid"
        >
          Validate
        </v-btn>

        <v-btn
          color="error"
          class="mt-4"
          block
          @click="reset"
        >
          Reset Form
        </v-btn>
      </div>
    </v-container>
  </v-form>

</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
 data(){
   return {
     firstname: '',
     lastname: '',
     description: '',
     imageURL: 'https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?ssl=1',
     isSubmited: false,

     //form validation
     isFormValid: false,
     nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 20 characters',
      ],
      descriptionRules: [
        v => !!v || 'Description is required',
        v => (v && v.length >= 5) || 'Description must be at least 5 characters',
      ],
   }
 },
 computed:{
  ...mapState(['listOfStars']),
  getSubmitedCharacter(){
     return {
      firstname: this.firstname,
      lastname: this.lastname,
      description: this.description,
      imageURL: this.imageURL,
      id: this.getHighestId ? this.getHighestId+1 : 1
     }
   },
   getHighestId(){
     const sortedByIdList =  this.listOfStars.sort((a,b) => a.id - b.id)
     const lastStar = sortedByIdList.findLast(star => star.id)
     return lastStar?.id
   }
 },

  methods: {
    ...mapMutations({
      addStar: 'addStar'
    }),

    reset () {
      this.$refs.form.reset()
    },
    submit(){
      this.$refs.form.validate();

      this.addStar(this.getSubmitedCharacter)
      this.isSubmited = true


    },

    handleFileChange(e){
      const file = e.target.files[0]
      this.imageURL = URL.createObjectURL(file)
    },
  },
}
</script>

<style scoped >
  .img-preview {
    display: flex;
  } 

  .img-preview img {
    margin: 1rem auto;
    max-height: 50vh;
  }

</style>>