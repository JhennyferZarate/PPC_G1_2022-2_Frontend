<template>
    <div class="app">
        <router-view/>
    </div>
</template>

<script setup>



</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Quicksand:200,300,400,500,600,700,800,900&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
}
:root{
    --primary: #090a0a;
    --secondary: #11285a;
    --tertiary: #17377A;
    --quaternary: #2659C7;
    --background: rgb(255, 255, 255);
    --light: #ecf0f1;
    --menubar-height: 50px;
}
</style>
