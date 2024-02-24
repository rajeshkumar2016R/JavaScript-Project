let imgContent = document.querySelectorAll('.image-content');
let popUp = document.querySelector('.pop-up-image');
let closebtn = document.querySelector('.close');

imgContent.forEach(el => {
    el.addEventListener('click', () => {
        document.querySelector('.pop-up-image').classList.add('active');
    })
})

closebtn.addEventListener('click', () => {
    popUp.classList.remove("active");
})

let fullImage = document.querySelector('#b-img');
let smallmage = document.querySelector('#s-img');
let smallmage1 = document.querySelector('#s-img1');
let smallmage2 = document.querySelector('#s-img2');
let smallmage3 = document.querySelector('#s-img3');
let smallmage4 = document.querySelector('#s-img4');
let smallmage5 = document.querySelector('#s-img5');
let smallmage6 = document.querySelector('#s-img6');
let smallmage7 = document.querySelector('#s-img7');
let smallmage8 = document.querySelector('#s-img8');
let smallmage9 = document.querySelector('#s-img9');
let smallmage10 = document.querySelector('#s-img10');
let smallmage11 = document.querySelector('#s-img11');
let smallmage12 = document.querySelector('#s-img12');
let smallmage13 = document.querySelector('#s-img13');
let smallmage14= document.querySelector('#s-img14');



smallmage.onclick = function(){
    fullImage.src = smallmage.src;
}
smallmage1.onclick = function(){
    fullImage.src = smallmage1.src;
}
smallmage2.onclick = function(){
    fullImage.src = smallmage2.src;
}
smallmage3.onclick = function(){
    fullImage.src = smallmage3.src;
}
smallmage4.onclick = function(){
    fullImage.src = smallmage4.src;
}
smallmage5.onclick = function(){
    fullImage.src = smallmage5.src;
}
smallmage6.onclick = function(){
    fullImage.src = smallmage6.src;
}
smallmage7.onclick = function(){
    fullImage.src = smallmage7.src;
}
smallmage8.onclick = function(){
    fullImage.src = smallmage8.src;
}
smallmage9.onclick = function(){
    fullImage.src = smallmage9.src;
}
smallmage10.onclick = function(){
    fullImage.src = smallmage10.src;
}
smallmage11.onclick = function(){
    fullImage.src = smallmage11.src;
}
smallmage12.onclick = function(){
    fullImage.src = smallmage12.src;
}
smallmage13.onclick = function(){
    fullImage.src = smallmage13.src;
}
smallmage14.onclick = function(){
    fullImage.src = smallmage14.src;
}