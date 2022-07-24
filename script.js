

// let check = function() {
//     const password = document.getElementById('password')
//     const confirmPassword = document.getElementById('confirmPassword')
//     if (password.textContent === confirmPassword.textContent) {
//         console.log('they work yall')
//     } else {
//         console.log('not same')
//     }

    

// }

const submitButton = document.getElementById('submitButton')
const resetButton = document.getElementById('resetButton')



const form = document.querySelector('form')

form.addEventListener('submit', () => {
    const password = document.getElementById('password')
    const confirmPassword = document.getElementById('confirmPassword')
    if (password.value === confirmPassword.value) {
        console.log('passwords are same')
    } else {
        console.log('passwords are not same')
    }
})

