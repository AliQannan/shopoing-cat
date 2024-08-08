let links = document.getElementById("links");
let logOut = document.getElementById("logout-icon");
let user = document.getElementById("user");

let checkUser = localStorage.getItem("username");
if (checkUser) {
  links.remove();
  logOut.style.display = "block";
  user.innerHTML = checkUser;
}
