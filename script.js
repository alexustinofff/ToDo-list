//Добавление крестиков для удаления элементов

let myNodeList = document.getElementsByTagName('li');
let i;
for (i = 0; i < myNodeList.length; i++) {
let span = document.createElement("SPAN");
let txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
myNodeList[i].appendChild(span);
}

//Удаление элементов при нажатии

let close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

//Отметка выполненных заданий

let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if(ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

//Добавление нового элемента

function newElement() {
    let li = document.createElement('li');
    let inputValue = document.getElementById("myInput").value;
    let createText = document.createTextNode(inputValue);
    li.appendChild(createText);
    if (inputValue === '') {
        alert ('Пустое поле');
    }else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}