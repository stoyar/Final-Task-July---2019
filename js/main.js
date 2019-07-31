//      Search
let field = document.querySelector('.search input');
let button = document.querySelector('.search button');
let active = 0;
button.addEventListener('click', () => {
  let desktop = window.matchMedia('screen and (min-width: 769px)');
  let padding = 42;
  if (desktop.matches) {
    let width = 220;
        if (active === 0) {
        field.style.width = width+'px';
        field.style.paddingRight = padding + 'px';
        button.style.backgroundColor = '#606060';
        button.innerHTML = '<img src="./img/search-light.png">'
        active = 1;
      } else if (field.value !== '') {
        field.value = '';
        location.href = 'category-all.html';
      } else {
        field.style.width = padding+'px';
        field.style.paddingRight = 0 + 'px';
        button.style.backgroundColor = '#fff';
        button.innerHTML = '<img src="./img/search-dark.png">'
        active = 0;
      }
  } else {
    let width = 100;
    let left_margin = 20;
    let top_margin = 15;
    let wrapper = document.querySelector('div.search');
    let basket = document.querySelector('.basket');
      if (active === 0) {
        wrapper.style.order = 2;
        wrapper.style.width = width + '%';
        wrapper.style.marginTop = top_margin +'px';
        basket.style.marginLeft = 'auto';
        field.style.width = width + '%';
        field.style.paddingRight = padding + 'px';
        button.style.backgroundColor = '#606060';
        button.innerHTML = '<img src="./img/search-light.png">';
        active = 1;
      } else if (field.value !== '') {
        field.value = '';
        location.href = 'category-all.html';
      } else {
        wrapper.style.order = 0;
        wrapper.style.width = width + 'px';
        wrapper.style.marginTop = 0 +'px';
        basket.style.marginLeft = left_margin +'px';
        field.style.width = padding + 'px';
        field.style.paddingRight = 0 + 'px';
        button.style.backgroundColor = '#fff';
        button.innerHTML = '<img src="./img/search-dark.png">';
        active = 0;
      }
  }
});

//      Galery links

let to_product = document.getElementsByClassName('text');
let to_categories = document.getElementsByClassName('empty');
for (let i = 0; i < to_product.length; i++) {
  to_product[i].addEventListener('click', () => {
    location.href = 'product-details.html';
  });
}
for (let i = 0; i < to_categories.length; i++) {
  to_categories[i].addEventListener('click', () => {
    location.href = 'category-all.html';
  })
}

//      Slider links

let first_img = document.querySelectorAll('.container img:nth-child(odd)');
for (let i = 0; i < first_img.length; i++) {
  first_img[i].addEventListener('click', () => {
    location.href = 'category-all.html';
});
} 
let second_img = document.querySelectorAll('.container img:nth-child(even)');
for (let i = 0; i < second_img.length; i++) {
  second_img[i].addEventListener('click', () => {
    location.href = 'product-details.html';
  });
}