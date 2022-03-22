<?php
?>
<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script src="script.js"></script>
    <title>Document</title>
</head>
<body>
<header>
    <nav class="blue">
        <div class="nav-wrapper">
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="index.php">Accueil</a></li>
                <li><a href="index.php">Inscription</a></li>
                <li><a href="index.php">Connexion</a></li>
                <li><a href="index.php">Rechercher</a></li>
            </ul>
        </div>
    </nav>
</header>
<section>
    <div class="container">
        <form action="#" class="row">
            <p class="col s6">
                <label>
                    <input class="with-gap" name="group3" type="radio" checked/>
                    <span>M</span>
                </label>
            </p>
            <p class="col s6 ">
                <label>
                    <input class="with-gap " name="group3" type="radio" checked/>
                    <span>Mme</span>
                </label>
            </p>
            <div class="row">
                <i class="material-icons  medium col s1 " style="margin-top: 15px">add</i>
                <div class="input-field col s4 " >
                    <input id="first_name" type="text" class="validate">
                    <label for="first_name"> First Name</label>
                </div>
                <i class="material-icons  medium col s1 " style="margin-top: 15px">add</i>
                <div class="input-field col s4">
                    <input id="last_name" type="text" class="validate">
                    <label for="last_name">Last Name</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="adresse" type="text" class="validate">
                    <label for="adresse">Adresse</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6">
                    <input id="email" type="email" class="validate">
                    <label for="email">email</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6">
                    <input id="password" type="password" class="validate">
                    <label for="password">password</label>
                </div>
                <div class="input-field col s6">
                    <input id="passwordverify" type="password" class="validate">
                    <label for="passwordverify">passwordverify</label>
                </div>
            </div>
            <div class="row">
                <p class="col s3">
                    <label>
                        <input type="checkbox"/>
                        <span>Informatique</span>
                    </label>
                </p>
                <p class="col s3">
                    <label>
                        <input type="checkbox"/>
                        <span>Voyages</span>
                    </label>
                </p>
                <p class="col s3">
                    <label>
                        <input type="checkbox"/>
                        <span>Sport</span>
                    </label>
                </p>
                <p class="col s3">
                    <label>
                        <input type="checkbox"/>
                        <span>lecture</span>
                    </label>
                </p>
                <div class="row">
                    <div class="input-field col s6">
                        <input id="submit" type="submit" class="validate">
                    </div>
                </div>
            </div>
        </form>
    </div>
</section>
<footer>
    <div class="row blue">
        <ul>
            <li class="col offset-s2 s4"><a class="white-text" href="index.php">Accueil</a></li>
            <li class="col offset-s2 s4"><a class="white-text" href="index.php">Inscription</a></li>
            <li class="col offset-s2 s4"><a class="white-text" href="index.php">Connexion</a></li>
            <li class="col offset-s2 s4"><a class="white-text" href="index.php">Rechercher</a></li>
        </ul>
    </div>
</footer>
</body>
</html>
