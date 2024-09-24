function pegarInformacoes(event) {
    event.preventDefault();

    var nome = document.getElementById("name");
    console.log(nome)
    var email = document.getElementById("email");
    console.log(email)
    var message = document.getElementById("message");
    console.log(message)

    function validaCampo(elemento) {
        if (elemento.value == "") {
            alert("Preencha o campo corretamente")
            elemento.style.borderColor = "Red"
        }
    }
    validaCampo(nome);
    validaCampo(email);
    validaCampo(message);

    var comentario = `
    <div class="comentario-item">
        <span>${nome.value} - <strong>${email.value}</strong></span>
        <p>${message.value}</p>
</div>`;
    document.getElementById("comentarios").innerHTML += comentario;

    console.log(nome.value)
    console.log(email.value)
    console.log(message.value)

    nome.value = "";
    email.value = "";
    message.value = "";
    
}

function capturarTecla(event) {
    if (event.key == "Enter") {
        pegarInformacoes(event);
    }
}

function verificarDisabled() {
    var nome = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (nome !== "" && email !== "" && message !== "") {
        document.getElementById("enviar").disabled = false;
    } else {
        document.getElementById("enviar").disabled = true;
    }
}