document.addEventListener('DOMContentLoaded', function () {
    var orderForm = document.querySelector('form');
    orderForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert("Your order has been placed Successfully!");
    });
});
