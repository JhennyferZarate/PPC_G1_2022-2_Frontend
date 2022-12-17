<template>
    <div class="home-doctor">
        <MenubarPatient />
        <div class="body-patient-chat">
            <div class="chat">
                <div class="conversation-header">
                    <h1>Chat</h1>
                    <div class="info-doc">
                        <h2><b>Doctor: </b>Francisco Suarez</h2>
                        <p>Medicina General</p>
                    </div>
                    <h2><b>Tiempo: </b>03:33min de 15min</h2>
                    <button>Terminar conversación</button>
                </div>
                <div class="conversation-body">
                    <div class="messagesList">
                        <p id="patient"><b>🤒 Paciente: </b> Hola Doc, tengo un problema</p>
                        <p id="medical"><b>👨🏻‍⚕ Médico: </b>Hola, coméntame</p>
                </div> 
                </div>
                <div class="conversation-response">
                    <input type="text" placeholder="Escribe tu respuesta">
                    <button>Enviar</button>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup>
    import MenubarPatient from '/GitHub/-PPC_G1_2022-2_Frontend/src/components/MenubarPatient.vue'


</script>

<style lang="scss">
    .body-patient-chat{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .chat{
            position: relative;
            width: 100%;
            height: 100%;
            .conversation-header{
                position: relative;
                width: 100%;
                height: 80px;
                background: var(--primary);
                display: flex;
                justify-content: space-between;
                align-items: center;
                h1{
                    font-size: 30px;
                    font-weight: 700;
                    color: #fff;
                    margin-left: 3rem;
                }
                h2{
                    font-size: 20px;
                    font-weight: 500;
                    color: #fff;
                    margin-right: 3rem;
                }
                .info-doc{
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    h2{
                        font-size: 20px;
                        font-weight: 500;
                        color: #fff;
                    }
                    p{
                        font-size: 15px;
                        font-weight: 500;
                        color: #fff;
                    }
                }
                button{
                    position: relative;
                    width: 14%;
                    height: 70%;
                    margin-right: 3rem;
                    border: none;
                    outline: none;
                    background: rgb(126, 5, 5);
                    border-radius: 5px;
                    font-size: 20px;
                    font-weight: 500;
                    color: #fff;
                    cursor: pointer;
                }
            }
            .conversation-body{
                position: relative;
                width: 100%;
                height: 73.2vh;
                background: var(--dark);
                border-top: 0.1px ridge var(--dark);
                border-bottom: 0.1px groove var(--dark);
                overflow-y: scroll;
                .messagesList{
                    #medical{
                        font-size: 20px;
                        font-weight: 500;
                        color: #fff;
                        margin: 1.2rem 50rem 1.2rem 4rem;
                    }
                    #patient{
                        font-size: 20px;
                        font-weight: 500;
                        text-align: right;
                        color: #fff;
                        margin: 1.2rem 4rem 1.2rem 50rem;
                    }
                        
                }
            }
            .conversation-response{
                position: relative;
                width: 100%;
                height: 8vh;
                background: #fff;
                border-radius: 0px 0px 5px 5px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                input{
                    position: relative;
                    width: 80%;
                    height: 80%;
                    margin-left: 3rem;
                    border: none;
                    outline: none;
                    font-size: 20px;
                    font-weight: 500;
                    color: #000;
                }
                button{
                    position: relative;
                    width: 10%;
                    height: 80%;
                    margin-right: 3rem;
                    border: none;
                    outline: none;
                    background: var(--primary);
                    border-radius: 5px;
                    font-size: 20px;
                    font-weight: 500;
                    color: #fff;
                    cursor: pointer;
                }
            }
        }
    }
    
</style>