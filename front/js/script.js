
// Fetch API in order to get products array
fetch("http://localhost:3000/api/products")
.then(function(res) {
		if(res.ok) {
			return res.json();
		}
	}
)
.then(function(products) {
	console.log(products);

	// Loop on array to handle each product
	products.forEach((product, index) => {

		console.log('######################################################################################');
		console.log(index);
		console.log(product);

		// <a href="./product.html?id=42">
		let productLink = document.createElement("a")
		productLink.setAttribute('href', `product.html?id=${product._id}`);
		document.querySelector("section#items").appendChild(productLink);
		console.log(productLink);

		// <article>
		let productArticle = document.createElement("article")
		productLink.appendChild(productArticle);

		// <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
		// @todo

		// <h3 class="productName">xxxxxxxxxx</h3>
		let productTitle = document.createElement("h3")
		productTitle.setAttribute('class', 'productName');
		productTitle.textContent = product.name
		productArticle.appendChild(productTitle);
		console.log(productTitle);

		// <p class="productDescription">xxxxxxxxxx</p>

    let productDescription = document.createElement("p")
		productDescription.setAttribute('class', 'productDescription');
		productDescription.textContent = product.description
		productArticle.appendChild(productDescription);
		console.log(productDescription);

		// @todo

	});
})
.catch(function(err) {
	console.log(err);
});











/*
	parentNode.appendChild(<element>)
	/* elt.setAttribute("type", "password");
/*
function product
/*
document.createElement("a")
let link = document.createElement("a")
/*
	for (let i = 0; i < res.length; i++) {
		console.log(i);
 }
/*
p.classList.add('productDescription')
p.innerText = data.description
console.log('productDescription')
/*
	const productName = document.getElementsByClassName('productName');
	console.log('ProductName')
*/

/*
const tableauProduit = [value]
console.log('value')
*/

/*

// requête à l'api pour obtention des données produits
fetch("http://localhost:3000/api/products")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(products) {
    console.log(products);
  })
  .catch(function(err) {
    // Une erreur est survenue
  })
  
  .then(function(products) {
  
    // Loop on array to handle each product
    products.forEach((product, index) => {
  
      console.log('######################################################################################');
      console.log(index);
      console.log(product);
  
      // <a href="./product.html?id=42">
      let productLink = document.createElement("a")
      productLink.setAttribute('href', `product.html?id=${product._id}`);
      document.querySelector("section#items").appendChild(productLink);
      console.log(productLink);
  
      // <article>
      let productArticle = document.createElement("article")
      productLink.appendChild(productArticle);
  
      // <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
      // @todo
  
      // <h3 class="productName">xxxxxxxxxx</h3>
      let productTitle = document.createElement("h3")
      productTitle.setAttribute('class', 'productName');
      productTitle.textContent = product.name
      productArticle.appendChild(productTitle);
      console.log(productTitle);
  
      // <p class="productDescription">xxxxxxxxxx</p>
      // @todo
  
    });
  })
  .catch(function(err) {
    console.log(err);
  });
  



  /*
    .then(function(value) {
      console.log(value);
      let altTxt = value[0].altTxt
      let description = value[0].description
      let imageUrl = value[0].imageUrl
      let name = value[0].name
      let price = value[0].price
      let id = value[0]._id
  
      const titreProduit = document.createElement("h3")
      titreProduit.text = "canapé exemple"
      console.log(titreProduit)
  
      const kanapName = document.getElementsByClassName("productName")
  

  });







  console.log(items)

/*
  parentNode.appendChild(<element>)

  /* elt.setAttribute("type", "password");  
/*
function product 

/*
document.createElement("a")
let link = document.createElement("a") 

/*
  for (let i = 0; i < res.length; i++) {
    console.log(i);
 }


/*
p.classList.add('productDescription')
p.innerText = data.description
console.log('productDescription')

/*
  const productName = document.getElementsByClassName('productName');
  console.log('ProductName')

*/

/* 
const tableauProduit = [value]
console.log('value')
*/