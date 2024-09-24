<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    $history = htmlspecialchars($_POST['history']);

    // Aqui você pode adicionar a lógica para salvar os dados ou verificar login
    echo "Email: $email<br>";
    echo "Senha: $password<br>";
    echo "História: $history<br>";
}
?>
