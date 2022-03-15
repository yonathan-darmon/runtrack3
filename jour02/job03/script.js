document.addEventListener('DOMContentLoaded', () => {
        function addone() {

            let val = document.getElementById("compteur").innerHTML;
            document.getElementById("compteur").innerHTML = ++val;
        }

        let bouton = document.querySelector('#button')
        bouton.addEventListener("click", (e) => {
            addone()
        })
    }
)