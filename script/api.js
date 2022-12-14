import {gerarBackground, loadSummonerInfo} from "../pages/home/index.js"

const riotToken = "RGAPI-f47907e1-123a-4d36-881a-2f7b15f16189"
const respchampion = await fetch("../../json/champion.json")
const champions = await respchampion.json()


async function pegarUsuario(regiao,usuario){
    const response = await fetch(`https://${regiao}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${usuario}?api_key=${riotToken}`)
    const perfilUsuario = await response.json()
    localStorage.setItem("user:ID", perfilUsuario.id)
    localStorage.setItem("user:PUUID", perfilUsuario.puuid)
    localStorage.setItem("user:Icon", perfilUsuario.profileIconId)
    
    gerarBackground()
    await loadSummonerInfo(perfilUsuario)
   
    return perfilUsuario
}

async function dadosDoUsuario(){
    
    const idUser = localStorage.getItem("user:ID")
    const regiao = localStorage.getItem("regiao")
  
    const response = await fetch(`https://${regiao}.api.riotgames.com/lol/league/v4/entries/by-summoner/${idUser}?api_key=${riotToken}`)
    const informacoesDoUsuario = await response.json()
    
    
    return informacoesDoUsuario
}

async function campeoesMaisJogados(){
    const idUser = localStorage.getItem("user:ID")
    const regiao = localStorage.getItem("regiao")
    const response = await fetch(`https://${regiao}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${idUser}/top?api_key=${riotToken}`)
    const campeoes = await response.json()
    
    return campeoes
}

async function iconeDoUsuario(){
    const icon = localStorage.getItem("user:Icon")

    const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/12.21.1/img/profileicon/${icon}.png`)
    const Iconusuario = response
   
    
    return Iconusuario.url
}

async function backgroundImagem(nome){

    const tratado = nome.replace(/ /g,'');

    const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${tratado}_0.jpg`)
    const imagem =  response
    
    return imagem.url
}

export { champions, pegarUsuario, dadosDoUsuario, campeoesMaisJogados, iconeDoUsuario, backgroundImagem}

