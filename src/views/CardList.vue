<template>
  <div class="cards-container">
    <Card v-for="card in cards" :key="card.id" :card="card" />
  </div>
</template>

<script>

import Card from "@/components/Card.vue";
import CardService from "@/services/CardService.js"

export default {
  components: {
    Card,
  },

  data() { 
    return {
      cards: []
    }
  }, 

  created() {
    CardService.getCards()
      .then(response => {
        this.cards = response.data
      })
      .catch(error => {
        console.log(error.response)
      })
  }

};
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;

}
</style>
