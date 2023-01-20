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
		let DeleteButton = document.createElement('p');
		DeleteButton.setAttribute("class", "deleteItem");
		DeleteButton.textContent = "Supprimer";
		newDivDelete.appendChild(DeleteButton);

		// Listening 'click' event  on delete button
		const deleteAction = document.querySelector('.cart__item__content__settings__delete');
		deleteAction.addEventListener('click', function(product) {
		console.log("clicked")})
		
		// Listening 'click' event  on quantity button
		const qtyChange = document.querySelector('.cart__item__content__settings__quantity');
		qtyChange.addEventListener('click', function(product) {
		console.log("clicked")})
				
		let total = (product.qty*product.price)
		//console.log(product.qty)
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





/*

const storageCart = JSON.parse(localStorage.getItem("product"));
let productId = localStorage.getItem("productId")
let color = localStorage.getItem("colorOption")
let qty = localStorage.getItem("qty")



//let productCart = [productId, colorOption, qty];
/*let cart = localStorage;
let cart = [productId="", colorOption="", qty=""];
cart.forEach((product, value) => {
    let productId = localStorage.JSON.Parse(localStorage.(0));
    console.log(product(0))

})
//let cartString = JSON.stringify(cart);
//let cart = [productId, colorOption, qty];
//let parsedCart = JSON.parse(cartString);
//let cart = [productId, qty, colorOption ]
//let colorParsed = JSON.parse(cart[1]);
//console.log(cart[0]);
//let parsedCart = JSON.parse(cart);
//let cartString = JSON.stringify(cart);

//let cartString = JSON.stringify(cart);
//let parsedCart = JSON.parse(cartString);
//JSON.parse(window.localStorage.getItem('productId'));
//let productId = localStorage.getItem(localStorage.key[0]);
//console.log('productId')


//let parsedId = JSON.parse("productId");

//console.log("productId");


// let localStorage = [product._id, product.quantity, product.colors ]
/*
/ accèder à l'objet local Storage du domaine courant et lui ajoute une entrée en utilisant Storage.setItem().
localStorage.setItem('monChat','Tom');

//La syntaxe pour la lecture de l'article localStorage est la suivante :
var cat = localStorage.getItem('monChat');

//La syntaxe pour la suppression de l'élément localStorage est la suivante :
localStorage.removeItem('monChat');

// Effacer tous les éléments
localStorage.clear();

let cartString = JSON.stringify(cart);
let cart = JSON.parse(cartString);
*/