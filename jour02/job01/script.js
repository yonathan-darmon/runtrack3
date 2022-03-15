document.addEventListener('DOMContentLoaded',() => {
    function citation(){
        let citation = document.getElementById('citation')
        console.log(citation.innerHTML)
    }
   let bouton = document.querySelector('#button')

    bouton.addEventListener("click", (e)=>{
        citation()

    })
})