let car={
    make: "Toyota",
    model:"camry",
    year: 2020,
    start: function(){
        return `${this.make} car got started in ${this.year}`
    },

};
// console.log(car.start());



function person(name,age){
    this.name=name
    this.age=age

}

let john= new person("JOhn Das",20);
// console.log(john.name);


function animal(type){
    this.type=type

}
animal.prototype.speak=function(){
    return `${this.type} makes a sound`

}
Array.prototype.pradip=function(){
    return `custom method ${this}`;

};
let myArray=[1,2,3];
console.log(myArray.hitesh());
let mynewArray=[1,2,3];
console.log(mynewArray.pradip());

