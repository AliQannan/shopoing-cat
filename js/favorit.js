let contentItem = document.querySelector(".products .container");
//define proarty
let productfavorit = JSON.parse(localStorage.getItem("favorit"));
function drawUi(productData) {
  if (JSON.parse(localStorage.getItem("favorit")).length == 0) {
    let nopro = document.querySelector(".no-products");
    let nc = document.querySelector(".ncNew");
    nc.style.display = "block";
    nopro.innerHTML = "there is no products , please ?! sure if , you have ";
  }

  let productUi = productData.map(function (porductItem) {
    return ` 
    <div class="products-item">
    <div class="product-item-img">
      <a href="${porductItem.imgUrl}" target="_blank"><img src="${porductItem.imgUrl}"alt="product"  /></a>
    </div>
    <div class="product-item-desc">
      <a onclick='saveId(${porductItem.id})'><h2> ${porductItem.titel} item</h2></a>
      <p>lorem ipsum, dolor sit amet consectetur.</p>
      <span>size: ${porductItem.size}</span>
      <div class="quntity" style="font-weight:bold; font-size:20px "> quntity : ${porductItem.qun}</div>
    </div>
   
    <div class="product-item-actions">
      <button  onclick="deletFromfavorite(${porductItem.id})" class="add-to-cart">delet from favorit</button>

    </div>
  </div>
    `;
  });

  contentItem.innerHTML = productUi;
}

drawUi(productfavorit);
//!End Draw Data

//verabile for tag define
let productsInfo = document.querySelector(".products-info");
productsInfo.style.color = "black";
let addToCart = document.querySelector(".add-to-cart");

//?! drop down chosen item
addToCart.addEventListener("click", additem);
let addediTem = localStorage.getItem("productsCart")
  ? JSON.parse(localStorage.getItem("productsCart"))
  : [];
function newdraw() {
  if (addediTem) {
    addediTem.map(function (item) {
      productsInfo.innerHTML += `<div class='hero-img'>
      <img src='${item.imgUrl}'/>
      <p id ='herop'>   ${item.titel}</p>
      <div class="qun">${item.qun}</div>
      </div> `;
    });
    let iconNumber = document.querySelector(".icon-number");
    let allP = document.querySelectorAll(".products-info p");
    iconNumber.innerHTML = allP.length;
  }
}
newdraw(); //?! finish function chosen item down
//?!add item
if (localStorage.getItem("username")) {
  let allitems = [];
  function additem(id) {
    let chosenItem = productData.find((item) => item.id == id);
    let item = allitems.find((item) => item.id === id);
    if (item) {
      chosenItem.qun += 1;
    } else {
      allitems.push(chosenItem);
    }
    addediTem = [...addediTem, chosenItem];
    let newali = uniqeitem(addediTem, "id");
    localStorage.setItem("productsCart", JSON.stringify(newali));
    productsInfo.innerHTML = "";
    allitems.forEach(
      (item) =>
        (productsInfo.innerHTML += `<div class='hero-img'>
    <img src='${item.imgUrl}'/>
    <p id ='herop'>   ${item.titel}</p>
    <div class="parqun">
    <div class="qun">${item.qun}</div>
    </div>
    
    </div> `)
    );

    let allP = document.querySelectorAll(".products-info p");
    let iconNumber = document.querySelector(".icon-number");
    iconNumber.innerHTML = allP.length;
  }
}

// window.location = "./addtocart.html";
else {
  window.location = "/login.html";
}
//?!add item finish
//added to cart
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

function saveId(id) {
  localStorage.setItem("productId", id);
  setTimeout(() => {
    window.location = "productsDetalis.html";
  }, 100);
}

// the project function uniqe item
function uniqeitem(arr, filtertype) {
  let uniq = arr
    .map((item) => item[filtertype])
    .map((item, i, final) => final.indexOf(item) === i && i)
    .filter((item) => arr[item])
    .map((item) => arr[item]);
  return uniq;
}

// delete from favorit

function deletFromfavorite(id) {
  let newstorge = JSON.parse(localStorage.getItem("favorit"));

  localStorage.setItem("productsCart", JSON.stringify(productData));
  if (newstorge) {
    let filter = newstorge.filter((item) => item.id !== id);

    localStorage.setItem("favorit", JSON.stringify(filter));
    contentItem.innerHTML = "";
    drawUi(filter);
  }
}
