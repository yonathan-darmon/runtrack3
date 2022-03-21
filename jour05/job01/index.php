<?php
session_start();
if(isset($_SESSION['nom'])){
echo'<p>Bonjour '.$_SESSION['nom'].'</p>';
}else{
    echo"<a href='inscription.php'>Inscription</a>";
    echo"<a href='connexion.php'>Connexion</a>";
}
?>
