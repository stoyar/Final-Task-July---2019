let slider = document.querySelector('div.container');
let left = 0;
let img_width = 200;
let max_transition = 600;
document.querySelector('button.left').addEventListener('click', () => {
    if (left > -max_transition) {
        left -= img_width;
        slider.style.left = left+'px';
    }
});
document.querySelector('button.right').addEventListener('click', () => {
    if (left < 0) {
        left += img_width;
        slider.style.left = left+'px';
    } 
});
