let loUsername = document.querySelector("input[type='text'");
let loEmail = document.querySelector("input[type='email'");
let loPassword = document.querySelector("input[type='password'");
let loSubmit = document.querySelector("input[type='submit'");

// let localsingup = localStorage.setItem("sing", reSubmit.value);

//add username and password and emal to loacal storage
getUser = localStorage.getItem("username");
getPassword = localStorage.getItem("password");
loSubmit.addEventListener("click", addItemToLocalStorage);

function addItemToLocalStorage(e) {
  e.preventDefault();

  if (loUsername.value == "" || loPassword.value == "") {
    alert("you must enter data");
  } else {
    if (
      getUser &&
      loUsername.value.trim() == getUser.trim() &&
      getPassword &&
      loPassword.value.trim() == getPassword.trim()
    ) {
      let animation = document.querySelector(".animation1 ul");
      animation.style.display = "block";
      setTimeout(() => {
        window.location = "./index.html";
      }, 2000);
    } else {
      alert("your password or user name is wrong");
    }
  }
}
