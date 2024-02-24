let input = document.querySelector('.input');
let button = document.querySelectorAll('button');

button.forEach(element => {
    element.addEventListener('click', (e) => {
       if(e.target.textContent === 'AC'){
        input.innerHTML = '';
       }else if(e.target.textContent === 'DE'){
            input.innerHTML = input.innerHTML.slice(0,-1);
       } else if(e.target.textContent === '='){
        input.innerHTML = eval(input.innerHTML)
       }
        else{
            input.innerHTML += e.target.innerHTML;
        }
    })
})