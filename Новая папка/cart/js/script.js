window.addEventListener('DOMContentLoaded', function() {
    let products = document.querySelectorAll('.product'),
buttons = document.querySelectorAll('button'),
openBtn = document.querySelector('.opeen');

function createCart() {
    let cart = document.createElement('div'),
        field = document.createElement('div'),
        heading = document.createElement('h2'),
        closeBtn = document.createElement('button');

        cart.classList.add('cart');
        field.classList.add('cart-field');
        closeBtn.classList.add('close');

        heading.textContent = "В нашей корзиине";
        closeBtn.textContent = "Закрыть";

        document.body.appendChild(cart);
        cart.appendChild(heading);
        cart.appendChild(field);
        cart.appendChild(closeBtn);
    
}

createCart();

let field = document.querySelector('.cart-field'),
    cart = document.querySelector('.cart'),
    close = document.querySelector('.close');

function openCart() {
    cart.style.display = 'block';
}
function closeCart() {
    cart.style.display = 'none';
}

    openBtn.addEventListener('click', openCart);
    close.addEventListener('click', closeCart);
});


