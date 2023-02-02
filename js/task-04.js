let counterValue = document.querySelector('#counter #value')
const countBtnIncrement = document.querySelector('[data-action = "increment"]')
const countBtnDecrement = document.querySelector('[data-action = "decrement"]')
counterValue.textContent = 0
countBtnIncrement.addEventListener('click', () => {
    counterValue.textContent = Number(counterValue.textContent) + 1
})
countBtnDecrement.addEventListener('click', () => {
    counterValue.textContent -= 1
})