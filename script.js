const card = document.querySelectorAll(".card");
const btn = document.querySelectorAll(".btnn");

btn[0].onclick=function(){
    card[0].classList.toggle('flipped')
}
card[0].onmouseleave=function(){
    setTimeout(function(){
        card[0].classList.remove('flipped') 
    },400)
}
btn[1].onclick=function(){
    card[1].classList.toggle('flipped')
}
card[1].onmouseleave=function(){
    setTimeout(function(){
        card[1].classList.remove('flipped') 
    },400)
}
btn[2].onclick=function(){
    card[2].classList.toggle('flipped')
}
card[2].onmouseleave=function(){
    setTimeout(function(){
        card[2].classList.remove('flipped') 
    },400)
}