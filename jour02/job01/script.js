document.addEventListener('DOMContentLoaded',() => {
    function citation(){
        const citation = document.getElementById('citation')
        console.log(citation.innerHTML)
    }
   const bouton = document.querySelector('#button')

    bouton.addEventListener("click", (e)=>{
        citation()

    })
})