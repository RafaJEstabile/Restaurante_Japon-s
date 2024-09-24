<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $telefone = htmlspecialchars($_POST['telefone']);
    $endereco = htmlspecialchars($_POST['endereco']);
    $alergia = htmlspecialchars($_POST['alergia']);
    $historia = htmlspecialchars($_POST['historia']);
    $password = htmlspecialchars($_POST['password']);

    // Aqui você pode adicionar a lógica para salvar os dados ou verificar login
    echo "Nome: $nome<br>";
    echo "Email: $email<br>";
    echo "Telefone: $telefone<br>";
    echo "Endereco: $endereco<br>";
    echo "Alergia: $alergia<br>";
    echo "História: $historia<br>";
    echo "Senha: $password<br>";
}
?>