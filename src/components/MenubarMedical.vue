<template>
    <section>
        <header class="menubar">
            <a href="/" class="logo"><img src="../assets/logo-268px.png"></a>
            <ul>
                <li><router-link to="">Editar perfil</router-link></li>
                <li><router-link to="">Cerrar Sesión</router-link></li>
            </ul>
        </header>
    </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
section{
    position: relative;
    width: 100%;
    padding: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
}
header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 100px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        position: relative;
        max-width: 200px;
    }
    ul{
    position: relative;
    display: flex;
        li{
            list-style: none;
            a{
                display: inline-block;
                color: #333;
                font-weight: 400;
                font-size: 20px;
                margin-left: 40px;
                text-decoration: none;
            }
        }
    }
}
</style>