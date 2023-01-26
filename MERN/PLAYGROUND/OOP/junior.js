const Developer = require("./oop");
// ./ looks at the root of the file ../ take you back a folder
class JuniorDeveloper extends Developer{
    constructor(name, health, languages,iq){
        super(name, health, languages,iq);
        this.excited = 100;
    }
    train(){
        console.log(`I'm training on the following languages ${this.languages}`)
    }
    supported(target){
        target.health -= this.iq
        console.log(`${this.name} supported ${target.name}, providing ${this.iq} of intelligence!`)
        console.log(`${target.name} now has ${target.health} health.`)
    }
}

const junDev1 = new JuniorDeveloper("Kat", 10,  10, "swift", 10)
const junDev2 = new JuniorDeveloper("Matt", 10, 10,"Javascript", 10)

// junDev1.completedProjects("Super Ninja")
// console.log(junDev1)
// junDev1.train()
junDev1.supported(junDev2)