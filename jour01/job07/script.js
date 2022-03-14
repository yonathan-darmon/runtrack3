var date = '';

function jourtravaille(date) {
    var newdate = new Date(date);
    var jourferie = ['2020-01-01', '2020-04-13', '2020-05-01', '2020-05-08', '2020-05-21', '2020-06-01', '2020-07-14', '2020-08-15', '2020-11-01', '2020-12-25'];
    for (var i = 0; i <= jourferie[i].length; i++) {
        if (date == jourferie[i]) {
            console.log(newdate.toLocaleString('fr',{ day:"2-digit",month:"long",year:'numeric'}), ' est un jour férié')
        } else if ((newdate.getDay() == 0) || (newdate.getDay() == 6)) {
            console.log('Non,' , newdate.toLocaleString('fr',{ day:"2-digit",month:"long",year:'numeric'}), 'est un weekend')
        }
        else{
            console.log('Oui',newdate.toLocaleString('fr',{ day:"2-digit",month:"long",year:'numeric'}),'est un jour travaillé')
        }
    }

}

jourtravaille('2022-03-12');