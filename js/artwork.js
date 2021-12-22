let artworkImage = document.querySelectorAll('.artwork > img');
let artworkImageTitle = document.querySelectorAll('.artwork > div');
const headerNavList = document.querySelectorAll('.spainMenu > ul li a');
const artPopupContainer = document.querySelector('.art-popup-container');
const popupCloseBtn = document.querySelector('.popup-close-btn > button');
const prevArrowBtn = document.querySelector('.popup-img-arrow > .prev');
const nextArrowBtn = document.querySelector('.popup-img-arrow > .next');
const popupArtImage = document.querySelector('.art-popup-area > .art-image > img');
const popupArtName = document.querySelector('.art-popup-area > .art-content > .art-text > h2');
const popupArtArtist = document.querySelector('.art-popup-area > .art-content > .art-text >  p:first-of-type');
const popupArtYear = document.querySelector('.art-popup-area > .art-content > .art-text  > p:last-of-type');

let popupArtInfo = [
    {
        name:'꿈',
        artist : 'Pablo Picasso',
        year : '1932',
        img : 'img/artwork/picasso1.jpg'
    },
    {
        name:'우는 여인',
        artist : 'Pablo Picasso',
        year : '1937',
        img : 'img/artwork/picasso2.jpg'
    },
    {
        name:'아비뇽의 처녀들',
        artist : 'Pablo Picasso',
        year : '1907',
        img : 'img/artwork/picasso3.jpg'
    },
    {
        name:'기억의 지속',
        artist : 'Salvador Dali',
        year : '1931',
        img : 'img/artwork/salvador1.jpg'
    },
    {
        name:'욕망의 수수께끼',
        artist : 'Salvador Dali',
        year : '1929',
        img : 'img/artwork/salvador2.jpg'
    },
    {
        name:'melting watch',
        artist : 'Salvador Dali',
        year : '1954',
        img : 'img/artwork/salvador3.jpg'
    },
    {
        name:'구엘공원',
        artist : 'Antonio Gaudi',
        year : '1914',
        img : 'img/artwork/Gaudi1.jpg'
    },
    {
        name:'사그라다 파밀리아 대성당',
        artist : 'Antonio Gaudi',
        year : '1882 ~',
        img : 'img/artwork/Gaudi2.jpg'
    },
    {
        name:'카사 바트요',
        artist : 'Antonio Gaudi',
        year : '1912',
        img : 'img/artwork/Gaudi3.jpg'
    }
]

let ArtListLength = popupArtInfo.length;

artworkImage = Array.prototype.slice.call(artworkImage);
artworkImageTitle = Array.prototype.slice.call(artworkImageTitle);
let artPopupIndex = 0;
let artPopupInfoIndex = 0;


for(let i = 0; i < artworkImage.length; i++){
    artworkImage[i].addEventListener('mouseover',function(){
        artworkImageTitle[i].classList.add('active');
    })
    artworkImage[i].addEventListener('click', (e)=>{
        let target = e.currentTarget;
        artPopupIndex = artworkImage.indexOf(target);
        console.log('artPopupIndex',  artPopupIndex);
        artPopupContainer.classList.add('active');
        popupArtImage.setAttribute('src',popupArtInfo[artPopupIndex].img)
        popupArtName.innerText = popupArtInfo[artPopupIndex].name;
        popupArtArtist.innerText = popupArtInfo[artPopupIndex].artist;
        popupArtYear.innerText = popupArtInfo[artPopupIndex].year;
    })
}

for(let i = 0; i < artworkImage.length; i++){
    artworkImage[i].addEventListener('mouseleave',function(){
        artworkImageTitle[i].classList.remove('active');
    })
}
popupCloseBtn.addEventListener('click',()=>{
    artPopupContainer.classList.remove('active');
})




prevArrowBtn.addEventListener('click',()=>{
    artPopupIndex = artPopupIndex - 1;
    artPopupIndex < 0 && ( artPopupIndex = ArtListLength - 1);
    popupArtImage.setAttribute('src',popupArtInfo[artPopupIndex].img)
    popupArtName.innerText = popupArtInfo[artPopupIndex].name;
    popupArtArtist.innerText = popupArtInfo[artPopupIndex].artist;
    popupArtYear.innerText = popupArtInfo[artPopupIndex].year;
})

nextArrowBtn.addEventListener('click',()=>{
    artPopupIndex = artPopupIndex + 1;
    artPopupIndex > ArtListLength - 1 && (artPopupIndex = 0);
    popupArtImage.setAttribute('src',popupArtInfo[artPopupIndex].img)
    popupArtName.innerText = popupArtInfo[artPopupIndex].name;
    popupArtArtist.innerText = popupArtInfo[artPopupIndex].artist;
    popupArtYear.innerText = popupArtInfo[artPopupIndex].year;
})