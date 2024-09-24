document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Impede o envio padrão do formulário
    window.location.href = "../index.html"; // Redireciona para prod.html
    const email = document.getElementById("email").value;
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const endereco = document.getElementById("endereco").value;
    const alergia = document.getElementById("alergia").value;
    const historia = document.getElementById("historia").value;
    const password = document.getElementById("password").value;
    
    if (!email || !password || !nome || !telefone || !endereco || !alergia || !historia) {
        alert("Preencha todos os campos!");
        event.preventDefault(); // Impede o envio do formulário
    }
});