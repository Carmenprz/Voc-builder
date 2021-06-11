<template>
  <div class="card">
    <section>
        <h1>{{ card.word }}</h1>
        <h2>{{ card.meaning }}</h2>
    </section>
    <footer>
        <span>Card number {{ card.id }}</span>
    </footer>
  </div>
</template>

<script>
export default {
    props: {
        card: Object
    }
}

</script>

<style>
.card{
    width: 25vw;
    height: 25vw;
    background-color: rgb(244, 244, 244);
    border-radius: 20px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    font-size: 20px;
}

h2 {
    color: grey;
}

footer {
    font-size: 12px;
    font-weight: 200;
}

</style>