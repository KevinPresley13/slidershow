let bt1 = document.getElementById('1');
let bt2 = document.getElementById('2');
let bt3 = document.getElementById('3');
let widthSlider = document.querySelector('.slider-widht').style;
function buton1(){
    widthSlider.marginLeft=`200vw`;
    bt1.classList.add('selected');
    bt2.classList.remove('selected');
    bt3.classList.remove('selected');
}
function buton2(){
    widthSlider.marginLeft=`0vw`;
    bt2.classList.add('selected');
    bt1.classList.remove('selected');
    bt3.classList.remove('selected');
}
function buton3(){
    widthSlider.marginLeft=`-200vw`;
    bt3.classList.add('selected');
    bt1.classList.remove('selected');
    bt2.classList.remove('selected');
}
let qtSliders = document.querySelectorAll('.slider-item').length;
document.querySelector('.slider-widht').style.width = `calc(100vw*${qtSliders})`;