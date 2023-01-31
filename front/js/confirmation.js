//Getting order ID from search params
let displayOrderId = new URL(window.location.href).searchParams.get('orderId')

//Creating order ID to display on confirmation page
let orderNumber = document.createElement('span');
orderNumber.setAttribute("id", "orderId");
orderNumber.textContent = displayOrderId;
document.querySelector('#orderId').appendChild(orderNumber);


