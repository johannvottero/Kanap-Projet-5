// Getting back current cart
let cart = JSON.parse(localStorage.getItem("cart"));
if(cart === null) cart = [];
//console.log(cart);

/* // case cart is empty
 if(cart === []) {
	document.querySelector("section.cart").textContent("votre panier est vide")
}  */

// Initialisations
let totalQuantityCart = 0;
let totalCart = 0;

// Looping on each cart item
cart.forEach((cartItem, index) => {
	// Loading missing data from API
	fetch(`http://localhost:3000/api/products/${cartItem.id}`)
	.then(function(res) {
		if(res.ok) {
			return res.json();
		}
	})
	.then(function(product) {

		// Adding a new article on the page
		let newArticle = document.createElement('article');
		newArticle.setAttribute("class", "cart__item");
		document.querySelector('#cart__items').appendChild(newArticle);

		// Adding a new div IMG on the page
		let newDivImg = document.createElement('div');
		newDivImg.setAttribute("class", "cart__item__img");
		newArticle.appendChild(newDivImg);

		// Setting data id and data color to new article
		newArticle.setAttribute("data-id",cartItem.id);
		newArticle.setAttribute("data-color",cartItem.color); 
		
		// Adding a new product img on the page
		let image = document.createElement("img")
		image.setAttribute('src', `${product.imageUrl}`);
		image.setAttribute('alt', `${product.altTxt}`);
		newDivImg.appendChild(image);

		// Adding a new div product content on the page
		let newDivContent = document.createElement('div');
		newDivContent.setAttribute("class","cart__item__content");
		newArticle.appendChild(newDivContent);

		// Adding a new div product description on the page
		let newDivDescription = document.createElement('div');
		newDivDescription.setAttribute("class","cart__item__content__description");
		newDivContent.appendChild(newDivDescription);

		// Adding a new div product settings on the page
		let newDivsettings = document.createElement('div');
		newDivsettings.setAttribute("class","cart__item__content__settings");
		newDivContent.appendChild(newDivsettings);
		
		// Adding a new div product settings on the page
		let newDivsettingsQuantity = document.createElement('div');
		newDivsettingsQuantity.setAttribute("class","cart__item__content__settings__quantity");
		newDivsettings.appendChild(newDivsettingsQuantity);

		//adding a new p in product settings quantity field
		let quantityField = document.createElement('p');
		quantityField.textContent = "Qté : "
		newDivsettingsQuantity.appendChild(quantityField);

		// Creating / adding product title block code on the product page
		let productTitle = document.createElement("h2");
		productTitle.textContent = product.name;
		newDivDescription.appendChild(productTitle);

		// Creating / adding product title block code on the product page
		let productColor = document.createElement("p");
		productColor.textContent = cartItem.color;
		newDivDescription.appendChild(productColor);

		// Creating / adding product price block code on the product page
		let productPrice = document.createElement("p");
		productPrice.textContent = (product.price+"€");
		newDivDescription.appendChild(productPrice);

		// Adding the quantity product on the page
		let inputNumber = document.createElement("input");
		inputNumber.setAttribute("type", "number");
		inputNumber.setAttribute("class", "itemQuantity");
		inputNumber.setAttribute("name", "itemQuantity");
		inputNumber.setAttribute("min", "1");
		inputNumber.setAttribute("max", "100");
		inputNumber.setAttribute("value", cartItem.qty);
		newDivsettingsQuantity.appendChild(inputNumber);

		// Adding a new div product suppression on the page
		let newDivDelete = document.createElement('div');
		newDivDelete.setAttribute("class","cart__item__content__settings__delete");
		newDivsettings.appendChild(newDivDelete);

		// Adding a new div product description on the page
		let deleteButton = document.createElement('p');
		deleteButton.setAttribute("class", "deleteItem");
		deleteButton.textContent = "Supprimer";
		newDivDelete.appendChild(deleteButton);

		// Listening 'click' event  on delete button
		deleteButton.addEventListener('click', function(event) {
			// Getting back current cart
			let cart = getCart();

			// Checking if product is already in the cart
			let index = cart.findIndex(item => (item.id == cartItem.id && item.color == cartItem.color));
			if(index !== -1) {
				cart.splice(index, 1);
			}
			// Saving cart in LocalStorage
			saveCart(cart);
			location.reload();
		});

		// Listening 'change' event  on quantity button
		inputNumber.addEventListener('input', function(event) {
			// Getting back current cart
			let cart = getCart();

			// Checking if product is already in the cart
			let index = cart.findIndex(item => (item.id == cartItem.id && item.color == cartItem.color));
			if(index !== -1) {
				let newQuantity = Number(inputNumber.value);
				cart[index].qty = newQuantity;
				// Saving cart in LocalStorage
				saveCart(cart);
				location.reload();
			}
		});
		
		// Calculating total quantity Cart
		totalQuantityCart = (Number(totalQuantityCart) + Number(cartItem.qty));
		// Adding the total quantity on the page
		totalQuantity.textContent = (totalQuantityCart);

		// Calculating total price Cart
		totalCart = totalCart + Number(product.price) * Number(cartItem.qty);
		// Adding the total cart price on the page
		totalPrice.textContent = (totalCart);
	})
	.catch(function(err) {
		console.log(err)
	})
});

