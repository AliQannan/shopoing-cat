let productsInfo = document.querySelector(".products-info");
let addediTem = localStorage.getItem("productsCart")
  ? JSON.parse(localStorage.getItem("productsCart"))
  : [];

function newdraw1(addediTem) {
  productsInfo.innerHTML = "";
  if (addediTem) {
    addediTem.map(function (item) {
      productsInfo.innerHTML += `<div class='hero-img'>
      <img src='${item.imgUrl}'/>
      <p id ='herop'>   ${item.titel}</p>
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

newdraw1(addediTem);// DRAW DROP  DOWN MENU 

//!DRAW PRODUCTS IN MY PAGE
function drawproductsCartUi(allproducts = []) {
  if (JSON.parse(localStorage.getItem("productsCart")).length == 0) {
    let nopro = document.querySelector(".no-products");
    let nc = document.querySelector(".ncNew");
    nc.style.display = "block";
    nopro.innerHTML = "there is no products , please ?! sure if , you have ";
  }

  let products =
    JSON.parse(localStorage.getItem("productsCart")) || allproducts;

  let productUi = products.map(function (porductItem) {
    return ` 
      <div class="products-item">
      <div class="product-item-img">
        <a href="${porductItem.imgUrl}" target="_blank"><img src="${porductItem.imgUrl}"alt="product"  /></a>
      </div>
      <div class="product-item-desc">
        <h2> ${porductItem.titel} item</h2>
        <p>lorem ipsum, dolor sit amet consectetur.</p>
        <span>size: ${porductItem.size}</span>
        <div style="display:block;">quntity: ${porductItem.qun}</div>
      </div>
      <div class="product-item-actions">
        <button  onclick="remove(${porductItem.id})" class="add-to-cart">remove</button>
        <i id="icon"class="far fa-heart fa-2x"><i id="second-icon"class= "fa fa-heart" ></i></i>
      </div>
    </div>
  
  
      `;
  });

  let contentItem = document.querySelector(".products .container");

  contentItem.innerHTML = productUi;
}

drawproductsCartUi();
// function remove(id) {
//     let productsCartUi = localStorage.getItem("productsCart");
//     if (productsCartUi) {
//       let items = JSON.parse(productsCartUi);
//       let filteritems = items.filter((item) => item.id !== id);

//       localStorage.setItem("productsCart", JSON.stringify(filteritems));
//       drawproductsCartUi(filteritems);
//     }
//   }
function remove(id) {
  let pro = JSON.parse(localStorage.getItem("productsCart"));
  if (pro) {
    for (let i = 0; i < pro.length; i++) {
      if (pro[i].id == id) {
        pro[i].qun -= 1;
        localStorage.setItem("productsCart", JSON.stringify(pro));
        newdraw1(pro);
        drawproductsCartUi();

        if (pro[i].qun == 0) {
          let filter = pro.filter((item) => item.id !== id);
          localStorage.setItem("productsCart", JSON.stringify(filter));

          // newdraw1(filter);
          console.log(pro[i].qun);
          drawproductsCartUi(filter);
          newdraw1(filter);
        }
      }
    }
  }
}

//effect
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
