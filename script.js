const sizeUp = document.querySelector('.sizeUp');
const sizeDown = document.querySelector('.sizeDown');
const colorBtn = document.querySelector('.color');
const p = document.querySelector('p');
let fontSize = 36;
let fontChange = 5;

//1. Funkcja powiekszajaca tekst po kliknieciu w plus 
//2. Funkcja zmniejszająca tekst po kliknieciu w minus 
//3. Funkcja zmieniająca kolor tekstu na losowy po klikńięciu w color

const plus = () => {
    if(fontSize <= 70){
        fontSize += fontChange;
        p.style.fontSize = fontSize + 'px';
    }
}
const minus = () => {
    if(fontSize >= 20){
        fontSize -= fontChange;
        p.style.fontSize = fontSize + 'px';
    }
}

const color = () => {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    p.style.color = randomColor;
}

sizeUp.addEventListener('click', plus);
sizeDown.addEventListener('click', minus);
colorBtn.addEventListener('click', color)
