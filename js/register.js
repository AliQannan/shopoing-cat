let reUsername = document.querySelector("input[type='text'");
let reEmail = document.querySelector("input[type='email'");
let rePassword = document.querySelector("input[type='password'");
let reSubmit = document.querySelector("input[type='submit'");

// let localsingup = localStorage.setItem("sing", reSubmit.value);

//add username and password and emal to loacal storage

reSubmit.addEventListener("click", addItemToLocalStorage);

function addItemToLocalStorage(e) {

  e.preventDefault();
  

  if (reUsername.value == "" || reEmail.value == "" || rePassword.value == "") {
    alert("you must enter data");
  } else {
    localStorage.setItem("username", reUsername.value);
    localStorage.setItem("password", rePassword.value);
    localStorage.setItem("email", reEmail.value);
    let animation2=document.querySelector(".animation1 ul")
    animation2.style.display='block'
    setTimeout(() => {
      window.location = "./login.html";
    }, 1500);
  }
}



