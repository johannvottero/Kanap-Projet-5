
let Cart = localStorage
let localStorage = [product._id, product.quantity, product.colors ]


// accèder à l'objet local Storage du domaine courant et lui ajoute une entrée en utilisant Storage.setItem().
localStorage.setItem('monChat', 'Tom');

//La syntaxe pour la lecture de l'article localStorage est la suivante :
var cat = localStorage.getItem('monChat');

//La syntaxe pour la suppression de l'élément localStorage est la suivante :
localStorage.removeItem('monChat');

// Effacer tous les éléments
localStorage.clear();