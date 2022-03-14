var nombre1 = '';
var nombre2 = '';

function nombrepremier(nombre) {
    if (nombre < 2) {
        return false;
    }
    for (var i = 2; i < nombre; i++) {
        if (nombre % i == 0) return false;

        else {
            return true
        }
    }

}

function sommenombrespremiers(nombre1, nombre2) {
    if (nombrepremier(nombre1) != false && nombrepremier(nombre2) != false) {
        var somme = nombre1 + nombre2;
        return console.log(somme)
    } else {
        console.log('un des nombre pas premier');
    }

}

sommenombrespremiers(2, 5);