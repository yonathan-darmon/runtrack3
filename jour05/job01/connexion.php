<?php
session_start();
if (isset($_POST['log'])) {
    $log = $_POST['log'];
    $bdd = new PDO("mysql:host = localhost ; dbname=utilisateurs", 'root', '');
    $var = $bdd->prepare("SELECT * FROM utilisateurs WHERE nom='$log'");
    $var->execute();
    $result = $var->fetch();
    if (empty($result)) {

        echo json_encode([
            "code"=>66,
            "erreur" =>'Vous n\'etes pas inscrit'
        ]);

    } else {
        echo json_encode([
            "code"=>10,
            "reussite"=>$result['nom']
        ]);
    }
}
?>


