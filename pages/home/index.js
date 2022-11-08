import {pegarUsuario, dadosDoUsuario, campeoesMaisJogados} from "../../script/api.js"

    


async function procurarUsuario(){
    const form = document.querySelector(".formProcurarUsuario")

    
    const regiaoValue = document.querySelector(".regiao")
    regiaoValue.addEventListener("change", event =>{
        event.preventDefault()
        const regiaoPesquisada = regiaoValue.value
        localStorage.setItem("regiao", regiaoPesquisada)
        
    })
    
    
    form.addEventListener("submit",async  event =>{
        const usuarioPesquisado = document.querySelector(".usuario")
        event.preventDefault()
        const regiao = localStorage.getItem("regiao")
        
        pegarUsuario(regiao, usuarioPesquisado.value)
        
        
    })

}
procurarUsuario()



