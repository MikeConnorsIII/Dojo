console.log('All is well in the script file!');

function changeText(element){
    console.log(element.innerText)
    element.innerText = "new text"
}


//this function will change the value of pikachu to riachu
function evolvePokemon(){
    console.log(document.querySelector('#pokemon').innerText)
    if(document.querySelector('pokemon').innerText == 'Riachu'){
        document.querySelector('pokemon').innerText = 'Pikachu'
    }
    else{
    document.querySelector('#pokemonPic').src = ''
    document.querySelector('#pokemon').innerText = 'Riachu'
    }

}

function addH1(){
    document.querySelector('.container')
    target.innerHTML += '<h1>A wild H1 appears!</h1>'
}
