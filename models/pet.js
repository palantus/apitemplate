"use strict"

let Entity = require("entitystorage")

class Pet extends Entity{
    initNew(name, breed, age){
        this.name = name && typeof name === "string" ? name : "John Doe Rex";;
        this.age = age && typeof age === "number" ? age : null;;
        this.breed = breed && typeof breed === "string" ? breed : null;
        this.tag("pet")
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