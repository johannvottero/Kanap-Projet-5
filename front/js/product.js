// Get back current productId
let productId = getUrlParam('id')
//console.log(productId)

// Fetch API in order to get current product data
fetch(`http://localhost:3000/api/products/${productId}`)
.then(function(res) {
	if(res.ok) {
		return res.json()
	}
	//case ProductId missing / incorrect
/* 	else {
		(productId == "" || product.id != productId )
		document.querySelector("article").textContent("produit non disponible")
	} */
})
.then(function(product) {
	//console.log(product)

	// Creating / adding page title on the product page
	let pageTitle = product.name
	document.title = pageTitle
	
	// Creating / adding img block code on the product page
	let image = document.createElement("img");
	image.setAttribute('src',`${product.imageUrl}`);
	image.setAttribute('alt', `${product.altTxt}`);
	document.querySelector('.item__img').appendChild(image);

	//Creating / adding price block code on the product page
	let productPrice = document.createElement("span");
	productPrice.textContent = product.price;
	document.querySelector('#price').appendChild(productPrice);

	// Creating / adding product title block code on the product page
	let productTitle = document.createElement("h1");
	productTitle.textContent = product.name;
	document.querySelector('#title').appendChild(productTitle);

	// Creating / adding product description block code on the product page
	let productDescription = document.createElement("p");
	productDescription.textContent = product.description;
	document.querySelector('#description').appendChild(productDescription);

	// Getting value from quantity field
	let qty = document.getElementById("quantity");
	let value = qty.value;
	//console.log(value);

	// Creating / adding product colors options on the product page
	product.colors.forEach((color, index) => {
		let option = document.createElement("option")
		option.setAttribute('value', color)
		option.textContent = color
		document.querySelector('#colors').appendChild(option)
	});

	// Listening 'click' event  on AddToCart button

	const cartBtn = document.querySelector('#addToCart');
	cartBtn.addEventListener('click', function(event) {
		console.log(colors.value)
		// Checking if color is choosed and quantity >0
		if (qty.value > 0 && (colors.value != "")) {

			// Getting back current cart
			let cart = getCart();

			// Checking if product is already in the cart
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
			else {
				// Case YES : Updating the qty of the existing item in the cart Array
				cart[index].qty = Number(cart[index].qty) + Number(qty.value);
			}

			// Saving cart in LocalStorage
			saveCart(cart);
		}
		else{
			alert("Veuillez choisir la quantité et la couleur souhaitée");
		}
	});
})
.catch(function(err) {
	console.log(err)
})
