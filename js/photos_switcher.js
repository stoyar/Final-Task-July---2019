const main_img = document.querySelector('img.main_img');
const miniatures = document.getElementsByClassName('miniature');

let swithImg = function(event) {
    let mini_img = event.target.firstElementChild;
    let for_hide = event.target;
    if(mini_img === null) {
        mini_img = event.target;
        for_hide = event.target.parentNode;
    }
    let path = mini_img.getAttribute('src');
    main_img.setAttribute('src', path);
    for(let i = 0; i < miniatures.length; i++) {
        miniatures[i].style.display = 'flex';
    } 
    for_hide.style.display = 'none';
}

for(let i = 0; i < miniatures.length; i++) {
    miniatures[i].addEventListener('click', swithImg);
} 
