const button_add = document.querySelector('input[type="button"]');
const counter = document.querySelector('span.basket_count');

button_add.addEventListener('click', function() {
    let curent = parseInt(counter.textContent);
    counter.innerHTML = ++curent;
    button_add.value = 'PRODUCT ADDED';
    button_add.style.backgroundColor = '#008000';
});