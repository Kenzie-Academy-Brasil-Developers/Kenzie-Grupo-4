import {gerarBackground} from "../pages/home/index.js"

const riotToken = "RGAPI-e983e846-96c4-42a6-ac1f-55e513264c13"
const respchampion = await fetch("../../json/champion.json")
export const champions = await respchampion.json()



export async function pegarUsuario(regiao,usuario){
    const response = await fetch(`https://${regiao}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${usuario}?api_key=${riotToken}`)
    const perfilUsuario = await response.json()
    localStorage.setItem("user:ID", perfilUsuario.id)
    localStorage.setItem("user:PUUID", perfilUsuario.puuid)
    localStorage.setItem("user:Icon", perfilUsuario.profileIconId)
    
    gerarBackground()
    
    
    return perfilUsuario
}


export async function dadosDoUsuario(){
    
    const idUser = localStorage.getItem("user:ID")
    const regiao = localStorage.getItem("regiao")
  
    const response = await fetch(`https://${regiao}.api.riotgames.com/lol/league/v4/entries/by-summoner/${idUser}?api_key=${riotToken}`)
    const informacoesDoUsuario = await response.json()
    
    
    return informacoesDoUsuario
}

export async function campeoesMaisJogados(){
    const idUser = localStorage.getItem("user:ID")
    const regiao = localStorage.getItem("regiao")
    const response = await fetch(`https://${regiao}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${idUser}/top?api_key=${riotToken}`)
    const campeoes = await response.json()
    
    return campeoes
}

export async function iconeDoUsuario(){
    const icon = localStorage.getItem("user:Icon")

    const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/12.21.1/img/profileicon/${icon}.png`)
    const Iconusuario = await response
   
    
    return Iconusuario.url
}

export async function backgroundImagem(nome){
    const nomeTratato = nome.trim()
    const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${nomeTratato}_0.jpg`)
    const imagem =  response
    
    return imagem.url
}