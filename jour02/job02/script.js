document.addEventListener('DOMContentLoaded', () => {
    function showhide() {
        let article=document.querySelector('article')
        if (article ==null){
            let newNode = document.createElement("article")
            let parentElt = document.querySelector('body')
            let theFirstChild = parentElt.firstChild
            parentElt.insertBefore(newNode, theFirstChild)
            document.querySelector('article').innerHTML = "L'important n'est pas la chute, mais l'atterrissage"
        }
        else {
            article.remove()
        }

    }

        let bouton = document.querySelector('#button')
        bouton.addEventListener("click", (e) => {
            showhide()
        })
    }

)