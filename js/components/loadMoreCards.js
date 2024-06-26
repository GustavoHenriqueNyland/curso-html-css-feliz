const btnTeste = document.getElementsByTagName('button');
const boxCard = document.querySelector('.wrapper-card')
let moreCard = ` <figure class="card">
<img src="image/card1.bmp" alt=""> 
<button name="btn-1" class="button -btColor -btSmall">saiba mais</button>
</figure>
<figure class="card">
<img src="image/card2.bmp" alt="">
<button class="button -btColor -btSmall">saiba mais</button>
</figure>
<figure class="card">
<img src="image/card3.bmp" alt="">
<button class="button -btColor -btSmall">saiba mais</button>
</figure>
<figure class="card">
<img src="image/card1.bmp" alt="">
<button class="button -btColor -btSmall">saiba mais</button>
</figure class="card">
<figure class="card">
<img src="image/card2.bmp" alt="">
<button class="button -btColor -btSmall">saiba mais</button>
</figure>
<figure class="card">
<img src="image/card3.bmp" alt="">
<button class="button -btColor -btSmall">saiba mais</button>
</figure>`;
btnTeste[7].addEventListener('click', function(){
    boxCard.insertAdjacentHTML('beforeend', moreCard);
});
