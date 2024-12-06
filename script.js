const card = document.querySelectorAll(".card");
const btn = document.querySelectorAll(".button");
const back = document.querySelectorAll(".back");
const front = document.querySelectorAll(".front");

btn[0].onclick=function(){
    card[0].classList.toggle('flipped');
    setTimeout(function(){
        back[0].classList.toggle('d-none');
        front[0].classList.add('d-none');
    },300)
}
card[0].onmouseleave=function(){
    setTimeout(function(){
        card[0].classList.remove('flipped') 
        back[0].classList.add('d-none');
    },400)
    setTimeout(function(){
        front[0].classList.remove('d-none');
    },392)
}
btn[1].onclick=function(){
    card[1].classList.toggle('flipped')
    setTimeout(function(){
        back[1].classList.toggle('d-none');
        front[1].classList.add('d-none');
    },300)
}
card[1].onmouseleave=function(){
    setTimeout(function(){
        card[1].classList.remove('flipped') 
        back[1].classList.add('d-none');
    },400)
    setTimeout(function(){
        front[1].classList.remove('d-none');
    },392)
}
btn[2].onclick=function(){
    card[2].classList.toggle('flipped')
    setTimeout(function(){
        back[2].classList.toggle('d-none');
        front[2].classList.add('d-none');
    },300)
}
card[2].onmouseleave=function(){
    setTimeout(function(){
        card[2].classList.remove('flipped') 
        back[2].classList.add('d-none');
    },400)
    setTimeout(function(){
        front[2].classList.remove('d-none');
    },392)
}

// num=0;
// let interval;


// window.onload=function(){
//     interval = setInterval(function(){
//         num++;
//         // num=numHtml.innerHTML;
//         console.log(num);
//     },50)
// }
// setInterval(function(){
//     if(num==15){
//         clearInterval(interval);
//     }
// },20)