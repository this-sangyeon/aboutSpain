const mainContainer = document.querySelector('.slide-area');
const mainSlides = document.querySelectorAll('.main_slide');

// ㅂㅓㅌㅌㄴㄴ
const rightBtn = document.querySelector('.left-btn');
const leftBtn = document.querySelector('.right-btn');

//counter
 let counter =1;
 const size = mainSlides[0].clientWidth;
 console.log(size);

mainContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
console.log(mainContainer.style.transform);
 // buttonlisteners

rightBtn.addEventListener('click', function() {
    if(counter >= mainSlides.length -1) return;
    mainContainer.style.transition = 'transform 0.7s ease-in-out';
    counter++;
    mainContainer.style.transform = 'translateX(' + ( -size * counter ) +  'px)';

 });

leftBtn.addEventListener('click', function(){
    if(counter <= 0) return;
    mainContainer.style.transition = 'transform 0.7s ease-in-out';
    counter--;
    mainContainer.style.transform = 'translateX(' + ( -size * counter ) +  'px)';

 });

 mainContainer.addEventListener('transitionend',function() {
     console.log('움직임');
     if(mainSlides[counter].id === 'lastClone'){
        mainContainer.style.transition = 'none';
        counter = mainSlides.length - 2;
        mainContainer.style.transform = 'translateX(' + ( -size * counter ) +  'px)';
     }

     if(mainSlides[counter].id === 'firstClone'){
        mainContainer.style.transition = 'none';
        counter = mainSlides.length - counter;
        mainContainer.style.transform = 'translateX(' + ( -size * counter ) +  'px)';
     }
 });

// 자동슬라이드 도전 중..
// var slideIndex = 0;
// showSlides();

// function showSlides(){
//    for( let i = 0; i < mainSlides.length; i++ ){
//     mainSlides[i].style.display = "none";
//    }
//    slideIndex++;
//    if(slideIndex > mainSlides.length ){
//        slideIndex = 1;
//    }
//    mainSlides[slideIndex - 1].style.display = "block";
//    setTimeout(showSlides, 2000);
// }



