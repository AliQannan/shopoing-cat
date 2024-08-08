let addediTem = localStorage.getItem("productsCart")
  ? JSON.parse(localStorage.getItem("productsCart"))
  : [];
let productsInfo = document.querySelector(".products-info");
productsInfo.style.color = "black";
function newdraw() {
  if (addediTem) {
    addediTem.map(function (item) {
      productsInfo.innerHTML += `<div class='hero-img'>
        <img src='${item.imgUrl}'/>
        <p id ='herop'>   ${item.titel}</p>
        <div class='icon-img'><i class= 'fa fa-check fw' >   </i><i onclick='deletItem(${item.id})' class= 'fa fa-remove fw remove' ></i></div>
        </div> `;
    });
    let iconNumber = document.querySelector(".icon-number");
    let allP = document.querySelectorAll(".products-info p");
    iconNumber.innerHTML = allP.length;
  }
}
newdraw(); //end

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

let productIds = localStorage.getItem("productId");
let findnew = productData.find((item) => item.id == productIds);
console.log(findnew.size);

function drawProductsDetalis() {
  let conten = document.querySelector(".products-detalis");
  console.log(conten);

  conten.innerHTML = `
    

<a href="${findnew.imgUrl}" target="_blank"><img src="${findnew.imgUrl}"alt="product"  /></a>

<div class="product-item-desc">
<a onclick='saveId(${findnew.id})'><h2> ${findnew.titel} item</h2></a>
<p>lorem ipsum, dolor sit amet consectetur.</p>
<span>size: ${findnew.size}</span>
</div>
<div class="product-item-actions">

<i id="icon"class="far fa-heart fa-2x"><i id="second-icon"class= "fa fa-heart" ></i></i>
</div>

    `;
}
drawProductsDetalis();
