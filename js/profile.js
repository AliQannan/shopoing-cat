let get_username=localStorage.getItem("username")
let get_password=localStorage.getItem("password")
let get_email=localStorage.getItem("email")
let img_user=document.getElementById("chosenuserimg")
let userprofile=document.getElementById("userinfo")
let userproducts=JSON.parse(localStorage.getItem("myproduct"))


if(get_username && get_password){
    userprofile.innerHTML=`<div id="usernameuser">username :  ${get_username}</div>  <div id ="passworduser" >email :  ${get_email} </div>
    
    <a href= "../myproducts.html" style="color:#333  ;"><div id = "myproductsuser"> your products : ${userproducts.length}</div></a>
    
    
    `
}


// console.log(get_password, get_username , img_user)
