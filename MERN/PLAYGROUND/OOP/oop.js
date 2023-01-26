class Developer {
    // we are going to call on a constructor
    constructor(name, health = 50, iq = 55, languages){
        this.name = name
        this.health = health
        this.iq = iq
        this.languages = languages
    }
    // methods below
    sleep(){
        console.log("Zzzzzzzz")
        this.iq += 5
        this.health += 10
        return this
    }
// `${this.name}` is the syntax for grabbing javascript, similiar to an f string in python
    completedProjects(title){
        console.log(`${this.name } completed a project named ${title}` )
        this.iq -= 2
        this.health -= 4
        return this
    }
}

const dev1 = new Developer("Ruben", 20, 50, "Python")
const dev2 = new Developer("Kevin", 10, 5, "Python")

// console.log(dev2)
// dev2.sleep()
// console.log(dev2)
// console.log(dev1)
// dev1.sleep()
// dev1.completedProjects("Javascript")
// console.log(dev1)

// module.exports = Developer;
// the equal sign was incorrect here
// module.exports = Developer;
// i had to delete the space between exports and = 

// const Developer = require("./oop");
// ./ looks at the root of the file ../ take you back a folder

// ---------------------------------
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
console.log(junDev1)
// junDev1.train()
junDev1.supported(junDev2)