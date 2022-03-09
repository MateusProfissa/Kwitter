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

function addUser() {
    var nome_user = document.getElementById("user_name").value;
    firebase.database().ref("/").child(nome_user).update({
        purpose: "Adicionando Nome do Usuário"
    });
}