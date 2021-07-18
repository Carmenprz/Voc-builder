<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');

#app {
  font-family: 'Lexend Deca', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 10px;
  padding-left: 15px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h1 {
    font-size: 49px;
    font-style: normal;
    font-weight: 600;
    line-height: 61px;
    letter-spacing: 0em;
    text-align: left;
}

h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;
    color: black !important;
  }

.logo {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
}

</style>
