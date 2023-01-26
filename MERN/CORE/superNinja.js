class Ninja {
    // we are going to call on a constructor
    constructor(name, health, speed = 3, strength = 3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }

        
    sayName(){
        console.log(`${this.name} is logged`)
        return this
    }
    showStats(){
        console.log(`${this.name}, ${this.health}, ${this.speed}, ${this.strength}`)
        return this
    }
    drinkSake(){
        this.health += 10
        return this
    }
}

const ninja1 = new Ninja("Mike", 100)
// ninja1.sayName().showStats()
// ninja1.drinkSake()
// console.log(ninja1)

class Sensei extends Ninja{
    constructor(name, health=200, speed=10, strength=10, wisdom=10){
    super(name)
    this.health = 200
    this.speed = 10
    this.strength = 10
    this.wisdom = 10
    }
    speakWisdom(){
     super.drinkSake()
     console.log("Smart man talk")
     return this
    }
    showStatsChild(){
        let statsMessage = super.showStats()
        console.log(statsMessage)
        return this
    }
    
}
const sensei1 = new Sensei("David");

console.log(sensei1)
sensei1.showStatsChild(sensei1)
sensei1.speakWisdom(sensei1)
sensei1.showStatsChild(sensei1)