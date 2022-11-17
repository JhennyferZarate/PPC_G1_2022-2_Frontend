<template>
    <div class="home-page">
        <Menubar />
        <div class="content">
            <div class="textBox">
                <h1>TU SALUD ES LO PRIMERO</h1>
                <p>Atiéndete con nosotros</p>
                <button>Reservar una cita</button>
            </div>
            <img src="../assets/woman-medical.png" alt="">
            
        </div>  
        
        <router-view/>
    </div>
</template>

<script setup>
  import Menubar from '../components/MenuBar.vue'

</script>

<style lang="scss">
:root{
    --primary: #2c3e50;
    --secondary: #bdc3c7;
    --dark: #34495e;
    --light: #ecf0f1;
    --menubar-height: 50px;
}
.content{
    position:relative;
    width: 100%;
    min-height: 100vh;
    padding-right: 100px;
    padding-left: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(255, 255, 255);
    .textbox{
        position: relative;
        max-width: 600px;
    }
    h1{
        font-size: 70px;
        font-weight: 700;
        color: var(--primary);
    }
    p{
        font-size: 40px;
    }
    img{
        position: relative;
        max-width: 700px;
        height: auto;
    }
}
</style>