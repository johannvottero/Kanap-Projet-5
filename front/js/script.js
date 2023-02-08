
// Fetch API in order to get products array
fetch("http://localhost:3000/api/products")
.then(function(res) {
		if(res.ok) {
			return res.json();
		}
	}
)
.then(function(products) {
	//console.log(products);

	// Loop on array to handle each product
	products.forEach((product, index) => {

    /*
		console.log('######################################################################################');
		console.log(index);
		console.log(product);
    */

		// adding links for page product
		let productLink = document.createElement("a")
		productLink.setAttribute('href', `product.html?id=${product._id}`);
		document.querySelector("section#items").appendChild(productLink);
		//console.log(productLink);

		// creating product list
		let productArticle = document.createElement("article")
		productLink.appendChild(productArticle);

		// adding product image 
		let productImage = document.createElement("img")
		productImage.setAttribute('src',`${product.imageUrl}`); 
		productImage.setAttribute('alt', `${product.altTxt}`)
		productArticle.appendChild(productImage);

		// adding product title
		let productTitle = document.createElement("h3")
		productTitle.setAttribute('class', 'productName');
		productTitle.textContent = product.name
		productArticle.appendChild(productTitle);
		//console.log(productTitle);

		// adding product description
		let productDescription = document.createElement("p")
		productDescription.setAttribute('class', 'productDescription');
		productDescription.textContent = product.description
		productArticle.appendChild(productDescription);
		//console.log(productDescription);

	});
})
.catch(function(err) {
	console.log(err);
	// case no product avaiblable on home page
		/* document.querySelector('section.items').textContent('aucun article disponible') */
});