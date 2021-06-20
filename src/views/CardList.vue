<template>
  <div>
    <div class="cards-container">
      <Card v-for="card in cards" :key="card.id" :card="card" />
    </div>
    <aside>
      <ButtonAdd />
    </aside>
  </div>
</template>

<script>

import Card from "@/components/Card.vue";
import ButtonAdd from "@/components/ButtonAdd.vue";
import CardService from "@/services/CardService.js";

export default {
  components: {
    Card,
    ButtonAdd
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
