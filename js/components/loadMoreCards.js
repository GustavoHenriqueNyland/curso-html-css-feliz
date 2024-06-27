const btnTeste = document.querySelector('.-btn-load')
const boxCard = document.querySelector('.wrapper-card')
let moreCard = ` <figure class="card">
<a href=""><img src="image/card1.bmp" alt=""></a>
</figure>
<figure class="card">
<a href=""><img src="image/card2.bmp" alt=""></a>
</figure>
<figure class="card">
<a href=""><img src="image/card3.bmp" alt=""></a>
</figure>
<figure class="card">
<a href=""><img src="image/card1.bmp" alt=""></a>
</figure class="card">
<figure class="card">
<a href=""><img src="image/card2.bmp" alt=""></a>
</figure>
<figure class="card">
<a href=""><img src="image/card3.bmp" alt=""></a>
</figure>`;
btnTeste.addEventListener('click', function(){
    boxCard.insertAdjacentHTML('beforeend', moreCard);
});
