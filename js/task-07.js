const sizeControl = document.querySelector('input#font-size-control')
const textSpan = document.querySelector('span#text')


sizeControl.addEventListener('input', (event) => {
    textSpan.style = `font-size:${event.currentTarget.value}px`
})