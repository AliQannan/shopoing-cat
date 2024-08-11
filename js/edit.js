//verible

let selectform = document.querySelector(".createform select");
let titelform = document.querySelector("#title");
let descform = document.querySelector("#desc");
let submitform = document.querySelector(".createform input[type='submit']");
let form = document.querySelector(".createform");
let products = JSON.parse(localStorage.getItem("productsCart")) || productData;
let fileform = document.querySelector(".createform input[type='file']");

let productImg;

/***************create event lesiner */

let previwe;

fileform.addEventListener("change", uploadImg);

console.log(fileform);

selectform.addEventListener("change", getSelectValue);

let getselectvalue;
function uploadImg() {
  let file = this.files[0];
  console.log(file);
  let types = ["image/jpeg", "image/jpeg"];
  if (types.indexOf(file.type) == -1) {
    alert("type not support");
    return;
  }
  if (file.size > 2 * 1024 * 1024) {
    alert("your size  more than 2M");

    return;
  }
  filereader(file);
  previwe = URL.createObjectURL(file);
}
function filereader(file) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    productImg = reader.result;
  };
  reader.onerror = function () {
    alert("errore");
  };
}

function getSelectValue() {
  console.log(selectform.value);
}
submitform.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    titelform.value == "" ||
    descform.value == "" ||
    selectform.value == "" ||
    fileform.value == ""
  )
    alert("you must input all items ? ");
  let productName = titelform.value;
  let productSize = selectform.value;

  //   let productDesc = descform.value;
  let obj = {
    id: products ? products.length + 1 : 1,
    titel: productName,
    size: productSize,
    imgUrl: productImg,
    qun: 1,
    liked: false,
  };
  let newproducts = products ? [...products, obj] : [obj];
  console.log(newproducts);
  localStorage.setItem("productsCart", JSON.stringify(newproducts));
  setTimeout(() => {
    window.location = "../index.html";
  }, 1700);
});
