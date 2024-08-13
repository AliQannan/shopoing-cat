let addediTem = localStorage.getItem("addedcart")
  ? JSON.parse(localStorage.getItem("addedcart"))
  : [];
  let productsInfo = document.querySelector(".products-info");
  function newdraw(addediTem) {
    productsInfo.innerHTML = "";
    if (addediTem) {
      addediTem.map(function (item) {
        productsInfo.innerHTML += `<div class='hero-img'>
        <img src='${item.imgUrl}'/>
        <p id ='herop'>   ${item.title}</p>
        <div class="parqun">
        <div class="qun">${item.qun}</div>
        </div>
        
        </div> `;
      });
      let iconNumber = document.querySelector(".icon-number");
      let allP = document.querySelectorAll(".products-info p");
      iconNumber.innerHTML = allP.length;
    }
  }
  
  newdraw(addediTem);


  let dorpdownNew = document.querySelector(".dropdown");
let dorpdownMenu = document.querySelector(".dropdown-menu");
dorpdownNew.addEventListener("click", effect);
function effect() {
  if (productsInfo.innerHTML !== "") {
    if (dorpdownMenu.style.display == "block") {
      dorpdownMenu.style.display = "none";
    } else {
      dorpdownMenu.style.display = "block";
    }
  }
}