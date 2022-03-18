<?php
function insert($nom,$prenom,$email,$password){
    $bdd = new PDO("mysql:host = localhost ; dbname=utilisateurs", 'root', '');
    $var=$bdd->prepare('INSERT INTO utilisateurs(nom,prenom,email,password) VALUES (?,?,?,?)');
    $var->execute(array($nom,$prenom,$email,$password));
}
?>
<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script type="text/javascript" src="script.js"></script>
    <title>Document</title>
</head>
<body>
<form action="#" method="post">
    <label for="nom">Nom</label>
    <input type="text" id="nom" required>
    <label for="prenom">Prenom</label>
    <input type="text" id="prenom"required>
    <label for="email">Email</label>
    <input type="email" id="email" required>
    <label for="password">Password</label>
    <input type="text" id="password"required>
    <label for="passwordverify">password verify</label>
    <input type="password" id="passwordverify">
    <input type="submit" name="valider" value="valider">


</form>
<p class="red"></p>

</body>
</html>
