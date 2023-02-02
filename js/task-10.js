const amountInput = document.querySelector('#controls input')
const boxes = document.querySelector('div#boxes')
const createBoxesBtn = document.querySelector('button[data-create]')
const destroyBoxesBtn = document.querySelector('button[data-destroy]')


createBoxesBtn.addEventListener('click', () => {
  createBoxes(amountInput.value)
})

destroyBoxesBtn.addEventListener('click', () => {
  boxes.innerHTML = ''
})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function createBoxes(amount) {
  let s = 30;
  let el = '';
  for (let i = 1; i <= amount; i += 1) {
    const itemColor = getRandomHexColor()
    el = `<div style="background-color: ${itemColor}; width: ${s}px; height: ${s}px; display: inline-block; margin: 5px"> `
    console.log(el)
    boxes.insertAdjacentHTML('beforeend', el)
    s += 10;
  }
}
