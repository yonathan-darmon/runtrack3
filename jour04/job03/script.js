jQuery(document).ready(function ($) {
        function jsonValueKey(type, string) {
            let arrayType = []
            let final = []
            for (var k in string) {
                for (var i in string[k].type) {
                    if (arrayType.includes(string[k].type[i]) == false) {
                        arrayType.push(string[k].type[i])
                        $('select').append('<option value=' + string[k].type[i] + '>' + string[k].type[i] + '</option>')

                    }
                }
            }
        }

        fetch('pokemon.json')
            .then(response => response.json())
            .then(data => {

                jsonValueKey("type", data)

            })
        let select = document.querySelector('select')
        $('#filtrer').click(function () {
            fetch('pokemon.json')
                .then(response =>response.json())
                .then(data=>{
                    for (let i=0;i<data.length;i++){
                        console.log(data)
                    }
                })
        })


    }
)