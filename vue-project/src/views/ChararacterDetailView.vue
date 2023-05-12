<script>
import { ref, onMounted } from "vue"
import {getCharacters} from '@/services/fictional.js  '

export default {
  props: ['id'],
  data() {
    return {
      character: {}
    };
  },
  async mounted() {
    this.character = await getCharacterDetail(this.id);
  }
};
</script>


<template>
    <div>
    <h1>{{ character.name }}</h1>
    <p>Status: {{ character.status }}</p>
    <p>Species: {{ character.species }}</p>
    <p>Gender: {{ character.gender }}</p>
    <p>Origin: {{ character.origin.name }}</p>
    <p>Location: {{ character.location.name }}</p>
    <img :src="character.image" :alt="character.name">
  </div>
</template>