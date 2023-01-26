function remove(element){
    element.remove();
}

function add(element){
    document.querySelector(element).innerText++;
}

var nameSpan = document.querySelector(".d");

function setName(element){
    nameSpan.innerText = element.value;
}

function search(){
    alert("You are searching for " + nameSpan.value);
}
