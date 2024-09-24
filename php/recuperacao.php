<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Captura o email do formulário
    $email = htmlspecialchars($_POST['email']);

    // Aqui você implementaria a lógica de envio de e-mail de recuperação.
    // Simulando o envio de e-mail
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Simulação de envio de e-mail
        // Normalmente, você usaria mail() ou uma biblioteca como PHPMailer aqui para enviar o e-mail de verdade.
        
        echo "<h2>Uma mensagem de recuperação foi enviada para o seu email: $email</h2>";
    } else {
        echo "<h2>Email inválido. Por favor, insira um email válido.</h2>";
    }
}
?>
