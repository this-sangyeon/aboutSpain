let bgSection = document.querySelectorAll('.bg-section > .festival-area');
let festivalListBtn = document.querySelectorAll('.festivalMenu > ul > li')
let festivalArea = document.querySelectorAll('.bg-section > .festival-list');
let festivalFirstImage = document.querySelectorAll('.bg-section > .festival-list > img:first-of-type')
let festivalLastImage = document.querySelectorAll('.bg-section > .festival-list > img:last-of-type')


bgSection = Array.prototype.slice.call(bgSection);
festivalListBtn = Array.prototype.slice.call(festivalListBtn);
festivalFirstImage = Array.prototype.slice.call(festivalFirstImage);
festivalLastImage = Array.prototype.slice.call(festivalLastImage);
festivalArea =Array.prototype.slice.call(festivalArea);


for(let i=0; i< bgSection.length; i++){
    festivalListBtn[i].addEventListener('click', function(e){
        let target = e.currentTarget;
        let index = festivalListBtn.indexOf(target);
        console.log(index, target);
        for(let j = 0; j < festivalListBtn.length; j++){
            bgSection[j].classList.remove('active');
            
        }
        bgSection[index].classList.add('active');
        
    })
}