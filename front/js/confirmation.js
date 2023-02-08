//Getting order ID from search params
let displayOrderId = getUrlParam('orderId')
console.log(displayOrderId);

//Confirmation : OrderId manquant / incorrect
if(orderId !== '') {
	//Creating order ID to display on confirmation page
	let orderNumber = document.createElement('span');
	orderNumber.setAttribute("id", "orderId");
	orderNumber.textContent = displayOrderId;
	document.querySelector('#orderId').appendChild(orderNumber);

	// Removing products from cart
	localStorage.setItem("cart", JSON.stringify([]));
}
else {
	alert("orderid manquant")
}
