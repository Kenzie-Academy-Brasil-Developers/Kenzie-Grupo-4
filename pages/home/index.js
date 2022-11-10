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


<<<<<<< HEAD
// function openSearch() {
//     const btnSearch = document.getElementById("buttonSearch")
//     const menuSearch = document.querySelector(".login__search")

//     btnSearch.addEventListener("click", (event) => {
//         event.preventDefault()
//         menuSearch.classList.toggle("abrir")
       
//         btnSearch.classList.toggle("text__white")

<<<<<<< HEAD
//         if (btnSearch.classList.contains("text__white")) {
//             btnSearch.src = "../../assets/Vector (9).png"
//         } else {
//             btnSearch.src = "../../assets/Vector (8).png"
//         }
//     })
// }
// openSearch()
=======
        if (btnSearch.classList.contains("text__white")) {
            btnSearch.src = "../../assets/Vector (8).png"
        } else {
            btnSearch.src = "../../assets/Vector (9).png"
        }
    })
}



openSearch()
=======

>>>>>>> develop

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
<<<<<<< HEAD
>>>>>>> d43698d73bdee9c1d31a347778678f48e16936b9
=======


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


>>>>>>> develop
