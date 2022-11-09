function renderModal(summoner, account, champions){
    const wins = summoner[1].wins
    const losses =summoner[1].losses
    const winRate = (wins + losses) / wins
    
    const modal = document.createElement("div")
    
        const modalPerfil = document.createElement("div")
        const modalPerfilImg = document.createElement("div")
        const modalImg = document.createElement("img")
        const modalLevel = document.createElement("p")
        const modalNick = document.createElement("p")

        const modalCard = document.createElement("div")
            const modalDescription = document.createElement("div")
                const champions = document.createElement("div")
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
                        
                    
                            // champions.forEach(champion => {
                            //     const modalChampionsLi = document.createElement("li")
                            //     const modalChampionsImg = document.createElement("img")
                            //     const modalChampionsMaestry = document.createElement("p")
                            //     const modalChampionsName = document.createElement("p")

                            //     modalChampionsName.innerText = champion
                            // });
                            

modalChampionsUl.classList.add("modal__champions__ul")

modalChampionsTitle.classList.add("modal__champions__title")
modalChampionsTitle.innerText = "Campeões com mais maestria"

modalChampions.classList.add("modal__champions")
modalChampions.append(modalChampionsTitle, modalChampionsUl)


modalWinrateTitle.innerText = "Winrate"
modalWinrateTitle.classList.add("modal__winrate__title")
modalWinrateP.innerText = winRate
modalWinrateTitle.classList.add("modal__winrate__p")                   
modalWinrate.classList.add("modal__winrate")
modalWinrate.append(modalWinrateTitle, modalWinrateP)

//CORRIGIR DETALHES: imagem de elo, tratamento do texto para pt-br
modalRankPoints.innerText =`${summoner[1].tier} ${summoner[1].rank} - ${summoner[1].leaguePoints} PDL`
modalRankPoints.classList.add("modal__rank__points")
modalRankImg.src = "../../assets/908f95127caf7f739877f9f555807361.png"
modalRankImg.classList.add("modal__rank__img")
modalRankTitle.innerText = summoner[1].queueType
modalRankTitle.classList.add("modal__rank__title")
modalRank.classList.add("modal__rank")
modalRank.append(modalRankTitle,modalRankImg,modalRankPoints)

champions.append(modalRank, modalWinrate)
champions.classList.add("champions")

modalDescription.appendChild(champions)
modalDescription.classList.add("modal__description")

modalCard.append(modalDescription, modalChampions)
modalCard.classList.add("modal__card")

modalNick.innerText = summoner[1].summonerName
modalNick.classList.add("modal__nick")
modalLevel.innerText = account.summonerLevel
modalLevel.classList.add("modal__level")
//CORRIGIR ICONE DE INVOCADOR
modalImg.src = "../../assets/PERFIL.jpg"
modal.alt = "icone invocador"
modal.classList.add("modal__img")
modalPerfilImg.classList.add("modal__perfil__img")
modalPerfilImg.append(modalImg, modalLevel, modalNick)

modalPerfil.appendChild(modalPerfilImg)
modalPerfil.classList.add("modal__perfil")

modal.appendChild(modalPerfil, modalCard)
modal.classList.add("modal")

return modal



    
    
}