user_name = localStorage.getItem("userName");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

function log_out(){
      localStorage.removeItem("userName");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
