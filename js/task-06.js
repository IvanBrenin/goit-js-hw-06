const inputForm = document.querySelector('#validation-input')

inputForm.addEventListener('focus', (event) => {
    event.currentTarget.classList.remove('valid')
    event.currentTarget.classList.remove('invalid')
})

inputForm.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length != event.currentTarget.dataset.length) {
        event.currentTarget.classList.add('invalid')
    } else {event.currentTarget.classList.add('valid')}
})
