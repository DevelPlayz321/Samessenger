function adduser() {
    username = document.getElementById("user_name").value;
    localStorage.setItem("UserNme", username);
    window.location = "kwitter_room.html";  
}