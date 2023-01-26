console.log('Hello from the script file!')

function exampleFunction(element){
    console.log("Element clicked" , element)
}
function exampleFunction2(element){
    console.log("Element clicked" , element.innerText)
}

function lightSwitch(element){
    element.innerText = "Off";
}