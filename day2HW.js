//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
const favoriteFood=(person3)=>{
    favoritefood=Object.values(person3)
    }
favoriteFood(person3)
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

function Persona(name,age,sign){
    this.name = name;
    this.age = age;
    this.sign = sign;

    this.personalInfo=()=>{
        console.log(`${name} is ${age} and their sign is ${sign}.`)
    };
    this.aging()=()=>{
        age++;
    };
}
let iwona = new Persona("Iwona", 27, "virgo")
let dylan= new Persona("dylan", 99, "capricorn?" )

iwona.personalInfo();
dylan.personalInfo();


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
let p= new Promise((resolve,reject)=>{
    let word="studying"
    if(word>10){
        resolve('Big Word')
    }else{
        reject('Small Word')
    }
})
//Your task is to check if the gunners are loaded and ready, if they are: Fire! If they aren't ready: Shiver me timbers!
//Your gunners for each test case are 4 or less.When you check if they are ready their answers are in a dictionary and will either be: aye or nay
//Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)
//If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!

const cannonsReady = (gunners) => {
    for (var i in gunners) {
        if (gunners[i] == "nay") {
          return "Shiver me timbers!"
        }
    }
  return "Fire!"
}
//Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases
//Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
//Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. 
//In RNA Thymine is replaced by another nucleic acid Uracil ('U').
//Create a function which translates a given DNA string into RNA.
//For example:
//"GCAT"  =>  "GCAU"
//The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e.
// each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

function DNAtoRNA(dna) {
    for (var i = 0; i < dna.length; i++)
    {
      dna = dna.replace('T', 'U');
    }
    
    return dna;
  }