<?php

$bdd = new PDO("mysql:host = localhost ; dbname=utilisateurs", 'root', '');
function  select(){
    $bdd = new PDO("mysql:host = localhost ; dbname=utilisateurs", 'root', '');
    $var =$bdd->prepare('SELECT * FROM utilisateurs');
    $var->execute();
    $result = $var->fetchall(PDO::FETCH_ASSOC);
    $json = json_encode($result);
}
function insert($nom,$prenom,$email,$password){
    $bdd = new PDO("mysql:host = localhost ; dbname=utilisateurs", 'root', '');
    $var=$bdd->prepare('INSERT INTO utilisateurs(nom,prenom,email,password) VALUES (?,?,?,?)');
    $var->execute(array($nom,$prenom,$email,$password));
}