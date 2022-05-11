
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyDzZkcC54v4hobLcc3yShw4ciO4YxbSRYA",
  authDomain: "kwitter-e0e03.firebaseapp.com",
  databaseURL: "https://kwitter-e0e03-default-rtdb.firebaseio.com",
  projectId: "kwitter-e0e03",
  storageBucket: "kwitter-e0e03.appspot.com",
  messagingSenderId: "1046336563094",
  appId: "1:1046336563094:web:65c5f8fe79b7d2c3229fb7",
  measurementId: "G-VJKEN74XFY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("UserNme");
console.log(user_name)
document.getElementById("user_name").innerHTML = " welcome " +user_name
function addroom() {
  Room_names = document.getElementById("Roome_name").value;
  firebase.database().ref("/").child(Room_names).update({
    purpose : "adding room"

  });
  localStorage.setItem("Room_names". Room_names);
  window.location = "kwitterpage.html";
}
function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
    window.location="kwitter_page.html";
    localStorage.setItem("room_name",name);
}
function logout() {
  localStorage.removeItem("UserNme");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}