// Get back current productId
let productId = new URL(window.location.href).searchParams.get('id');
console.log(productId);

// Fetch API in order to get current product data
fetch(`http://localhost:3000/api/products/${productId}`)
.then(function(res) {
		if(res.ok) {
			return res.json();
		}
	}
)

.then(function(product) {
	console.log(product);

    
	// Creating / adding img block code on the product page
    let image = document.createElement("img")
    image.setAttribute('src',`${product.imageUrl}`)
    image.setAttribute('alt', `${product.altTxt}`)
    document.querySelector('article > .item__img').appendChild(image);

    //Creating / adding price block code on the product page
    let productPrice = document.createElement("span")
    productPrice.textContent = product.price
    document.querySelector('#price').appendChild(productPrice);

    // Creating / adding product title block code on the product page
    let productTitle = document.createElement("h1")
    productTitle.textContent = product.name
    document.querySelector('#title').appendChild(productTitle);

	// Creating / adding product description block code on the product page
    let productDescription = document.createElement("p")
    productDescription.textContent = product.description
    document.querySelector('#description').appendChild(productDescription);

	// Creating / adding product colors options on the product page
    let productColor = document.createElement("option")
    productColor.textContent = product.colors
    document.querySelector('#colors').appendChild(productColor);

})
.catch(function(err) {
	console.log(err);
});