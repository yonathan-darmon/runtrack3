<?php
session_start();
if(isset($_SESSION['id'])){
echo'<p></p>';
}else{
    echo"<a href='inscription.php'>Inscription</a>";
    echo"<a href='connexion.php'>Connexion</a>";
}
?>
