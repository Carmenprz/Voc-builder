<template>
  <div>
      <nav class="logo">voc-builder</nav>
      <header>
          <h1>my albums</h1>
      </header>
      <section id="albums-container">
        <div class="album-container" v-for="album in albums" :key="album.id">
            <h2>{{ album.name }}</h2>
            <span class="album-footer">23 cards</span>
        </div>
      </section>
  </div>
</template>

<script>
import CardService from '../services/CardService';

export default {
    data() {
        return {
            albums: []
        }
    }, 

    created() {
        CardService.getAlbums() 
            .then(response => {
                this.albums = response.data
            })
            .catch(error => {
                console.log(error.response)
            })
    }
}
</script>

<style>

body {
    background-color: #FAF5F2;
}

header {
    margin-bottom: 70px; 
}

.album-container {
    height: 97px;
    border: 3px solid #000000;
    margin: 17px;
    box-sizing: border-box;
    border-radius: 13px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.album-container:hover, .album-container:active {
    border: none;
    background: linear-gradient(92.66deg, #FEB16E 37.51%, #FE9B78 95.62%);
}

.album-footer {
    position: absolute;
    bottom: 10px;
    right: 14px;
}


</style>