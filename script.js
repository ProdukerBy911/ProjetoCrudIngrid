// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    // Simulação de autenticação simples
    if(username === "admin" && password === "1234") {
        alert('Login bem-sucedido!');
        errorMsg.textContent = "";
        // Redirecionar ou outra lógica
    } else {
        errorMsg.textContent = "Usuário ou senha incorretos.";
    }
});