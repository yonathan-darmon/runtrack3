document.addEventListener("DOMContentLoaded", (event) => {

    function myFunction(item, index) {
        text += index + ": " + item + "<br>";
    }
    function lol() {
        fetch('users.php')
            .then((response) => response.json())
            .then((response) => {
                    let parent = document.querySelector('tbody')
                    // for (var i in response) {
                    //     let tr = document.createElement('tr')
                    //     parent.appendChild(tr)
                        response.forEach(element=>{
                            let tr = document.createElement('tr')
                            parent.appendChild(tr)
                            Object.keys(element).forEach(key => {
                                let td = document.createElement('td')
                                tr.appendChild(td)
                                td.append(element[key])

                                console.log(key, element[key]);
                            });
                        })

                        // for (var j in response[i]) {
                        //     let td = document.createElement('td')
                        //     tr.appendChild(td)
                        //     td.append(response[i]['id'])
                        //     td.append(response[i]['nom'])
                        //     td.append(response[i]['prenom'])
                        //     td.append(response[i]['email'])
                        // }
                    // }
                }
            )
    }

    var bouton = document.getElementById('update')
    bouton.addEventListener('click', function () {
        lol()
    })

})
