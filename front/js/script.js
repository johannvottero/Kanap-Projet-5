// requête à l'api pour obtention des données produits
fetch("http://localhost:3000/api/products")
.then(function(res) {
      return res.json();
    }
)
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

  })




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