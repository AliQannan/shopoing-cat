 //end


let productIds = localStorage.getItem("productId");
let productDB = JSON.parse(localStorage.getItem("productsCart")) || productData;
let findnew = productDB.find((item) => item.id == productIds);
console.log(findnew.size);

function drawProductsDetalis() {
  let conten = document.querySelector(".products-detalis");
  console.log(conten);

  conten.innerHTML = `
    

<a href="${findnew.imgUrl}" target="_blank"><img src="${findnew.imgUrl}"alt="product"  /></a>

<div class="product-item-desc">
<a onclick='saveId(${findnew.id})'><h2> ${findnew.title} item</h2></a>
<p>${findnew.desc}</p>
<span>size: ${findnew.size}</span>
</div>
<div class="product-item-actions">

<i id="icon"class="far fa-heart fa-2x"><i id="second-icon"class= "fa fa-heart" ></i></i>
</div>

    `;
}
drawProductsDetalis();
