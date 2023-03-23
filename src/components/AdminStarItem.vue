import { mapState } from 'vuex';
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
            <v-btn color="red"  @click="removeUser"> remove <v-icon
          end
          icon="mdi-cancel"
        ></v-icon></v-btn>
        </td>
      </tr>
</template>

<script>
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
        toggleEditMode(){
        this.editMode = !this.editMode;
      },

      updateStar(){
          const updatedStar = {
            firstname: this.updatedFirstname,
            lastname: this.updatedLastname,
            description: this.updatedDescription,
            imageURL: this.updatedImageURL
          }

        console.log('update :', updatedStar)
        this.toggleEditMode()
        //this.saveUpdatedUser(updatedUser) wip
      },

      removeStar(){
          this.deleteStateStar(this.star.id)
      }

    }

}
</script>

<style scoped>
    td img {
        max-height: 50px;
    }
</style>>