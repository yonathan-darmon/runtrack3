<?php
session_start();
if (isset($_POST['log'])) {
    $log = $_POST['log'];
    $bdd = new PDO("mysql:host = localhost ; dbname=utilisateurs", 'root', '');
    $var = $bdd->prepare("SELECT * FROM utilisateurs WHERE nom='$log'");
    $var->execute();
    $result = $var->fetch();
    var_dump($result);
    if (empty($result)) {
        echo "<h1>Vous n'etes pas inscrit</h1>";

    } else {
        $json = json_encode($result);
        var_dump($json);
        $_SESSION['nom'] = $log;
        header('location:index.php');
    }
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
<form id="connect">
    <label for="log">Log</label>
    <input type="text" id="log" name="log">
    <label for="pass">pass</label>
    <input type="text" id="pass" name="pass">
    <button id="connection">login</button>
</form>
</body>
</html>

