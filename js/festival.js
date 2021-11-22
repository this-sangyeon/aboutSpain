let bgSection = document.querySelectorAll('.bg-section > .festival-area');
let festivalListBtn = document.querySelectorAll('.festivalMenu > ul > li')
let festivalFirstImage = document.querySelectorAll('.bg-section > .festival-list > .first-img')
let festivalLastImage = document.querySelectorAll('.bg-section > .festival-list > .last-img')


bgSection = Array.prototype.slice.call(bgSection);
festivalListBtn = Array.prototype.slice.call(festivalListBtn);
festivalFirstImage = Array.prototype.slice.call(festivalFirstImage);
festivalLastImage = Array.prototype.slice.call(festivalLastImage);


for(let i=0; i< bgSection.length; i++){
    festivalListBtn[i].addEventListener('click', function(e){
        let target = e.currentTarget;
        let index = festivalListBtn.indexOf(target);
        console.log(index, target);
        for(let j = 0; j < festivalListBtn.length; j++){
            bgSection[j].classList.remove('active');
           
        }
        bgSection[index].classList.add('active');
        
        for(let i = 0; i < festivalFirstImage.length; i++){
            festivalFirstImage[i].classList.add('active');
            festivalLastImage[i].classList.add('active');
        }
        festivalFirstImage[i].classList.remove('active');
        festivalLastImage[i].classList.remove('active');
        // if(index === 0){
        //     console.log('click');
        //     festivalFirstImage.classList.add('active');
        //     festivalLastImage.classList.add('active');

        // }
    })
}

