import { mapState, mapMutations } from 'vuex';
<template>
      <tr>
        <td>
            <span v-if="!editMode">{{ star.firstname }}</span>
            <v-text-field v-model="updatedFirstname" v-if="editMode" type="text" :placeholder="star.firstname"></v-text-field>
        </td>
        <td>
            <span v-if="!editMode">{{ star.lastname }}</span>
            <v-text-field v-model="updatedLastname" v-if="editMode" type="text" :placeholder="star.lastname"></v-text-field>
        </td>
        <td>
            <span v-if="!editMode">{{ star.description }}</span>
            <v-textarea v-model="updatedDescription" v-if="editMode" type="text" :placeholder="star.description"></v-textarea>
        </td>
        <td>
            <span v-if="!editMode">{{ star.imageURL }}</span>
            <v-text-field v-model="updatedImageURL" v-if="editMode" type="text" :placeholder="star.imageURL"></v-text-field>
        </td>
        <td><img :src="star.imageURL" alt="image preview"></td>
        <td>
            <v-btn color="warning" icon="mdi-pencil" v-if="!editMode"  @click="toggleEditMode" ></v-btn>
            <v-btn v-if="editMode" color="success"  @click="updateStar" >save</v-btn>
            <v-btn color="red"  @click="removeStar"> remove <v-icon
          end
          icon="mdi-cancel"
        ></v-icon></v-btn>
        </td>
      </tr>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data(){
        return {
            editMode: false,
            updatedFirstname: '',
            updatedLastname: '',
            updatedDescription: '',
            updatedImageURL: '',
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
    methods: {
        ...mapMutations({
            UPDATE_STAR: 'UPDATE_STAR',
            DELETE_STAR: 'DELETE_STAR'
        }),
        toggleEditMode(){
        this.editMode = !this.editMode;
      },

      updateStar(){
          const updatedStar = {
            firstname: this.updatedFirstname,
            lastname: this.updatedLastname,
            description: this.updatedDescription,
            imageURL: this.updatedImageURL,
            id: this.star.id
          }

        console.log('update :', updatedStar)
        this.toggleEditMode()
        this.UPDATE_STAR(updatedStar) 
      },

      removeStar(){
        this.DELETE_STAR(this.star.id)
      }

    }

}
</script>

<style scoped>
    td img {
        max-height: 50px;
    }
</style>>