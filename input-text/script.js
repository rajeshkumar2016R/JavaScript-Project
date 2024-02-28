

let btnSet = document.querySelector("#set");
let btnGet = document.querySelector("#get");
let inputSet = document.querySelector("#input-set");
let inputGet = document.querySelector("#input-get");
let text = document.querySelector(".Text");

btnSet.addEventListener('click', () => {
    text.innerText = inputSet.value;
})

btnGet.addEventListener('click', () => {
    inputSet.value = inputGet.value;
})

