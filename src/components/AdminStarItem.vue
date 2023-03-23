import { mapState } from 'vuex';
<template>
      <tr>
        <td>
            <span v-if="!editMode">{{ star.firstname }}</span>
            <v-text-field v-model="updatedFirstname" v-if="editMode" type="text" :value="star.firstname"></v-text-field>
        </td>
        <td>
            <span v-if="!editMode">{{ star.lastname }}</span>
            <v-text-field v-model="updatedLastname" v-if="editMode" type="text" :value="star.lastname"></v-text-field>
        </td>
        <td>
            <span v-if="!editMode">{{ star.description }}</span>
            <v-textarea v-model="updatedDescription" v-if="editMode" type="text" :value="star.description"></v-textarea>
        </td>
        <td>
            <span v-if="!editMode">{{ star.imageURL }}</span>
            <v-text-field v-model="updatedImageURL" v-if="editMode" type="text" :value="star.imageURL"></v-text-field>
        </td>
        <td><img :src="star.imageURL" alt="image preview"></td>
        <td>
            <v-btn color="warning" icon="mdi-pencil" v-if="!editMode"  @click="toggleEditMode" ></v-btn>
            <v-btn v-if="editMode" color="success"  @click="updatedUser" >save</v-btn>
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
        toggleEditMode: function(){
        this.editMode = !this.editMode;
      },
    }

}
</script>

<style scoped>
    td img {
        max-height: 50px;
    }
</style>>