// Getting param value from url
function getUrlParam(paramName = '') {
	let paramValue = new URL(window.location.href).searchParams.get(paramName)
	if(paramValue === null) paramValue = '';
	return paramValue;
}

// Getting back current cart
function getCart() {
	let cart = JSON.parse(localStorage.getItem("cart"));
	if(cart === null) cart = [];
	return cart;
}

// Saving cart in LocalStorage
function saveCart(cart = []) {
	localStorage.setItem("cart", JSON.stringify(cart));
	return cart;
}

// Retrieving a product in cart
function findProductFromCart(productId = '', productColor = '') {
	// Getting back current cart
	let cart = getCart();
	// Searching for the product in the cart
	let index = cart.findIndex(item => (productId == item.id && productColor == item.color));
	return index;
}

// Deleting product from cart
function deleteProductToCart(productId = '', productColor = '') {
	// Getting back current cart
	let cart = getCart();
	// Searching for the product in the cart
	let index = cart.findIndex(item => (item.id == productId && item.color == productColor));
	if(index !== -1) {
		// Deleting item
		cart.splice(index, 1);
	}
	// Saving cart in LocalStorage
	saveCart(cart);
};

// Updating product quantity from cart
function updateProductQuantityFromCart(productId = '', productColor = '', quantity = 0) {
	// Getting back current cart
	let cart = getCart();
	// Searching for the product in the cart
	let index = cart.findIndex(item => (item.id == productId && item.color == productColor));
	if(index !== -1) {
		let newQuantity = Number(quantity);
		cart[index].qty = newQuantity;
	}
	// Saving cart in LocalStorage
	saveCart(cart);
}

// Adding product to cart
function addProductToCart(productId = '', productColor = '', quantity = 0) {
	// Getting back current cart
	let cart = getCart();
	// Searching for the product in the cart
	let index = cart.findIndex(item => (productId == item.id && productColor == item.color));
	if(index === -1) {
		// Case NO : Adding a new item in the cart Array
		let cartItem = {
			id: productId,
			qty: Number(quantity),
			color: productColor,
		};
		cart.push(cartItem);
	}
	else {
		// Case YES : Updating the qty of the existing item in the cart Array
		cart[index].qty = Number(cart[index].qty) + Number(quantity);
	}
	// Saving cart in LocalStorage
	saveCart(cart);
}