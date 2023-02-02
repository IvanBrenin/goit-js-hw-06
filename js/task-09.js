function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body')
const spanColor = document.querySelector('.widget .color')
const changeColorBtn = document.querySelector('.widget .change-color')

changeColorBtn.addEventListener('click', () => {
  const hexColor = getRandomHexColor()
  body.style = `background-color: ${hexColor}`
  spanColor.textContent = hexColor
})