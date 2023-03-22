<template>
    <v-form @submit.prevent="submit"  ref="form" >
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
        <v-btn
          color="success"
          class="mt-4"
          block
          type=submit
          
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
     imageURL: '',

     //form validation
     valid: true,
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
      imageURL: this.imageURL
     }
   }
 },

  methods: {
    ...mapMutations({
      addStar: 'addStar'
    }),
    async validate () {
      const { valid } = await this.$refs.form.validate()

      if (valid) alert('Form is valid')
    },
    reset () {
      this.$refs.form.reset()
    },
    submit(){
      console.log('submit', this.getSubmitedCharacter)
      this.addStar(this.getSubmitedCharacter)
      this.firstname = ''
      this.lastname = ''
      this.description = ''
      this.imageURL = ''

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