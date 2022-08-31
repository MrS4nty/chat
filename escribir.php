<?php

$file = file_get_contents("chat.txt");

$mensaje = "<b>".$_POST['usuario']." dice ".$_POST['mensaje']."<br>";

$file = file_put_contents("chat.txt", $file.$mensaje)

?>