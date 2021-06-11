<template>
    <div class="card-container">
        <section class="card-body">
            <div>
                <h1>{{ card.word }}</h1>
            </div>
            <div>
                <h2>{{ card.meaning }}</h2>
            </div>
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
.card-container{
    width: 200px;
    height: 200px;
    background-color: rgb(244, 244, 244);
    border-radius: 20px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    font-size: 15px;
    position: relative;
    margin: 5px;
}

.card-body{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-around;
    height: 160px;
    margin: 7px;
}


h2 {
    color: grey;
}

footer {
    font-size: 11px;
    position: absolute;
    bottom: 7px;
    left: 62px;
}

</style>