function validar_form_contato(){
    var nome = formcontato.nome.value;
    var email = formcontato.email.value;
    var assunto = formcontato.assunto.value;
    var message = formcontato.message.value;

    if (nome == ""){
        alert("Campo nome Obrigatório!");
        formcontato.nome.focus();
        return false;
    }
    if (email == ""){
        alert("Campo email Obrigatório!");
        formcontato.email.focus();
        return false;
    }
    if (assunto == ""){
        alert("Campo assunto Obrigatório!");
        formcontato.assunto.focus();
        return false;
    }
    if (message == ""){
        alert("Campo mensagem Obrigatório!");
        formcontato.message.focus();
        return false;
    }
}

