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

    
	// <img src="../images/logo.png" alt="Photographie d'un canapé">
    let productImage = document.createElement("img")
    productImage.setAttribute('src',`src=${product.imageUrl}`); 
    productImage.setAttribute('alt', `alt=${product.altTxt}`)
    productArticle.appendChild(productImage);

	// <h1 id="title"><!-- Nom du produit --></h1>

	// <p id="description"><!-- Dis enim malesuada risus sapien gravida nulla nisl arcu. --></p>

	// <select name="color-select" id="colors">

})
.catch(function(err) {
	console.log(err);
});