import {
    champions,
    pegarUsuario,
    dadosDoUsuario,
    campeoesMaisJogados,
    backgroundImagem
} from "../../script/api.js"
import { renderModal } from "../../script/render.js"




async function searchUser() {
    const select = document.querySelector("select")

    const regiaoValue = document.querySelector(".login__button")
    regiaoValue.addEventListener("click", event => {
        event.preventDefault()
        const regiaoPesquisada = select.value
        localStorage.setItem("regiao", regiaoPesquisada)
        
    })


    regiaoValue.addEventListener("click", async event => {
        const usuarioPesquisado = document.querySelector(".input")
        event.preventDefault()
        const regiao = localStorage.getItem("regiao")
        const usuario = pegarUsuario(regiao, usuarioPesquisado.value)

    })

}
searchUser()

export async function loadSummonerInfo(account){
    const regiao = localStorage.getItem("regiao")
    const summonerId = localStorage.getItem("user:ID")
    
    const summoner = await dadosDoUsuario(regiao, summonerId)
    
    const mostPlayed = await campeoesMaisJogados(summonerId)

    const card = await renderModal(summoner, account, champions, mostPlayed)
    
    const section = document.querySelector(".wallpaper")
    section.innerHTML = ''
    section.appendChild(card)

   
}


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


function darkMode() {
    const btnDarkMode = document.getElementById("darkMode")
    const html = document.querySelector("html")

    btnDarkMode.addEventListener("click", () => {
        html.classList.toggle("dark__mode")
        btnDarkMode.classList.toggle("text__white")

        const darkPref = localStorage.getItem("darkmode")
        if (!darkPref) {
            localStorage.setItem("darkmode", true)
        }

        if (darkPref) {
            localStorage.removeItem("darkmode")
        }


        if (btnDarkMode.classList.contains("text__white")) {
            btnDarkMode.src = "../../assets/sun.png"
        } else {
           btnDarkMode.src = "../../assets/moon.png"
        }
    })
}
darkMode()



