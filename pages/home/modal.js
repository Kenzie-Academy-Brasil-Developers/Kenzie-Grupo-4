const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login__button');

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {
  if (target.value === '') {
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
  }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));


const modalCard = (element) => {
  const section = document.querySelector(".wallpaper")
  const modal = document.createElement("div")
  const modalPerfil = document.createElement("div")
  const modalPerfilImg = document.createElement("div")
  const modalImg = document.createElement("img")
  const modalLevel = document.createElement("p")
  const modalText = document.createElement("div")
  const modalNick = document.createElement("p")
  const modalRank = document.createElement("div")
  const modalPoints = document.createElement("p")
  const modalRankLogo = document.createElement("div")
  const modalCard = document.createElement("div")
  const modalDescriptions = document.createElement("div")
  const modalChampions = document.createElement("div")
  const modalChampionsTitle = document.createElement("p")
  const modalUl = document.createElement("ul")
  const modalLi = document.createElement("li")
  const modalChampionsImg = document.createElement("img")
  const modalMaestry = document.createElement("p")
  const modalWinrate = document.createElement("div")
  const modalWinrateTitle = document.createElement("p")
  const modalWinrateP = document.createElement("p")

  modal.classList.add(".modal")
  modalPerfil.classList.add("modal__perfil")
  modalPerfilImg.classList.add("modal__perfil__img")
  modalImg.classList.add("modal__img")
  modalLevel.classList.add("modal__level")
  modalText.classList.add("modal__text")
  modalNick.classList.add("modal__nick")
  modalRank.classList.add("modal__rank")
  modalPoints.classList.add("modal__rank__poinst")







}