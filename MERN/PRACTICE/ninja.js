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
        console.log(`${this.name}, ${this.health}, ${this.speed}, ${this.strength}, `)
        return this
    }
    drinkSake(){
        this.health += 10
        console.log(`${this.name} drank some sake and gained 10 health!`)
    }
}

const ninja1 = new Ninja("Mike", 100)
ninja1.sayName().showStats()
ninja1.drinkSake()
console.log(ninja1)