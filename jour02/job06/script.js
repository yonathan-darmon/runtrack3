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
        ArrowLeft: 'left',
        ArrowUp: 'up',
        ArrowRight: 'right',
        ArrowDown: 'down',
        a: 'a',
        b: 'b'
    }

    let konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a']

    let konamiCodePosition = 0;

    document.addEventListener('keydown', function (e) {
        var key = allowedKeys[e.key]
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