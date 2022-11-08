import {pegarUsuario, dadosDoUsuario, campeoesMaisJogados} from "../../script/api.js"

    


async function searchUser(){
    const select = document.querySelector("select")

    const regiaoValue = document.querySelector(".login__button")
    regiaoValue.addEventListener("click", event =>{
        event.preventDefault()
        const regiaoPesquisada = select.value
        localStorage.setItem("regiao", regiaoPesquisada)
    })
    
    
    regiaoValue.addEventListener("click",async  event =>{
        const usuarioPesquisado = document.querySelector(".input")
        event.preventDefault()
        const regiao = localStorage.getItem("regiao")
        pegarUsuario(regiao, usuarioPesquisado.value)
        
        
    })

}
searchUser()



