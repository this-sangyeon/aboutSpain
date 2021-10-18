let bgSection = document.querySelectorAll('.bg-section > .festival-area');
let festivalListBtn = document.querySelectorAll('.festivalMenu > ul > li')
bgSection = Array.prototype.slice.call(bgSection);
festivalListBtn = Array.prototype.slice.call(festivalListBtn);

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
