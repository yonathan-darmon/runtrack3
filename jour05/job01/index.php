<?php
session_start();
?>
<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
    <title>Document</title>
</head>
<body>

<h1 class="hidden"></h1>

    <a href="#" id="inscription">Inscription</a>
    <a href="#" id="connexion">Connexion</a>
    <form method="post" id="form" class="hidden">
        <label for="nom">Nom</label>
        <input type="text" id="nom" name="nom" required>
        <label for="prenom">Prenom</label>
        <input type="text" name="prenom" id="prenom"required>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required>
        <label for="password">Password</label>
        <input type="text" name="password" id="password"required>
        <label for="passwordverify">password verify</label>
        <input type="password" name="passwordverify" id="passwordverify">
        <button type="submit" name="valider" id="valider" >Valider</button>
    </form>

    <form method="post" id="connect" class="hidden">
        <label for="log">Log</label>
        <input type="text" name="log" id="log">
        <label for="pass">Pass</label>
        <input type="text" name="pass" id="pass">
        <input type="submit" value="connection">
    </form>
<p></p>
</body>
</html>
