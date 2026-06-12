/**
 * Sensus Gestão - Validação de Autenticação
 * Verifica o preenchimento de campos obrigatórios no front-end.
 */
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const userField = document.getElementById('userInput');
    const passField = document.getElementById('passInput');
    let isValid = true;

    if (!userField.value.trim()) {
        userField.classList.add('error-input');
        isValid = false;
    } else {
        userField.classList.remove('error-input');
    }

    if (!passField.value.trim()) {
        passField.classList.add('error-input');
        isValid = false;
    } else {
        passField.classList.remove('error-input');
    }

    if (!isValid) {
        alert('Por favor, preencha os campos obrigatórios para fazer login.');
    } else {
        window.location.href = 'pages/dashboard.html';
    }
});