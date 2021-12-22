let artworkImage = document.querySelectorAll('.artwork > img');
let artworkImageTitle = document.querySelectorAll('.artwork > div');
const headerNavList = document.querySelectorAll('.spainMenu > ul li a');
const artPopupContainer = document.querySelector('.art-popup-container');
const popupCloseBtn = document.querySelector('.popup-close-btn > button');
const prevArrowBtn = document.querySelector('.popup-img-arrow > .prev');
const nextArrowBtn = document.querySelector('.popup-img-arrow > .next');
const popupArtImage = document.querySelector('.art-popup-area > .art-image img');
const popupArtName = document.querySelector('.art-popup-area > .art-text h2');
const popupArtArtist = document.querySelector('.art-popup-area > .art-text p:first-of-type');
const popupArtYear = document.querySelector('.art-popup-area > .art-text p:last-of-type');

let popupArtInfo = [
    {
        name:'name',
        artist : 'artist',
        year : 'Year',
        img : 'img/artwork/picasso1.jpg'
    },
    {
        name:'name',
        artist : 'artist',
        year : 'Year',
        img : 'img/artwork/picasso2.jpg'
    },
    {
        name:'name',
        artist : 'artist',
        year : 'Year',
        img : 'img/artwork/picasso3.jpg'
    },
    {
        name:'name',
        artist : 'artist',
        year : 'Year',
        img : 'img/artwork/salvador1.jpg'
    },
    {
        name:'name',
        artist : 'artist',
        year : 'Year',
        img : 'img/artwork/salvador2.jpg'
    },
    {
        name:'name',
        artist : 'artist',
        year : 'Year',
        img : 'img/artwork/salvador3.jpg'
    },
    {
        name:'name',
        artist : 'artist',
        year : 'Year',
        img : 'img/artwork/picasso1.jpg'
    },
    {
        name:'name',
        artist : 'artist',
        year : 'Year',
        img : 'img/artwork/picasso1.jpg'
    },
    {
        name:'name',
        artist : 'artist',
        year : 'Year',
        img : 'img/artwork/picasso1.jpg'
    }
]

artworkImage = Array.prototype.slice.call(artworkImage);
artworkImageTitle = Array.prototype.slice.call(artworkImageTitle);
artPopupIndex = 0;


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

const prevArrowBtn = document.querySelector('.popup-img-arrow > .prev');
const nextArrowBtn = document.querySelector('.popup-img-arrow > .next');
let ArtListLength = popupArtInfo.length;

prevArrowBtn.addEventListener('click',()=>{

})