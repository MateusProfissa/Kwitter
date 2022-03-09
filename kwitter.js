function addusuario() {
    var usuario_nome = document.getElementById("usuario").value;
    localStorage.setItem("usuario_nome", usuario_nome);

    window.location = "kwitter_sala.html";
    console.log("Adicionando Usuário");
}