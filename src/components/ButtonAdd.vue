<template>
    <router-link :to="{ name: 'card-create'}">
        <div id="btn-container">
            <p>Add</p>
        </div>
    </router-link>
</template>

<script>
// import IconBase from "@/components/IconBase.vue"

export default {
    components: {
        // IconBase
    }
}
</script>

<style>
#btn-container{
    background-color: rgb(107, 181, 107);
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 40px;
    position: absolute;
    bottom: 4vh;
    right: 4vw;
}
</style>