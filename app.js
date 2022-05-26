const body = document.querySelector('body');
const btn = document.querySelector('button');

const invert = function () {
    body.classList.toggle('grayScale')
}

btn.addEventListener('click', invert);

