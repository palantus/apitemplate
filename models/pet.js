"use strict"

let Entity = require("entitystorage")

class Pet extends Entity{
    initNew(name, breed, age){
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.tag("pet")
        console.log(`Created new pet: ${name}`)
    }

    static lookup(name){
        return Pet.find(`tag:pet prop:"name=${name}"`)
    }

    toObj(){
        return {
            id: this._id,
            name: this.name,
            age: this.age,
            breed: this.breed
        }
    }
}

module.exports = Pet