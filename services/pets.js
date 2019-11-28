"use strict"

let Pet = require("../models/pet")

class PetService{
    all(){
        return Pet.search("tag:pet").map(p => p.toObj())
    }

    get(name){
        let pet = Pet.lookup(name)
        return pet ? pet.toObj() : null;
    }

    add(name, breed, age){
        return new Pet(name, breed, age).toObj()
    }

    del(name){
        let pet = Pet.lookup(name)
        if(pet){
            pet.delete()
        }
    }
}

module.exports = new PetService()