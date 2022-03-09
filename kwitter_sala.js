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
  document.getElementById("nome_usuario").innerHTML = "Bem Vindo(a) " + nome_usuario + "!";

  function addsala() {
    var nome_sala = document.getElementById("nome_sala").value;
    firebase.database().ref("/").child(nome_sala).update({
    purpose: "Adicionando Nome da Sala"
    });
    localStorage.setItem("nome_sala" , nome_sala);
    window.location = "kwitter_pagina.html";
  }
  
  function redirecionar_sala(nome) {
    localStorage.setItem("nome_sala" , nome_sala);
    window.location = "kwitter_pagina.html";
  }

  function getdados() {
    firebase.database().ref("/").on("value",function (snapshot) {
      document.getElementById("salas").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        roomNames = childKey;
        console.log("Nome da Sala: " + roomNames);
        row = "<div class='nome_sala_html' id="+roomNames+" onclick='redirecionar_sala(this.id)' > #"+roomNames+"</div> <hr>";
        document.getElementById("salas").innerHTML += row;
     });
   });
  }

  getdados();

  function logout() {
    localStorage.removeItem("usuario_nome");
    localStorage.removeItem("nome_sala");
    window.location = "kwitter.html";
  }

