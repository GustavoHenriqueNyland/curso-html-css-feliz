const card = document.getElementsByClassName('card');

card[0].onmouseover = function(){mouseover(0)}
card[0].onmouseout =  function(){mouseout(0)}

function mouseover( index){
    card[index].style.animation = "none";
    card[index].style.transition = "transform .8s ease-in-out ";

}
function mouseout(index){
    card[index].style.animation = "";
         setTimeout(function() {card[index].style.animation = "moveCard 4s linear infinite";}, 100); 
}