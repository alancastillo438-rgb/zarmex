<?php
session_start();

if (!isset($_SESSION['usuario_id'])) {
    header("Location: sesion.html");
    exit;
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfil de Usuario</title>

    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style5.css">
</head>

<body>

<header>
    <h1 class="logo">
        <img src="https://www.zarmexoficial.com/imagenes/1742439791_Captura%20de%20pantalla%202025-01-19%20134751.png"
             alt="Zarmex Logo">
    </h1>
<nav class="nav-links">
    <a href="inicio.html">Inicio</a>
    <a href="productos.html">Productos</a>


    <div class="dropdown">
        <a href="#" class="dropdown-btn">Servicios ▾</a>
        <div class="dropdown-content">
            <a href="mantenimiento.html">Mantenimiento</a>
            <a href="reparacion.html">Reparación</a>
        </div>
    </div>

    <a href="nosotros.html">Nosotros</a>
    <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
    <a href="logout.php">cerrar sesion</a>
</nav>
</header>
<center>
<h2>Bienvenido <?php echo $_SESSION['username']; ?></h2>

<p>Este es tu perfil de usuario</p>
</center>
</body>
</html>
