//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("UserNme");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         name = message_data["name"];
         message = message_data["message"];
         like = message_data["like"];

         name_with_tag = "<h4>" + name + "<img src = 'tick.png' class = 'user_tick'></h4>"
         message_with_tag = "<h4 class = 'message_h4'>" + message +"</h4>";
         like_button = "<button class='btn btn-warning' id = " + firebase_message_id + "value =" + like+"onclick='update_like(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumb-up'>like:"+like + "</span></button><hr>";
         row =  name_with_tag + message_with_tag + like_button + span_with_tag
         document.getElementById("output").innerHTML += row;
      } });  }); }

getData();

function Send() {
      msg = document.getElementById('msg').value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });  
      document.getElementById("msg").value = "";

}

 function update_like(message_id) {
      console.log("like_buttonclicked")
      button_id = message_id
      like = document.getElementById(button_id).value;
      updated_like = Number(like) + 1;
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_like
      });

 }

 function logout() {
  localStorage.removeItem("UserNme");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}







































































































































































































































































































































































































