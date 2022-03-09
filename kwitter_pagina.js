const firebaseConfig = {
    apiKey: "AIzaSyB9A23R8VcGFWDjvJ7RGB4LEbfvcYfSm5o",
    authDomain: "kwitter-projeto.firebaseapp.com",
    databaseURL: "https://kwitter-projeto-default-rtdb.firebaseio.com",
    projectId: "kwitter-projeto",
    storageBucket: "kwitter-projeto.appspot.com",
    messagingSenderId: "990216717235",
    appId: "1:990216717235:web:dd46d730389383f6cd81c6"
  };  
firebase.initializeApp(firebaseConfig);

var nome_usuario = localStorage.getItem("usuario_nome");
var nome_sala = localStorage.getItem("nome_sala");

function enviar() {
    var mensagem = document.getElementById("mensagem").value;
    firebase.database().ref(nome_sala).push({
        name: nome_usuario,
        message: mensagem,
        like: 0
    });
    document.getElementById("mensagem").value = " ";
}

function getdados() {
    firebase.database().ref("/").on("value",function (snapshot) {
        document.getElementById("salas").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          childDado = childKey.val();
          if (childKey != "purpose") {
                var mensagem_id = childKey;
                var mensagem_dado = childDado;

                console.log(mensagem_id);
                console.log(mensagem_dado);

                name = mensagem_dado["name"];
                message = mensagem_dado["message"];
                like = mensagem_dado["like"];

                nome_tag = "<h4>" + name + "<img class='usuario_tag' src='tick.png'> </h4>";
                mensagem_tag = "<h4 class='mensagem_tag'>" + message + "</h4>";
                botão_like = "<button class='btn btn-warning' id=" + mensagem_id + "value=" + like + "onclick='atualizar_like(this.id)'>";
                icone_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like:" + like + "</span> </button> <hr>";

                row = nome_tag + mensagem_tag + botão_like + icone_tag;
                document.getElementById("salas").innerHTML += row;
          }
       });
     });
}
getdados();

function atualizar_like(mensagem_id_like) {
    console.log("Botão de Like pressionado" + mensagem_id_like);   
    botao_id = mensagem_id_like;   
    likes = document.getElementById(botao_id).value;
    likes_atualizados = Number(likes) + 1;
    console.log(likes_atualizados);

    firebase.database().ref(nome_sala).child(mensagem_id_like).update({
        like: likes_atualizados
    });
}

function logout() {
    localStorage.removeItem("usuario_nome");
    localStorage.removeItem("nome_sala");
    window.location = "kwitter.html";
}
