const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const body = document.querySelector('body');
let imgs = [img1,img2,img3];

if(localStorage.img){
    body.style.backgroundImage = `url(${localStorage.img})`;
}

for(let item of imgs){
    item.addEventListener('click',(event) => {
        for(let element of imgs){
            if(element == event.target){
                let atribute = element.getAttribute('src');
                localStorage.img = atribute;
                body.style.backgroundImage = `url(${atribute})`;
            }
        }
        console.log(event.target)
    })
}