<template>
    <div class="home-doctor">
        <MenubarMedical />
        <div class="body">
            <div class="messages">
                    <div class="messages-header">
                        <h1>Consultas</h1>
                        <p>12 de 15 mensajes</p>
                    </div>
                    <div class="all-messages">
                        <div class="message">
                            <div class="message-header">
                                <h2>Pedro Jimenez</h2>
                                <h3>10:43AM</h3>
                            </div>
                            <div class="message-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            </div>
                        </div>
                        <div class="message">
                            <div class="message-header">
                                <h2>Maria Hernandez</h2>
                                <h3>10:42AM</h3>
                            </div>
                            <div class="message-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            </div>
                        </div>
                        <div class="message">
                            <div class="message-header">
                                <h2>Francisca Ordoñez</h2>
                                <h3>10:40AM</h3>
                            </div>
                            <div class="message-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            </div>
                        </div>
                        <div class="message">
                            <div class="message-header">
                                <h2>Fernando Villegas</h2>
                                <h3>10:38AM</h3>
                            </div>
                            <div class="message-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            </div>
                        </div>
                        <div class="message">
                            <div class="message-header">
                                <h2>Arnold Chavez</h2>
                                <h3>10:38AM</h3>
                            </div>
                            <div class="message-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            </div>
                        </div>
                        <div class="message">
                            <div class="message-header">
                                <h2>Nicol Zarate</h2>
                                <h3>10:37AM</h3>
                            </div>
                            <div class="message-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            </div>
                        </div>
                        <div class="message">
                            <div class="message-header">
                                <h2>Natalia Salas</h2>
                                <h3>10:30AM</h3>
                            </div>
                            <div class="message-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            </div>
                        </div>
                        <div class="message">
                            <div class="message-header">
                                <h2>Maria Hernandez</h2>
                                <h3>10:27AM</h3>
                            </div>
                            <div class="message-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            </div>
                        </div>
                        <div class="message">
                            <div class="message-header">
                                <h2>Francisca Ordoñez</h2>
                                <h3>10:23AM</h3>
                            </div>
                            <div class="message-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            </div>
                        </div>
                        <div class="message">
                            <div class="message-header">
                                <h2>Luis Jimenez</h2>
                                <h3>10:21AM</h3>
                            </div>
                            <div class="message-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            </div>
                        </div>
                        <div class="message">
                            <div class="message-header">
                                <h2>Rooberto Cardenas</h2>
                                <h3>10:17AM</h3>
                            </div>
                            <div class="message-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            </div>
                        </div>
                        <div class="message-active">
                            <div class="message-header">
                                <h2>Luciana Torres</h2>
                                <h3>10:15AM</h3>
                            </div>
                            <div class="message-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            </div>
                        </div>
                    </div>

            </div>
            <div class="conversation">
                <div class="conversation-header">
                    <h1>Chat</h1>
                    <h2><b>Paciente: </b>Pedro Jimenez</h2>
                    <h2><b>Tiempo: </b>03:33min de 15min</h2>
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
    import MenubarMedical from '/GitHub/-PPC_G1_2022-2_Frontend/src/components/MenubarMedical.vue'


</script>

<style lang="scss">
    .body{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .messages{
            position: relative;
            width: 25%;
            height: 100%;
            
            .messages-header{
                position: relative;
                width: 100%;
                height: 80px;
                background: var(--quaternary);
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0rem 1rem 0rem 1rem;
                h1{
                    font-size: 30px;
                    font-weight: 600;
                    color: var(--background);
                    margin: 1.5rem 1rem 1.5rem 0rem;
                }
                p{
                    font-size: 20px;
                    font-weight: 500;
                    color: var(--background);
                    margin: 1.5rem 0rem 1.5rem 1rem;
                }
            }
            .all-messages{
                position: relative;
                width: 100%;
                height: 81.1vh;
                overflow-y: scroll;
                .message{
                    position: relative;
                    width: 100%;
                    height: 100px;
                    background: #fff;
                    padding: 1.2rem 0rem 1.2rem 0rem;
                    border-top: 0.1px ridge var(--dark);
                    border-bottom: 0.1px groove var(--dark);
                    cursor: pointer;
                    .message-header{
                        position: relative;
                        width: 100%;
                        height: 30%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        h2{
                            font-size: 20px;
                            font-weight: 600;
                            color: var(--primary);
                            padding: 0rem 0.5rem 0.5rem 1rem;
                        }
                        h3{
                            font-size: 18px;
                            font-weight: 500;
                            color: var(--primary);
                            padding: 0rem 1rem 0.5rem 0.5rem;
                        }
                    }
                    .message-body{
                        position: relative;
                        width: 100%;
                        height: 70%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        p{
                            font-size: 17px;
                            font-weight: 400;
                            color: var(--dark);
                            padding: 0 1rem 0rem 1rem;
                        }
                    }
                }
                .message-active{
                    position: relative;
                    width: 100%;
                    height: 100px;
                    background: rgb(228, 228, 228);
                    padding: 1.2rem 0rem 1.2rem 0rem;
                    border-top: 0.1px ridge var(--dark);
                    border-bottom: 0.1px groove var(--dark);
                    .message-header{
                        position: relative;
                        width: 100%;
                        height: 30%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        h2{
                            font-size: 20px;
                            font-weight: 600;
                            color: var(--primary);
                            padding: 0rem 0.5rem 0.5rem 1rem;
                        }
                        h3{
                            font-size: 18px;
                            font-weight: 500;
                            color: var(--primary);
                            padding: 0rem 1rem 0.5rem 0.5rem;
                        }
                    }
                    .message-body{
                        position: relative;
                        width: 100%;
                        height: 70%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        p{
                            font-size: 17px;
                            font-weight: 400;
                            color: var(--dark);
                            padding: 0 1rem 0rem 1rem;
                        }
                    }
                }
            }
        }

        .conversation{
            position: relative;
            width: 75%;
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
                    #patient{
                        font-size: 20px;
                        font-weight: 500;
                        color: #fff;
                        margin: 1.2rem 50rem 1.2rem 4rem;
                    }
                    #medical{
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
                }
            }
        }
    }
    
</style>