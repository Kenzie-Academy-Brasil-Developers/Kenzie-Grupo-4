import { loadSummonerInfo } from "../pages/home/index.js"
import { iconeDoUsuario } from "./api.js"

export async function renderModal(summoner, account, champions, mostPlayedChampions){
    const userIcon = await iconeDoUsuario()
    const accountInfo = await account
    const queueSolo = summoner.findIndex(element => element.queueType === 'RANKED_SOLO_5x5')

    const wins =  summoner[queueSolo].wins
    const losses =  summoner[queueSolo].losses
    const winRate = (wins / ((wins + losses))*100).toFixed(2)
    let championsMastery = mostPlayedChampions.map(champion => champion.championPoints)
    
    
    const modal = document.createElement("div")
    
        const modalPerfil = document.createElement("div")
        const modalPerfilImg = document.createElement("div")
        const modalImg = document.createElement("img")
        const modalLevel = document.createElement("p")
        const modalNick = document.createElement("p")

        const modalCard = document.createElement("div")
            const modalDescription = document.createElement("div")
                const championsDiv = document.createElement("div")
                    const modalRank = document.createElement("div")
                        const modalRankTitle = document.createElement("p")
                        const modalRankImg = document.createElement("img")
                        const modalRankPoints = document.createElement("p")

                const modalWinrate = document.createElement("div")
                    const modalWinrateTitle = document.createElement("p")
                    const modalWinrateP = document.createElement("p")

                const modalChampions = document.createElement("div")
                    const modalChampionsTitle = document.createElement("p")
                    const modalChampionsUl = document.createElement("ul")
                        
                    
                    mostPlayedChampions.forEach(playedChampions => {
                                champions.forEach(champion =>{
                                    
                                    if(champion.key == Number(playedChampions.championId)){
                                    
                                    
                                        const modalChampionsLi = document.createElement("li")
                                        const modalChampionsImg = document.createElement("img")
                                        const modalChampionsMaestry = document.createElement("p")
                                        const modalChampionsName = document.createElement("p")
        
                                        modalChampionsName.innerText = champion.name
                                        
                                        modalChampionsMaestry.innerText = playedChampions.championPoints.toLocaleString("pt-br")
                                        modalChampionsMaestry.classList.add("modal__champions__maestry")
        
                                        modalChampionsImg.src = champion.icon
                                        modalChampionsImg.classList.add("modal__champions__img")
                                        modalChampionsImg.alt = champion.name
        
                                        modalChampionsLi.classList.add("modal__champions__li")
                                        modalChampionsLi.append(modalChampionsMaestry, modalChampionsImg,modalChampionsName)
        
                                        modalChampionsUl.appendChild(modalChampionsLi)
                                    }
                                })
                                
                                
                            });
                            

modalChampionsUl.classList.add("modal__champions__ul")

modalChampionsTitle.classList.add("modal__champions__title")
modalChampionsTitle.innerText = "Campeões com mais maestria"

modalChampions.classList.add("modal__champions")
modalChampions.append(modalChampionsTitle, modalChampionsUl)


modalWinrateTitle.innerText = "Winrate"
modalWinrateTitle.classList.add("modal__winrate__title")
modalWinrateP.innerText = `${winRate} %`
modalWinrateP.classList.add("modal__winrate__p")                   
modalWinrate.classList.add("modal__winrate")
modalWinrate.append(modalWinrateTitle, modalWinrateP)

//CORRIGIR DETALHES: imagem de elo, tratamento do texto para pt-br
modalRankPoints.innerText = `${summoner[queueSolo].tier} ${summoner[queueSolo].rank} - ${summoner[queueSolo].leaguePoints} PDL`
modalRankPoints.classList.add("modal__rank__points")
modalRankImg.src = `../../assets/ranked-emblems/${summoner[queueSolo].tier}.png`
modalRankImg.classList.add("modal__rank__img")
modalRankTitle.innerText = "Ranqueada Solo"
modalRankTitle.classList.add("modal__rank__title")
modalRank.classList.add("modal__rank")
modalRank.append(modalRankTitle,modalRankImg,modalRankPoints)

championsDiv.append(modalRank, modalWinrate)
championsDiv.classList.add("champions")

modalDescription.append(championsDiv, modalChampions)
modalDescription.classList.add("modal__description")

modalCard.append(modalDescription, modalChampions)
modalCard.classList.add("modal__card")

modalNick.innerText = summoner[queueSolo].summonerName
modalNick.classList.add("modal__nick")
modalLevel.innerText = accountInfo.summonerLevel
modalLevel.classList.add("modal__level")

modalImg.src = userIcon
modalImg.alt = "Icone de invocador"
modalImg.classList.add("modal__img")
modalPerfilImg.classList.add("modal__perfil__img")
modalPerfilImg.append(modalImg, modalLevel, modalNick)

modalPerfil.appendChild(modalPerfilImg)
modalPerfil.classList.add("modal__perfil")

modal.append(modalPerfil, modalCard)
modal.classList.add("modal")

return modal



    
    
}