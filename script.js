function placeOrder(){

let name = document.getElementById("customerName").value;
let phone = document.getElementById("customerPhone").value;
let address = document.getElementById("customerAddress").value;

if(name === "" || phone === "" || address === ""){
    alert("Please fill all customer details.");
    return;
}

if(total === 0){
    alert("Please select food items first.");
    return;
}

alert(
"Order Placed Successfully!\n\n" +
"Customer: " + name + "\n" +
"Phone: " + phone + "\n" +
"Delivery Address: " + address + "\n" +
"Total Bill: ₹" + total
);

document.getElementById("cart").innerHTML = "";
document.getElementById("total").innerHTML = "Total: ₹0";

document.getElementById("customerName").value = "";
document.getElementById("customerPhone").value = "";
document.getElementById("customerAddress").value = "";

total = 0;
}
function addReview(){

let name =
document.getElementById("reviewName").value;

let review =
document.getElementById("reviewText").value;

if(name === "" || review === ""){
    alert("Please enter your name and review.");
    return;
}

let reviewBox = document.createElement("div");

reviewBox.className = "review";

reviewBox.innerHTML =
`<strong>${name}</strong>
<p>⭐⭐⭐⭐⭐ ${review}</p>`;

document.getElementById("reviewContainer")
.appendChild(reviewBox);

document.getElementById("reviewName").value = "";
document.getElementById("reviewText").value = "";

alert("Thank you for your review!");
}