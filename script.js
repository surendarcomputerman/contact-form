let submitBtn = document.querySelector('.submits-btn')
let errMsg = document.querySelectorAll('.err-msg')
let input = document.querySelectorAll('input')
let email = document.querySelector('#email')
let success = document.querySelector('.success-container')

    errMsg.forEach(err => {
        err.style.display = 'none'
    })

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

submitBtn.addEventListener('click', () => {
   const filtered = Array.from(input).filter(data => {
       return data.value.trim() === ''
    })
    

    if (filtered.length > 0) {
        let hasError = false
        Array.from(input).forEach((inputField, index) => {
            if (inputField.value.trim() === '') {
                errMsg[index].style.display = 'block'
                hasError = true
            }
            else if(inputField.type === 'email' || inputField.id === 'email') {
                const checkEmail = emailRegex.test(email)
                if (!checkEmail) {
                    errMsg[index].style.display = 'block'
                    hasError = true
                }
            }

        })
    }
    else{
        success.style.display = 'block'
        filtered
    }
})