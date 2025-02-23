/**
 * Função para enviar os dados do formulário de cadastro e enviar um e-mail
 * @returns {boolean} - Retorna false para evitar o comportamento padrão do formulário
 */
function cadastrar() {
    // Chama a função para desabilitar o botão de cadastro e ocultar a mensagem de erro
    aguardar();

    // Cria um objeto URLSearchParams com os dados do formulário
    var formulario = new URLSearchParams(new FormData(form_cadastro));

    // Envia os dados do formulário para a rota /send/email usando o método POST
    fetch("/send/email", {
        method: "POST",
        body: formulario
    }).then(function (response) {
        // Se a resposta for bem-sucedida, redireciona para a página index.html
        if (response.ok) {
            alert('Contato enviado com sucesso! Verifique seu e-mail.');
            window.location.href = 'index.html';
        } else {
            // Se ocorrer um erro, exibe a mensagem de erro no console e na página
            console.log('Erro de cadastro!');
            response.text().then(function (resposta) {
                div_erro.innerHTML = resposta;
            });
            // Chama a função para reabilitar o botão de cadastro e exibir a mensagem de erro
            finalizar_aguardar();
        }
    });

    // Retorna false para evitar o comportamento padrão do formulário
    return false;
}

/**
 * Função para desabilitar o botão de cadastro e ocultar a mensagem de erro
 */
function aguardar() {
    btn_cadastro.disabled = true;
    p4_mensagem.style.display = 'none';
}

/**
 * Função para reabilitar o botão de cadastro e exibir a mensagem de erro
 */
function finalizar_aguardar() {
    btn_cadastro.disabled = false;
    p4_mensagem.style.display = 'block';
}