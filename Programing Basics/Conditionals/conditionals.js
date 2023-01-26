console.log("hey it's me, the js file!");

var classList = ["Mike","Anthony","Charlie","Balakimwe","Harry"];
var numbers = [4,8,15,16,23,42];
console.log(classList); //prints full array
console.log(classList.length);
console.log(classList[0]);//gives first element
console.log(classList[classList.length-1]);//always gets last element of the array

classList.push("Rochelle");
classList.push("Tugs");
classList.pop();
classList.splice(0,1);//remove one thing 
console.log(classList);
console.log(classList[classList.length-1]);


