var annee;

function bisextille(annee) {

    if ((annee % 4 == 0) && (annee % 100 != 0)) {
        return console.log("true");
    }
    else if((annee % 4 == 0) && (annee % 100 == 0) && (annee % 400 == 0))
    {
        return console.log("true");

    }else    {
        return  console.log("false");
    }
}

bisextille(2020);