let cart = JSON.parse(localStorage.getItem("cart")) || [];



function addToCart(id){

const product = products.find(p => p.id === id);

let item = cart.find(p => p.id === id);

if(item){

item.qty += 1;

}else{

cart.push({
...product,
qty:1
});

}

localStorage.setItem("cart",JSON.stringify(cart));

alert("Đã thêm vào giỏ hàng");

}



function loadCart(){

const cartItems = document.getElementById("cart-items");

const totalElement = document.getElementById("total");

if(!cartItems) return;

let total = 0;

cartItems.innerHTML = cart.map((item,index)=>{

let itemTotal = item.price * item.qty;

total += itemTotal;

return `

<div class="cart-item">

<p>${item.name}</p>

<div class="qty">

<button onclick="decrease(${index})">-</button>

<span>${item.qty}</span>

<button onclick="increase(${index})">+</button>

</div>

<p>${itemTotal.toLocaleString()}đ</p>

<button onclick="removeItem(${index})">Xóa</button>

</div>

`

}).join("");

totalElement.innerText = total.toLocaleString()+"đ";

}



function increase(index){

cart[index].qty++;

localStorage.setItem("cart",JSON.stringify(cart));

loadCart();

}



function decrease(index){

if(cart[index].qty > 1){

cart[index].qty--;

}else{

cart.splice(index,1);

}

localStorage.setItem("cart",JSON.stringify(cart));

loadCart();

}



function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

loadCart();

}



loadCart();