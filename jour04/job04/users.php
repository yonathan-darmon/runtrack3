<?php

$bdd = new PDO("mysql:host = localhost ; dbname=utilisateurs", 'root', '');

$var =$bdd->prepare('SELECT * FROM utilisateurs');
$var->execute();
$result = $var->fetchall(PDO::FETCH_ASSOC);
$json = json_encode($result);
echo $json;