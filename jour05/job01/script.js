document.addEventListener("DOMContentLoaded", () => {
    var h1 = document.querySelector('h1')
    let inscription = document.getElementById('inscription');
    let connexion = document.getElementById('connexion')
    let formInscri = document.getElementById('form')
    let formConnect = document.querySelector('#connect')
    let button = document.querySelector('#connect [type="submit"]')
    let nom = document.getElementById('nom')
    let prenom = document.getElementById('prenom')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let passVerif = document.getElementById('passwordverify')
    let regexLowerCase = /[a-z]+/;
    let regexChiffre = /[0-9]+/
    let regexUpperCase = /[A-Z]+/;
    let regexMail = /.+\@.+\..+/;
    let classp = document.querySelector("p")
    let valPass = ''
    inscription.addEventListener('click', function (e) {
        e.preventDefault();
        formInscri.classList.toggle('hidden')
        inscription.classList.toggle('hidden')
        connexion.classList.toggle('hidden')
    })
    connexion.addEventListener('click', function (e) {
        e.preventDefault();
        formConnect.classList.toggle('hidden')
        inscription.classList.toggle('hidden')
        connexion.classList.toggle('hidden')
    })

    button.addEventListener('click', function (e) {

        e.preventDefault();

        console.log(formConnect)

        var myform = new FormData(formConnect);


        fetch('connexion.php', {
            method: 'POST',
            body: myform
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                if (data['code'] == 66) {
                    h1.append(data['erreur'])
                    h1.classList.toggle('hidden')
                    formConnect.classList.toggle('hidden')
                    formInscri.classList.toggle('hidden')
                } else if (data['code'] == 10) {
                    formConnect.classList.toggle('hidden')
                    h1.append('Bienvenue ' + '' + data['reussite'])
                    h1.classList.toggle('hidden')
                }

            })


    })

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
        if (regexMail.test(this.value) == false) {
            if (classp.innerHTML.length == 0) {
                classp.innerHTML = "Votre adresse mail est incorect"
            }
        } else {
            classp.innerHTML = ""

        }
    })
    password.addEventListener('keyup', function () {
        if (regexUpperCase.test(this.value) == false || regexLowerCase.test(this.value) == false || regexChiffre.test(this.value) == false) {
            if (classp.innerHTML.length == 0) {
                classp.innerHTML = "Votre mot de passe doit contenir au moins Une majuscule, une minuscule et un chiffre"
            }

        } else {
            classp.innerHTML = ""
            password.addEventListener('focusout', function () {
                valPass = this.value
            })
        }
    })
    passVerif.addEventListener('keyup', function () {
        if (valPass != this.value) {
            if (classp.innerHTML.length == 0) {
                classp.innerHTML = 'Erreur de confirmation de mot de passe'
            }
        } else {
            classp.innerHTML = ""
        }
    })

    formInscri.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(formInscri)
        fetch('inscription.php', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                    if (data['code'] == 10) {
                        formInscri.classList.toggle('hidden')
                        formConnect.classList.toggle('hidden')
                    }
                }
            )
    })

})