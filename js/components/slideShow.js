const slidesMove = document.getElementById('img');
const imagens = document.querySelectorAll('#img img');

let idx = 0;
function carrosel(){
    idx++;
    if (idx > imagens.length - 1) {
        idx = 0;
    }
    slidesMove.style.transform = `translateX(${-idx * 440}px)`;
}
setInterval(carrosel, 2000);