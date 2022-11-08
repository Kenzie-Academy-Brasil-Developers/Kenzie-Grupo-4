import {pegarUsuario, dadosDoUsuario, campeoesMaisJogados} from "../../script/api.js"

async function procurarUsuario(){
    const form = document.querySelector(".formProcurarUsuario")
    form.addEventListener("submit", event =>{
        const usuarioPesquisado = document.querySelector(".usuario")
        event .preventDefault()
        pegarUsuario(usuarioPesquisado.value)
        dadosDoUsuario()
        campeoesMaisJogados()
    })

}
procurarUsuario()