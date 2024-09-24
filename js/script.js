document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Impede o envio padrão do formulário
    window.location.href = "html/prod.html"; // Redireciona para prod.html
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (!email || !password) {
        alert("Preencha todos os campos!");
        event.preventDefault(); // Impede o envio do formulário
    }
});
