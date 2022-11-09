import {
    champions,
    pegarUsuario,
    dadosDoUsuario,
    campeoesMaisJogados,
    backgroundImagem
} from "../../script/api.js"




async function searchUser() {
    const select = document.querySelector("select")

    const regiaoValue = document.querySelector(".login__button")
    regiaoValue.addEventListener("click", event => {
        event.preventDefault()
        const regiaoPesquisada = select.value
        localStorage.setItem("regiao", regiaoPesquisada)
        loadSummonerInfo()
    })


    regiaoValue.addEventListener("click", async event => {
        const usuarioPesquisado = document.querySelector(".input")
        event.preventDefault()
        const regiao = localStorage.getItem("regiao")
        pegarUsuario(regiao, usuarioPesquisado.value)
        //console.log(await pegarUsuario(regiao, usuarioPesquisado.value))
        console.log(await campeoesMaisJogados())

    })

}
searchUser()

async function loadSummonerInfo(){
    const regiao = localStorage.getItem("regiao")
    const summonerId = localStorage.getItem("user:ID")

    //console.log(await dadosDoUsuario(summonerId))
    console.log(await campeoesMaisJogados(summonerId))
}


openSearch()

export async function gerarBackground(){
    const campeoes = await campeoesMaisJogados()
    const MaisJogado =  campeoes[0]
   
    champions.forEach(async element =>{
        if(element.key == MaisJogado.championId){
            const background = element.name
            const baseUrl = await backgroundImagem(background)
           
            await renderizarBackground(baseUrl)
            
        }
        
        
    });
}

async function renderizarBackground(base){
    const baseBackground = document.querySelector(".wallpaper")
    const url = await base
    
    
    baseBackground.style.backgroundImage = `url("${url}")`
    

}

