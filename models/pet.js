"use strict"

let Entity = require("entitystorage")

class Pet extends Entity{
    initNew(name, breed, age){
        this.name = typeof name === "string" && name.length > 0 ? name : "John Doe Rex";;
        this.age = typeof age === "number" ? age : null;;
        this.breed = typeof breed === "string" && breed.length > 0 ? breed : null;
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