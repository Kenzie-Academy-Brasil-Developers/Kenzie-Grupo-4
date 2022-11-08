const riotToken = "RGAPI-cc42de6f-7158-4605-be70-6d5b8b7a1dee"
const respchampion = await fetch("../../json/champion.json")
const champions = await respchampion.json()
console.log(champions)


export async function pegarUsuario(regiao,usuario){
    const response = await fetch(`https://${regiao}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${usuario}?api_key=${riotToken}`)
    const perfilUsuario = await response.json()
    localStorage.setItem("user:ID", perfilUsuario.id)
    console.log(perfilUsuario)
    return perfilUsuario
}


export async function dadosDoUsuario(){
    
    const idUser = localStorage.getItem("user:ID")
  
    const response = await fetch(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${idUser}?api_key=${riotToken}`)
    const informacoesDoUsuario = await response.json()
    console.log(informacoesDoUsuario)
    return informacoesDoUsuario
}

export async function campeoesMaisJogados(){
    const idUser = localStorage.getItem("user:ID")
    const response = await fetch(`https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${idUser}/top?api_key=${riotToken}`)
    const campeoes = await response.json()
    console.log(campeoes)
    return campeoes
}