// ################################################## Listening form submission
// Listening form submission
document.querySelector('form.cart__order__form').addEventListener('submit', function(event) {
	// Stopping form from being sent
	event.preventDefault();

	// Creating contactData object with form fields
	let contactData = {
		firstName: document.getElementById("firstName").value,
		lastName: document.getElementById("lastName").value,
		address: document.getElementById("address").value,
		city: document.getElementById("city").value,
		email: document.getElementById("email").value,
	};

	// Creating productsData array with products ids
	let productsIds = [];

	// Getting back current cart
	let cart = JSON.parse(localStorage.getItem("cart"));
	if(cart === null) cart = [];

	// Adding products ids in productsIds
	cart.forEach((cartItem, index) => {
		productsIds.push(cartItem.id);
	});

	//initializing error message
	let hasError = false;

	// Checking firstName
	let firstNameInput = document.getElementById('firstName');
	let firstNameError = document.getElementById('firstNameErrorMsg');
	let firstNameRegex = new RegExp("^[a-zA-Z 'àâäéèêëïîôöùûüç-]+$");
	if(firstNameRegex.test(firstNameInput.value)) {
		// There is no problem
		firstNameError.textContent = "";
	}
	else {
		// There is a problem
		firstNameError.textContent = "Le prénom est invalide";
		hasError = true;
	}

	// Checking lastName
	let lastNameInput = document.getElementById('lastName');
	let lastNameError = document.getElementById('lastNameErrorMsg');
	let lastNameRegex = new RegExp("^[a-zA-Z 'àâäéèêëïîôöùûüç-]+$");
	if(lastNameRegex.test(lastNameInput.value)) {
		// There is no problem
		lastNameError.textContent = "";
	}
	else {
		// There is a problem
		lastNameError.textContent = "Le nom est invalide";
		hasError = true;
	}

	// Checking address
	let addressInput = document.getElementById('address');
	let addressError = document.getElementById('addressErrorMsg');
	let addressRegex = new RegExp("^[0-9a-zA-Z 'àâäéèêëïîôöùûüç-]+$");
	if(addressRegex.test(addressInput.value)) {
		// There is no problem
		addressError.textContent = "";
	}
	else {
		// There is a problem
		addressError.textContent = "L'adresse est invalide";
		hasError = true;
	}

	// Checking city
		let cityInput = document.getElementById('city');
		let cityError = document.getElementById('cityErrorMsg');
		let cityRegex = new RegExp("^[a-zA-Z 'àâäéèêëïîôöùûüç-]+$");
		if(cityRegex.test(cityInput.value)) {
			// There is no problem
			cityError.textContent = "";
		}
		else {
			// There is a problem
			cityError.textContent = "La ville est invalide";
			hasError = true;
		}

	// Checking email
	let emailInput = document.getElementById('email');
		let emailError = document.getElementById('emailErrorMsg');
		let emailRegex = new RegExp("^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z0-9._-]+[.]{1}[a-z]{2,3}$");
		if(emailRegex.test(emailInput.value)) {
			// There is no problem
			emailError.textContent = "";
		}
		else {
			// There is a problem
			emailError.textContent = "L'email est invalide";
			hasError = true;
		}

	if(hasError === false) {
		// Call API via fetch
		fetch(`http://localhost:3000/api/products/order`, {
			method: 'POST',
			headers : {
				"Accept" : "application/json",
				"Content-type": "application/json"
			},
			body: JSON.stringify({
				contact: contactData,
				products: productsIds
			}),
		})
		.then(function(res) {
			if(res.ok) {
				return res.json()
			}
		})
		.then(function(response) {
			console.log(response.orderId);
			// @todo redirectin confirmation with orderId
			location.href = `confirmation.html?orderId=${response.orderId}`;
			
		})
		.catch(function(err) {
			console.log(err)
		});
	}
	

});
