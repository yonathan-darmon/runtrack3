document.addEventListener('DOMContentLoaded', () => {
    function cheatcode() {
        let main = document.querySelector('main')
        if (main == null) {
            let newNode = document.createElement("main")
            let parentElt = document.querySelector('body')
            let theFirstChild = parentElt.firstChild
            parentElt.insertBefore(newNode, theFirstChild)
            document.querySelector('main').innerHTML = "Vive La Plateforme_"
        }
    }

    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        65: 'a',
        66: 'b'
    }

    let konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a']

    let konamiCodePosition = 0;

    document.addEventListener('keydown', function (e) {
        var key = allowedKeys[e.keyCode]
        var requiredKey = konamiCode[konamiCodePosition]

        if (key == requiredKey) {

            konamiCodePosition++

            if (konamiCodePosition == konamiCode.length) {
                cheatcode()
                konamiCodePosition = 0
            }
        } else {
            konamiCodePosition = 0
        }
    })
})