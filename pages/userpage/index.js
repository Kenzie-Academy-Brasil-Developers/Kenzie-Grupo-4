export function mostrarButtons() {
    const imgMenu = document.querySelector(".img__menu")
    const btns = document.querySelector(".div__btnJogar")

    imgMenu.addEventListener("click", () => {
        btns.classList.toggle("abrir")

        imgMenu.classList.toggle("text__white")

        
        if (imgMenu.classList.contains("text__white")) {
            imgMenu.src = "../../assets/Vector (9).png"
        } else {
            imgMenu.src = "../../assets/Vector (8).png"
        }
    })
}

mostrarButtons()