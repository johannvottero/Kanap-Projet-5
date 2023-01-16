const storageCart = JSON.parse(localStorage.getItem("product"));
let productId = localStorage.getItem("productId")
let color = localStorage.getItem("colorOption")
let qty = localStorage.getItem("qty")

fetch(`http://localhost:3000/api/products/${productId}`)
.then(function(res) {
		if(res.ok) {
			return res.json() 
        
		}
	}
)
.then(function(product) {
	console.log(product)
	console.log(color)
	//storageCart.forEach((product, index) => {

	//Adding a new article on the page
	let newArticle = document.createElement('article');
    newArticle.setAttribute("class","cart__item");
	document.querySelector('#cart__items').appendChild(newArticle);

	//Adding a new div IMG on the page
	let newDivImg = document.createElement('div');
    newDivImg.setAttribute("class","cart__item__img");
	document.querySelector('.cart__item').appendChild(newDivImg);

	//Adding a new product img on the page
	let image = document.createElement("img")
	image.setAttribute('src',`${product.imageUrl}`);
	image.setAttribute('alt', `${product.altTxt}`);
	document.querySelector('.cart__item__img').appendChild(image);
	
	//Adding a new div product content on the page
	let newDivContent = document.createElement('div');
    newDivContent.setAttribute("class","cart__item__content");
	document.querySelector('.cart__item').appendChild(newDivContent);	

	//Adding a new div product description on the page
	let newDivDescription = document.createElement('div');
    newDivDescription.setAttribute("class","cart__item__content__description");
	document.querySelector('.cart__item__content').appendChild(newDivDescription);

	// Creating / adding product title block code on the product page
	let productTitle = document.createElement("h2");
	productTitle.textContent = product.name;
	document.querySelector('.cart__item__content__description').appendChild(productTitle);

	// Creating / adding product title block code on the product page
	let productColor = document.createElement("p");
	productColor.textContent = product.color;
	document.querySelector('.cart__item__content__description').appendChild(productColor);

	// Creating / adding product title block code on the product page
	let productPrice = document.createElement("p");
	productPrice.textContent = (product.price+"€");
	document.querySelector('.cart__item__content__description').appendChild(productPrice);




//});
})
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