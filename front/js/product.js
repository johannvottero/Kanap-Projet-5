// Get back current productId
let productId = new URL(window.location.href).searchParams.get('id')
//console.log(productId)

// Fetch API in order to get current product data
fetch(`http://localhost:3000/api/products/${productId}`)
.then(function(res) {
	if(res.ok) {
		return res.json()
	}
}
)
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
		if (qty.value > 0 && (colors.value!="")) {

/*
			JSON.stringify(product._id);
			JSON.stringify(colors.value);
			JSON.stringify(qty);

			// Adding id, color and quantity product to localstorage
			localStorage.setItem("productId", productId);
			localStorage.setItem("colorOption", colors.value);
			localStorage.setItem("qty", qty.value);
*/

			// Creating empty cart
			//let cart = [];


			// Getting back current cart
			let cart = JSON.parse(localStorage.getItem("cart"));
			if(cart === null) cart = [];

			// Creating new cart item
			let cartItem = {
				id: product._id,
				qty: qty.value,
				color: colors.value,
			};
			cart.push(cartItem);

			// Saving cart in LocalStorage
			localStorage.setItem("cart", JSON.stringify(cart));

		}
		else{
			alert("Veuillez choisir la quantité et la couleur souhaitée");
		}
	});








/*
	let cart = [
		{
			id: "107fb5b75607497b96722bda5b504926"
			color: "Blue"
			qty: 3
		},
		1: {
			id: "107fb5b75607497b96722bda22222222"
			color: "Red"
			qty: 8
		},
	];


	let cartString = JSON.stringify(cart);
	let cart = JSON.parse(cartString);
*/

})
.catch(function(err) {
	console.log(err)
})