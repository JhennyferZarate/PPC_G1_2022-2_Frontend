<template>
    <div class="home-page">
        <Menubar />
        <div class="content">
            <div class="textBox">
                <h1>Primero es <b>TU SALUD</b></h1>
                <h2>Luego el resto</h2>
                <p>En la <b>Clínica CADUCEUS</b> te atendemos rápidamente.</p>
                <button><router-link class="text-button" to="/login">Saca tu cita</router-link></button>
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
.content{
    position:relative;
    width: 100%;
    min-height: 30rem;
    padding-right: 100px;
    padding-left: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--background);
    .textbox{
        position: relative;
        max-width: 600px;
    }
    h1{
        font-size: 70px;
        font-weight: 700;
        color: var(--primary);
        margin-bottom: 2px;
        b{
            color: var(--secondary);
        }
    }
    h2{
        font-size: 50px;
        font-weight: 600;
        color: var(--primary);
        margin-bottom: 15px;
    }
    p{
        font-size: 30px;
        b{
            color: var(--secondary);
        }
    }
    img{
        position: relative;
        max-width: 60rem;
        height: auto;
    }
    button{
        background: var(--tertiary);
        
        border: none;
        margin-top: 40px;
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 30px;
        font-weight: 700;
        text-decoration-line: none;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover{
            background: var(--secondary);
            color: var(--background);
        }
        .text-button{
            color: var(--background);
            text-decoration-line: none;
        }
    }

}

</style>