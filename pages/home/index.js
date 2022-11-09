import {
    pegarUsuario,
    dadosDoUsuario,
    campeoesMaisJogados
} from "../../script/api.js"




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
        pegarUsuario(regiao, usuarioPesquisado.value)


    })

}
searchUser()


function openSearch() {
    const btnSearch = document.getElementById("buttonSearch")
    const menuSearch = document.querySelector(".login__search")

    btnSearch.addEventListener("click", () => {
        menuSearch.classList.toggle("abrir")
       
        btnSearch.classList.toggle("text__white")

        if (btnSearch.classList.contains("text__white")) {
            btnSearch.src = "../../assets/Vector (8).png"
        } else {
            btnSearch.src = "../../assets/Vector (9).png"
        }
    })
}

openSearch()