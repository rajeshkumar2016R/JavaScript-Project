let input = document.querySelector('.input');
let container = document.querySelector('.container');

function addTask() {
    if (input.value === '') {
        alert("Please enter your task")
    }
    else {
        let list = document.createElement('li');
        list.innerHTML = input.value;
        container.appendChild(list);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        list.appendChild(span);
    }
    input.value = '';
    saveData();
}

container.addEventListener("click", (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
        
    }
},false);

function saveData(){
    localStorage.setItem('data' , container.innerHTML);
}
function showTask(){
    container.innerHTML = localStorage.getItem('data');
}
showTask();