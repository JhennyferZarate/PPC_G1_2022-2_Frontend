<template>
    <div class="home-page">
        <Menubar />
        <div class="content-login">
            <form action="#" method="POST">
                <div class="login-box">
                    <h1>Iniciar Sesión</h1>
                    <div class="textbox">
                        <p>Correo electrónico</p>
                        <input type="text" name="email" required>
                    </div>
                    <div class="textbox">
                        <p>Contraseña</p>
                        <input type="password" name="password" required>
                    </div>
                    <button v-on:click="login()"><router-link class="text-button" to="/patient/:id">Ingresar</router-link></button>
                    <div class="textbox">
                        <p>Si no tienes cuenta regístrate <a><router-link class="text-register" to="/register">aquí</router-link></a></p>
                    </div>
                </div>
            </form>
            
        </div>  
        
        <router-view/>
    </div>
</template>

<script setup>
    import Menubar from '../components/MenuBar.vue'

</script>

<style lang="scss">
.content-login{
    position:relative;
    width: 100%;
    min-height: 90vh;
    padding-right: 100px;
    padding-left: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--quaternary);
}

.login-box {
    width: 700px;
    text-align: center;
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 2%;
    background: var(--background);
    padding-top: 50px;
    padding-bottom: 50px;
    h1{
        font-size: 40px;
        font-weight: 700;
        color: var(--tertiary);
        margin-bottom: 2px;
    }
    .textbox{
        position: relative;
        margin-top: 40px;
        p{
            font-size: 25px;
            color:var(--tertiary);
        }
        input{
            width: 500px;
            height: 40px;
            border: var(--secondary);
            border-bottom: 1px solid var(--secondary);
            background: transparent;
            outline: none;
            font-size:100%;
            
        }
    }
    button{
        background: var(--tertiary);
        color: var(--background);
        width: 500px;
        height: 60px;
        border: none;
        margin-top: 40px;
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 30px;
        font-weight: 600;
        cursor: pointer;
        &:hover{
            background: var(--secondary);
            color: var(--background);
        }
        .text-button{
            color: var(--background);
            text-decoration-line: none;
        }
    }
    .text-register{
        font-weight: 700;
        color: var(--secondary);
        text-decoration-line: none;
    }
}
</style>