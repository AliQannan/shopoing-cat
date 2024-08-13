let contentItem = document.querySelector(".products .container");
let productsfa = JSON.parse(localStorage.getItem("favoriteproducts"));

productDB = JSON.parse(localStorage.getItem("productsCart")) || productData;
localStorage.setItem("productsCart", JSON.stringify(productDB));
//define proarty

function drawUi(productData) {
  let productUi = productData.map(function (porductItem) {
    return ` 
      <div class="products-item" style= "border:${
        porductItem.isme === "y" ? "2px solid green" : ""
      };">
      <div class="product-item-img">
        <a href="${
          porductItem.imgUrl
        }" target="_blank"><img id="imagePreview" src="${porductItem.imgUrl}" alt="Product Image Preview" style="max-width: 200px; display: block; margin-bottom: 10px;">
        </a>
      </div>
      <div class="product-item-desc">
        <a onclick='saveId(${
          porductItem.id
        })'><h2> ${porductItem.title} item</h2></a>
        <p>${porductItem.desc}</p>
        <span>size: ${porductItem.size}</span>
        <div class="quntity" style="font-weight:bold; font-size:20px "> quntity : ${
          porductItem.qun
        }</div>
        ${
          porductItem.isme == "y"
            ? ` <button onclick='transfar(${porductItem.id})' id ='edit'>edit</button>`
            : ""
        }
      </div>
     
      <div class="product-item-actions">
        <button  onclick="additem(${
          porductItem.id
        })" class="add-to-cart">add to cart</button>
  
        <i id="icon" style="color:${
          porductItem.liked == true ? "red" : ""
        };" onclick="hold(${porductItem.id})" class="far fa-heart fa-2x" ></i>
      </div>
    </div>
      `;
  });

  contentItem.innerHTML = productUi;
}

drawUi(JSON.parse(localStorage.getItem("productsCart")) || productData);

//!End Draw Data

//verabile for tag define

productsInfo.style.color = "black";
let addToCart = document.querySelector(".add-to-cart");

//?! drop down chosen item
addToCart.addEventListener("click", additem);
 //?! finish function chosen item down
//?!add item

if (localStorage.getItem("username")) {
  function additem(id) {
    if (localStorage.getItem("username")) {
      let products = productDB.find((item) => item.id == id);
      let isProductsInCart = addediTem.some((item) => item.id === products.id);
      if (isProductsInCart) {
        addediTem = addediTem.map((p) => {
          if (p.id === products.id) p.qun += 1;
          return p;
        });
      } else {
        addediTem.push(products);
      }

      localStorage.setItem("addedcart", JSON.stringify(addediTem));
      productsInfo.innerHTML = "";
      addediTem.forEach(
        (item) =>
          (productsInfo.innerHTML += `<div class='hero-img'>
    <img src='${item.imgUrl}'/>
    <p id ='herop'>   ${item.title}</p>
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
}

// window.location = "./addtocart.html";
else {
  window.location = "/login.html";
}
//?!add item finish
//added to cart


function saveId(id) {
  localStorage.setItem("productId", id);
  setTimeout(() => {
    window.location = "productsDetalis.html";
  }, 100);
}
//!search

let searchInput = document.querySelector(".search-bar input");

function search(title) {
  let newstorage = productDB.filter(
    (item) =>
      item.title
        .split(" ")
        .join("")
        .trim()
        .toLowerCase()
        .indexOf(title.split(" ").join("").trim().toLowerCase()) !== -1
  );
  drawUi(newstorage);
}

searchInput.addEventListener("keyup", function (e) {
  search(e.target.value);
});
// the project function
function uniqeitem(arr, filtertype) {
  let uniq = arr
    .map((item) => item[filtertype])
    .map((item, i, final) => final.indexOf(item) === i && i)
    .filter((item) => arr[item])
    .map((item) => arr[item]);
  return uniq;
}
function searchBy(title) {
  let newstorage = productDB.filter(
    (item) =>
      item.size
        .split(" ")
        .join("")
        .trim()
        .indexOf(title.split(" ").join("").trim().toLowerCase()) !== -1
  );
  drawUi(newstorage);
}

//!end search
//call function to search by size
let newSearch = document.querySelector(".search-by-size input");
newSearch.onkeyup = function () {
  searchBy(newSearch.value);
};
// hold favorit item

let favoritItem = localStorage.getItem("favorit")
  ? JSON.parse(localStorage.getItem("favorit"))
  : [];
function hold(id) {
  if (!localStorage.getItem("username")) {
    window.location = "/login.html";
    return;
  }

  // Find the product and check if it's already in favorites
  let favorititems = productDB.find((item) => item.id == id);
  let isFavorited = favoritItem.some((item) => item.id === id);

  if (isFavorited) {
    // Remove item from favorites
    favoritItem = favoritItem.filter((item) => item.id !== id);
    favorititems.liked = false;
  } else {
    // Add item to favorites
    favoritItem = [...favoritItem, favorititems];
    favorititems.liked = true;
  }

  // Update local storage with the new favorites list
  localStorage.setItem("favorit", JSON.stringify(uniqeitem(favoritItem, "id")));

  // Update the liked status of products in the cart if necessary
  let cartItems = JSON.parse(localStorage.getItem("productsCart")) || [];
  cartItems = cartItems.map((item) => {
    if (item.id === id) {
      item.liked = favorititems.liked;
    }
    return item;
  });
  localStorage.setItem("productsCart", JSON.stringify(cartItems));

  // Redraw the UI with the updated product data
  drawUi(productDB);
}

// transport form home page to edit pange
let editBtn = document.getElementById("edit");
 if(editBtn){
  editBtn.addEventListener("click", transfar);
function transfar(id) {
  let editpro = productDB.find((item) => item.id === id);
  if(editpro){
    localStorage.setItem("editPro",JSON.stringify(editpro))
    setTimeout(() => {
      window.location="../edite.html"
    }, 700);
  }
}


 }







let filtermyproduct=productDB.filter(item => item.isme ==="y")
let myproducts=localStorage.setItem("myproduct",JSON.stringify(filtermyproduct))