// Getting back current cart
let cart = JSON.parse(localStorage.getItem("cart"));
if(cart === null) cart = [];
console.log(cart);

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
		//console.log(cartItem);
		//console.log(product);

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

		// Listening 'change' event  on quantity button
		inputNumber.addEventListener('input', function(event) {
		let newQuantity = document.querySelector('input.itemQuantity').value;
		console.log(newQuantity);
		});

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
		cart.splice(cart.indexOf(cartItem.id), 1);
		localStorage.setItem("cart", JSON.stringify(cart));
		location.reload();
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
