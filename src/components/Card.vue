<template>
  <div>
    <header>
        <h1>{{ card.word }}</h1>
    </header>
    <section>
        <h2>{{ card.meaning }}</h2>
    </section>
    <footer>
        <span>Card number {{ card.id }}</span>
    </footer>
  </div>
</template>

<script>
export default {
    data() {
        return {
            card: {
                id: 1,
                word: 'house',
                meaning: 'casa'
            }
        }
    }
}

</script>

<style>

</style>