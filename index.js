function logarUsuario() {
    var conteudo = document.getElementById("conteudo");
    limparMensagemErro();

    var botaoLogin = document.getElementById("login");

    var paragrafoCampoObrigatorioSenha = document.createElement("p");
    paragrafoCampoObrigatorioSenha.id = "paragrafoCampoObrigatorioSenha";
    var pText = document.createTextNode("Campo obrigatório!");
    paragrafoCampoObrigatorioSenha.appendChild(pText);
    paragrafoCampoObrigatorioSenha.classList.add("msgErro");

    var paragrafoCampoObrigatorioMatricula = document.createElement("p");
    var pText2 = document.createTextNode("Campo obrigatório!");
    paragrafoCampoObrigatorioMatricula.id = "paragrafoCampoObrigatorioMatricula";
    paragrafoCampoObrigatorioMatricula.appendChild(pText2);
    paragrafoCampoObrigatorioMatricula.classList.add("msgErro");

    var paragrafoCampoInvalido = document.createElement("p");
    paragrafoCampoInvalido.id = "paragrafoCampoInvalido";
    var pText3 = document.createTextNode("Matricula/senha incorretos!");
    paragrafoCampoInvalido.appendChild(pText3);
    paragrafoCampoInvalido.classList.add("msgErro");

    var matricula = document.getElementById("matricula");
    var senha = document.getElementById("senha");

    if (matricula.value == "") {
        conteudo.insertBefore(paragrafoCampoObrigatorioMatricula, matricula.nextSibling);
    } else if (matricula.value != "123456") {
        conteudo.insertBefore(paragrafoCampoInvalido, botaoLogin.nextSibling);
    }

    if (senha.value == "") {
        conteudo.insertBefore(paragrafoCampoObrigatorioSenha, senha.nextSibling);
    } else if (senha.value != "123456") {
        conteudo.insertBefore(paragrafoCampoInvalido, botaoLogin.nextSibling);
    }

    if (senha.value == "123456" && matricula.value == "123456") {
        alert("Seja bem vindo!");
        senha.value = "";
        matricula.value = "";
        limparMensagemErro();
    }
}

function limparMensagemErro() {
	var conteudo = document.getElementById("conteudo");
    var msgErroCampoObrigatorioSenha = document.getElementById("paragrafoCampoObrigatorioSenha");
    var msgErroCampoObrigatorioMatricula = document.getElementById("paragrafoCampoObrigatorioMatricula");
    var msgErroCampoInvalido = document.getElementById("paragrafoCampoInvalido");

    if (msgErroCampoObrigatorioSenha != null) {
        conteudo.removeChild(msgErroCampoObrigatorioSenha);
    }

    if (msgErroCampoObrigatorioMatricula != null) {
        conteudo.removeChild(msgErroCampoObrigatorioMatricula);
    }

    if (msgErroCampoInvalido != null) {
        conteudo.removeChild(msgErroCampoInvalido);
    }
}