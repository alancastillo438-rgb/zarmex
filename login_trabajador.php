<?php
session_start();
require 'conexion_trabajadores.php';

/* SI ENTRAN DIRECTO SIN FORM, REDIRIGIR */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header("Location: login_trabajador.html");
    exit;
}

$usuario  = $_POST['usuario'] ?? '';
$password = $_POST['password'] ?? '';

$sql = $conexion->prepare(
    "SELECT id, password FROM trabajadores WHERE usuario = ?"
);
$sql->bind_param("s", $usuario);
$sql->execute();
$resultado = $sql->get_result();

if ($resultado->num_rows === 1) {
    $trabajador = $resultado->fetch_assoc();

    if (password_verify($password, $trabajador['password'])) {
        $_SESSION['trabajador_id'] = $trabajador['id'];
        $_SESSION['trabajador_usuario'] = $usuario;

        header("Location: trabajadores.php");
        exit;
    } else {
        echo "❌ Contraseña incorrecta";
    }
} else {
    echo "❌ Usuario no encontrado";
}
