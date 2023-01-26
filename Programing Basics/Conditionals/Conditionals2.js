var coin = .05;
var coinType;

if(coin > 10){
    console.log("that's a quarter");
    coinType = "quarter"
}
else if(coin > 5){
    coinType = "dime";
}
else if(coin > 1){
    coinType = "nickel";
}
else if(coin == 1){
    coinType = "penny";
}
else{
    console.log("that's too small!");
}

console.log("and that's your coin!");


var isRaining = false;
var isSunny = true;
var temp = 25;
if(temp > 60 && isRaining){
    console.log("you should bring an umbrella");
}
else if(temp <= 60 && isRaining){
    console.log("you should wear a rain jacket")
}
else if(temp > 60 && !isRaining){
    console.lorg("sounds nice! have fun!");
}
else if(temp >= 45 && temp <= 60 && !isRaining){
    console.lorg("maybe a sweater is good")
}
else{
    console.log("you should wear a coat")
}

if(isSunny || temp > 80){
    console.log("maybe try to bring some sunglasses!")
}

//define variables 


//&& AND all must be true to be true
//II OR one must be true to be true

