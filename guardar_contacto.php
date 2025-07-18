<?php
$conexion = new mysqli("localhost", "root", "", "tienda_deportiva");

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

$sql = "INSERT INTO contacto (nombre, correo, mensaje) VALUES ('$nombre', '$correo', '$mensaje')";

if ($conexion->query($sql) === TRUE) {
    echo "Mensaje enviado correctamente.";
} else {
    echo "Error: " . $conexion->error;
}

$conexion->close();
?>
