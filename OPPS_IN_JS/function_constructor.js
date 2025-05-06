function person(name,age){
    this.name=name;
    this.age=age;
    
}

function car(make,model){
    this.make=make
    this.model=model

}
let mycar=new car("Toyota","camry");
// console.log(mycar);
let my_new_car=new car("Tata","Safari");
// console.log(my_new_car);

function Tea (type){
    this.type= type;
    this.describe=function(){
        return `this is a cup of ${this.type}`

        
    }
}

let lemonTea= new Tea("lemon tea");
// console.log(lemonTea.describe());


function animal(species){
    this.species=species;

}
animal.prototype.sound= function(){
    return `${this.species} makes a sound`;
}
let dog=new animal("Dog");
// console.log(dog.sound());
let cat=new animal("cat");
// console.log(cat.sound());


function drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new");

    }
    this.name=name;

}

let tea =new drink("tea");
let coffee= drink("coffee");


