const products = [
    { id: 1, name: "Laptop", price: 1200, image: "3.png" },
    { id: 2, name: "Phone", price: 800, image: "2.jpg" },
    { id: 3, name: "Headphones", price: 200, image: "1.jpg" },
];

let cart = [];

function displayProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            
            <p>Price: $${product.price}</p>
            
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    totalPrice.textContent = total.toFixed(2);
}

displayProducts();
