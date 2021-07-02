<template>
    <div>
    <h1>Create a Card</h1>
    <form @submit.prevent="createCard">
        <div class="field">
            <label for="word">Card word</label>
            <input 
                v-model="card.word"
                type="text"
            />
        </div>
        <div class="field">
            <label for="meaning">Card meaning</label>
            <input 
                v-model="card.meaning"
                type="text"
            />
        </div>
        <div class="field">
            <label for="album">Card album</label>
            <input 
                v-model="card.album"
                type="text"
            />
        </div>
    <input type="submit" class="button" value="submit" />
    </form>
    </div>
</template>

<script>
import CardService from '@/services/CardService.js';
export default {
    data() {
        return {
            card: this.createFreshCard()
        }
    }, 
    methods: {
        createFreshCard() {
            const id = Math.floor(Math.random())
            return {
                id: id,
                word: '',
                meaning: '', 
                album: ''
            }
        }, 
        createCard() {
            CardService
            .postCard(this.card)
            .then(() => {
                this.$router.push({
                    name: 'card-list',
                })
            })
            .catch(() => { 
                console.log('There was a problem')
            })
        }
    }
}
</script>

<style>
    .field {
        padding-bottom: 8px;
        display: flex;
        flex-direction: column;
        width: 40vw;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
    }

    .button {
        all: unset;
        background-color: rgb(107, 181, 107);
        color: white;
        padding: 8px;
        border-radius: 5px;
    }
</style>