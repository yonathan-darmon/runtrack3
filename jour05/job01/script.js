document.addEventListener("DOMContentLoaded", (event) => {
    let nom = document.getElementById('nom')
    let prenom = document.getElementById('prenom')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let regexLowerCase = /[a-z]+/;
    let regexChiffre = /[0-9]+/
    let regexUpperCase = /[A-Z]+/;
    let regexMail = /.+\@.+\..+/;
    let classp = document.querySelector("p")

    nom.addEventListener('keyup', function () {
        if (regexLowerCase.test(this.value) == false || regexUpperCase.test(this.value) == false) {
            if (classp.innerHTML.length == 0) {
                classp.innerHTML = "Votre nom doit contenir une minuscule et une majuscule"
            }
        } else {
            classp.innerHTML = ""
        }

    })
    prenom.addEventListener('keyup', function () {
        if (regexLowerCase.test(this.value) == false || regexUpperCase.test(this.value) == false) {
            if (classp.innerHTML.length == 0) {
                classp.innerHTML = "Votre prenom doit contenir une minuscule et une majuscule"
            }
        } else {
            classp.innerHTML = ""
        }

    })
    email.addEventListener('keyup', function () {
        if (regexMail.test(this.value) == false ) {
            if (classp.innerHTML.length == 0) {
                classp.innerHTML = "Votre adresse mail est incorect"
            }
        } else {
            classp.innerHTML = ""
        }

    })

    password.addEventListener('keyup', function () {
        console.log(password.value)

        if (regexUpperCase.test(this.value) == false || regexLowerCase.test(this.value)== false || regexChiffre.test(this.value)==false  ) {
            if (classp.innerHTML.length == 0) {
                classp.innerHTML = "Votre mot de passe doit contenir au moins Une majuscule, une minuscule et un chiffre"
            }
        } else {
            classp.innerHTML = ""
        }

    })

})