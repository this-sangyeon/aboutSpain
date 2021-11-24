let headerChangeHtml = document.querySelectorAll('header > .spainMenu > ul li a');
const title = document.querySelector('head > title');

headerChangeHtml = Array.prototype.slice.call(headerChangeHtml);
// title = Array.prototype.slice.call(title);
console.log(title);

for( let i = 0; i < headerChangeHtml.length; i++){
    headerChangeHtml[i].addEventListener('click', (e)=>{
        let htmlTarget = e.currentTarget;
        let index = headerChangeHtml.indexOf(htmlTarget);
        if(index === 0){
            console.log('click!!!');
            // title.appendChild('<meta http-equiv="refresh" content="2; url=./spainfinearts.html">');
            console.log('로딩 됨')
        }
    })
}