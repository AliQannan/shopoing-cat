let myproducts = JSON.parse(localStorage.getItem("myproduct"));
let contentItem = document.querySelector(".products .container");

function drawmyproductUi(allproducts = []) {
    if (JSON.parse(localStorage.getItem("myproduct")).length == 0) {
      let nopro = document.querySelector(".no-products");
      let nc = document.querySelector(".ncNew");
      nc.style.display = "block";
      nopro.innerHTML = "there is no products , please ?! sure if , you have ";
    }
  
    let products =
      JSON.parse(localStorage.getItem("myproduct")) || allproducts;
  
    let productUi = products.map(function (porductItem) {
      return ` 
        <div class="products-item">
        <div class="product-item-img">
          <a href="${porductItem.imgUrl}" target="_blank"><img src="${porductItem.imgUrl}"alt="product"  /></a>
        </div>
        <div class="product-item-desc">
          <h2> ${porductItem.title} item</h2>
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
  
  drawmyproductUi();

 

// function drawUi(myproducts) {
//   let productUi = myproducts.map(function (porductItem) {
//     return ` 
//         <div class="products-item" style= "border:${
//           porductItem.isme === "y" ? "2px solid green" : ""
//         };">
//         <div class="product-item-img">
//           <a href="${
//             porductItem.imgUrl
//           }" target="_blank"><img id="imagePreview" src="${porductItem.imgUrl}" alt="Product Image Preview" style="max-width: 200px; display: block; margin-bottom: 10px;">
//           </a>
//         </div>
//         <div class="product-item-desc">
//           <a onclick='saveId(${
//             porductItem.id
//           })'><h2> ${porductItem.title} item</h2></a>
//           <p>${porductItem.desc}</p>
//           <span>size: ${porductItem.size}</span>
//           <div class="quntity" style="font-weight:bold; font-size:20px "> quntity : ${
//             porductItem.qun
//           }</div>
//           ${
//             porductItem.isme == "y"
//               ? ` <button onclick='transfar(${porductItem.id})' id ='edit'>edit</button>`
//               : ""
//           }
//         </div>
       
//         <div class="product-item-actions">
//           <button  onclick="remove(${
//             porductItem.id
//           })" class="add-to-cart">remove</button>
    
//           <i id="icon" style="color:${
//             porductItem.liked == true ? "red" : ""
//           };" onclick="hold(${porductItem.id})" class="far fa-heart fa-2x" ></i>
//         </div>
//       </div>
//         `;
//   });

//   contentItem.innerHTML = productUi;
// }

// drawUi(myproducts);

if (myproducts) {
  function remove(id) {
    let filter = myproducts.filter((item) => item.id !== id);
    localStorage.setItem("myproduct", JSON.stringify(filter));
    let productsDb = JSON.parse(localStorage.getItem("productsCart"));

    let newfilter = productsDb.filter((item) => item.id !== id);
    localStorage.setItem("productsCart", JSON.stringify(newfilter));

    drawmyproductUi(filter);
  }
}
