const inputForm = document.querySelector('.login-form')

inputForm.addEventListener('submit', (event) => {
    event.preventDefault()
    if (event.currentTarget.elements.email.value === '' || event.currentTarget.elements.password.value === '') {
        window.alert('Всі поля мають бути заповнені')
    } else {
        const result = { email: event.currentTarget.elements.email.value, password: event.currentTarget.elements.password.value }
        console.log(result);
    }
    inputForm.reset()
})
