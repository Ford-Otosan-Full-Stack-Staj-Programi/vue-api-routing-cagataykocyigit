<script setup>
import { ref, onMounted } from "vue"
import {getCharacters} from '@/services/fictional.js  '
// import { ref, onMounted } from "vue"

 const characters = ref([])

// onMounted(async () => {
//     characters.value = await getCharacters()
// })

onMounted(async () => {
    characters.value = await getCharacters()
})



</script>


<template>


    <div>
    <h1>Character List</h1>
    <ul>
      <li v-for="character in characters" :key="character.id">
        <router-link :to="{ name: 'Character', params: { id: character.id } }">
          {{ character.name }}
        </router-link>
      </li>
    </ul>
  </div>

</template>