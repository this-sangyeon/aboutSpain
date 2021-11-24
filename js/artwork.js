let artworkImage = document.querySelectorAll('.artwork > img');
let artworkImageTitle = document.querySelectorAll('.artwork > div');
const headerNavList = document.querySelectorAll('.spainMenu > ul li a');

artworkImage = Array.prototype.slice.call(artworkImage);
artworkImageTitle = Array.prototype.slice.call(artworkImageTitle);



for(let i = 0; i < artworkImage.length; i++){
    artworkImage[i].addEventListener('mouseover',function(){
        artworkImageTitle[i].classList.add('active');
    })
}

for(let i = 0; i < artworkImage.length; i++){
    artworkImage[i].addEventListener('mouseleave',function(){
        artworkImageTitle[i].classList.remove('active');
    })
}


// 헤더 컬러 변경해주기 위해...


