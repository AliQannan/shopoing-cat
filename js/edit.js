// Retrieve product details from local storage
let productDB = JSON.parse(localStorage.getItem("productsCart")) || [];
let getproduct = JSON.parse(localStorage.getItem("editPro"));
if (!getproduct) {
    alert("No product details found for editing.");
    window.location.href = "index.html"; // Redirect to a safe page
}

let selectform = document.querySelector(".createform select");
let titelform = document.querySelector("#title");
let descform = document.querySelector("#desc");
let submitform = document.querySelector(".createform input[type='submit']");
let fileform = document.querySelector(".createform input[type='file']");
let imagePreview = document.querySelector("#imagePreview"); // Added for image preview

let productImg = getproduct.imgUrl; // Initialize with existing image

// Set form values to current product details
titelform.value = getproduct.title;
descform.value = getproduct.desc;
selectform.value = getproduct.size;
imagePreview.src = getproduct.imgUrl; // Show the current image

// Handle file selection and upload
fileform.addEventListener("change", uploadImg);

// Handle image preview and file read
function uploadImg() {
    let file = this.files[0];
    let types = ["image/jpeg", "image/png"];
    if (types.indexOf(file.type) === -1) {
        alert("Unsupported file type");
        return;
    }
    if (file.size > 2 * 1024 * 1024) {
        alert("File size exceeds 2MB");
        return;
    }
    let reader = new FileReader();
    reader.onload = function() {
        productImg = reader.result; // Store the base64 image data
        imagePreview.src = productImg; // Update the image preview
    };
    reader.onerror = function() {
        alert("Error reading file");
    };
    reader.readAsDataURL(file);
}

// Update the product details and save to local storage
submitform.addEventListener("click", function (e) {
    e.preventDefault();

    if (
        titelform.value === "" ||
        descform.value === "" ||
        selectform.value === "" ||
        !productImg // Check if image is uploaded
    ) {
        alert("All fields are required.");
        return;
    }

    // Update product details
    getproduct.title = titelform.value;
    getproduct.size = selectform.value;
    getproduct.desc = descform.value;
    getproduct.imgUrl = productImg;

    // Find and update the product in the database
    productDB = productDB.map(product => 
        product.id === getproduct.id ? getproduct : product
    );
    localStorage.setItem("productsCart", JSON.stringify(productDB));

    alert("Product updated successfully!");
    window.location.href = "index.html"; // Redirect to a list or home page
});
