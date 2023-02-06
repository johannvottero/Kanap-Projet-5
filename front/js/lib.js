function getUrlParam(paramName = '') {}


// Getting back current cart
function getCart() {
	let cart = JSON.parse(localStorage.getItem("cart"));
	if(cart === null) cart = [];
}

// Saving cart in LocalStorage
function saveCart(cart = []) {
	localStorage.setItem("cart", JSON.stringify(cart));
}

function findProductFromCart(productId = '', productColor = '') {
    let index = cart.findIndex(item => (product._id == item.id && colors.value == item.color));
}

// Delete product from cart
function deleteProductToCart(productId = '', productColor = '') {

        // Getting back current cart
        let cart = JSON.parse(localStorage.getItem("cart"));
        if(cart === null) cart = [];

        // Checking if product is already in the cart
        let index = cart.findIndex(item => (item.id == cartItem.id && item.color == cartItem.color));
        if(index !== -1) {
            cart.splice(index, 1);
        }
        // Saving cart in LocalStorage
        localStorage.setItem("cart", JSON.stringify(cart));
        location.reload();
    };

function updateProductQuantityFromCart(productId = '', productColor = '', quantity = 0) {
    let index = cart.findIndex(item => (item.id == cartItem.id && item.color == cartItem.color));
			if(index !== -1) {
				let newQuantity = Number(inputNumber.value);
				cart[index].qty = newQuantity;
			}
}

function addProductToCart(productId = '', productColor = '', quantity = 0) {
    let index = cart.findIndex(item => (product._id == item.id && colors.value == item.color));
    if(index === -1) {
        // Case NO : Adding a new item in the cart Array
        let cartItem = {
            id: product._id,
            qty: Number(qty.value),
            color: colors.value,
        };
        cart.push(cartItem);
    }
}