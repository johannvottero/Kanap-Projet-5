// Getting back current cart
let cart = JSON.parse(localStorage.getItem("cart"));
if(cart === null) cart = [];
console.log(cart);

// Looping on each cart item
cart.forEach((cartItem, index) => {
	// Loading missing data from API
	fetch(`http://localhost:3000/api/products/${cartItem.id}`)
	.then(function(res) {
			if(res.ok) {
				return res.json();
			}
		}
	)
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
		document.querySelectorAll('.deleteItem').forEach(cartItem =>
		cartItem.addEventListener('click', function(product) {
		console.log("clicked")}));
		
		// Listening 'click' event  on quantity button
		document.querySelectorAll('.cart__item__content__settings__quantity').forEach(cartItem =>
		cartItem.addEventListener('change', function(product) {
		console.log("clicked")}));
		
		/*let totalCart = cart.forEach((cartItem, product) => {cartItem.qty*product.price})
		console.log(totalCart)
		console.log(cartItem.qty)
		console.log(product.price)
		
/*
	
		  <div class="cart__item__content__settings__delete">
		    <p class="deleteItem">Supprimer</p>
		  </div>
		</div>
*/

	})
	.catch(function(err) {
		console.log(err)
	})
});


