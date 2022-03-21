document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('connect')
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const myform = new FormData(form);
        fetch('connexion.php', {
            method: 'POST',
            body: myform
        }).then(response => response.text())
            .then(data => {
                var err = document.createElement('p')
                err.innerHTML=data
                document.body.append(err)
            })


    })
// let form = document.getElementById('form')
// let nom = document.getElementById('nom')
// let prenom = document.getElementById('prenom')
// let email = document.getElementById('email')
// let password = document.getElementById('password')
// let passVerif = document.getElementById('passwordverify')
// let regexLowerCase = /[a-z]+/;
// let regexChiffre = /[0-9]+/
// let regexUpperCase = /[A-Z]+/;
// let regexMail = /.+\@.+\..+/;
// let classp = document.querySelector("p")
// let valPass = ''
// let button = document.getElementById('valider')
// nom.addEventListener('keyup', function () {
//     if (regexLowerCase.test(this.value) == false || regexUpperCase.test(this.value) == false) {
//         if (classp.innerHTML.length == 0) {
//             classp.innerHTML = "Votre nom doit contenir une minuscule et une majuscule"
//         }
//     } else {
//         classp.innerHTML = ""
//
//
//     }
//
// })
//
// prenom.addEventListener('keyup', function () {
//     if (regexLowerCase.test(this.value) == false || regexUpperCase.test(this.value) == false) {
//         if (classp.innerHTML.length == 0) {
//             classp.innerHTML = "Votre prenom doit contenir une minuscule et une majuscule"
//         }
//     } else {
//         classp.innerHTML = ""
//
//     }
//
// })
// email.addEventListener('keyup', function () {
//     if (regexMail.test(this.value) == false) {
//         if (classp.innerHTML.length == 0) {
//             classp.innerHTML = "Votre adresse mail est incorect"
//         }
//     } else {
//         classp.innerHTML = ""
//
//     }
// })
// password.addEventListener('keyup', function () {
//     if (regexUpperCase.test(this.value) == false || regexLowerCase.test(this.value) == false || regexChiffre.test(this.value) == false) {
//         if (classp.innerHTML.length == 0) {
//             classp.innerHTML = "Votre mot de passe doit contenir au moins Une majuscule, une minuscule et un chiffre"
//         }
//
//     } else {
//         classp.innerHTML = ""
//         password.addEventListener('focusout', function () {
//             valPass = this.value
//         })
//     }
// })
// passVerif.addEventListener('keyup', function () {
//     if (valPass != this.value) {
//         if (classp.innerHTML.length == 0) {
//             classp.innerHTML = 'Erreur de confirmation de mot de passe'
//         }
//     } else {
//         classp.innerHTML = ""
//     }
// })
//
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const formData = new FormData(form.value)
//     console.log(formData)
//
//     fetch('inscription.php', {
//         method: 'POST',
//         body: formData
//     }).then(function (response) {
//         return response.text()
//     }).then(function (text) {
//         console.log(text)
//     }).catch(function (err) {
//         console.error(err)
//     })
//
// })
//

})