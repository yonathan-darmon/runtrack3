<?php
session_start();
function  select(){
    $bdd = new PDO("mysql:host = localhost ; dbname=utilisateurs", 'root', '');
    $var =$bdd->prepare('SELECT * FROM utilisateurs');
    $var->execute();
    $result = $var->fetchall(PDO::FETCH_ASSOC);
    $json = json_encode($result);
}
?>
<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="script.js"></script>
    <title>Document</title>
</head>
<body>

</body>
</html>

