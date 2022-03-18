jQuery(document).ready(function ($) {
    function jsonValueKey(key, string) {
        for (var k in string) {
            console.log(string[key])
        }
    }

    jsonValueKey('creation', {
            "name": "La Plateforme_",
            "address": "8 rue d'hozier",
            "city": "Marseille",
            "nb_staff": "11",
            "creation": "2019"
        })
    })
