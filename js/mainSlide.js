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




