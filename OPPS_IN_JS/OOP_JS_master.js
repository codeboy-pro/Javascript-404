let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function (parameter) {
    return `${this.make} car  got started in ${this.year}`;
  },
};
console.log(car.start());

function Person(name, age) {
  this.name = name;

  this.age = age;
}

let john = new Person("John Doe", 20);

// console.log(john.name);

function animal(type) {
  this.type = type;
}

animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

Array.prototype.pradip = function () {
  return `Custom metod ${this}`;
};

let my_array = [1, 2, 3];
console.log(my_array.pradip());
let my_new_array = [1, 2, 3, 67, 8, 9, 10];
console.log(my_new_array.pradip());



class vehicle{
    constructor(make,model){
        this.make=make;
        this.model=model;

    }
start(){
    return `${this.model} is a car from ${this.make}`;

}
}

class Car extends vehicle{
    drive(){
        return `${this.make} : This is an inheritance example `;

    }
}
let myCar= new Car("Toyota", "Corolla");
// console.log(myCar.start());
// console.log(myCar.drive());


let vehicle1 = new vehicle("Toyota","corolla");
console.log(vehicle1.make);
class bank_account{//encapsulation

    #balance=0;

    deposit(amount){
      this.#balance +=amount;
      return this.#balance;

    }
    get_balance(){
      return `$ ${this.#balance}`;
     
    }

}

let account =new bank_account();

// console.log(account.get_balance());


// Abstraction  
class coffeMachine{
  start(){
    //call DB
    //filter value
    return 'Starting the Machine.....';

  }
  brewcoffee(){
    //complex calculation
    return `Brewing Coffee;
    `
  }
pressstart_button(){
  let msg1=this.start();
  let msg2=this.brewcoffee();
  return `${msg1} ${msg2}`;

}

}

let myMachine =new coffeMachine();
  // console.log(myMachine.start());
  // console.log(myMachine.brewcoffee());
  console.log(myMachine.pressstart_button());

class bird{
  fly(){
    return `Flying...`;

  }
}

class penguin extends bird{
  fly(){
    return `penguins can't fly`;

  }
}

let Bird =new bird();
let pp=new penguin();
// console.log(Bird.fly());
// console.log(pp.fly());


//static method 


class calculator{
  static add(a,b){
    return a+b;
  }
}

// let minical=new calculator();
// console.log(minical.add(2,3));

// console.log(calculator.add(2,3));


// getters and setters
class employee{

  #salary;
  constructor(name,salary){
    if(salary<0){
      throw new Error("Salary cannot be in negative");
      
    }
    this.name=name;
    this.#salary=salary;

  }
get salary(){
  return `You are not allowed to see salary`;
}
set salary(value){
  if(value<0){
    console.log("Invalid salary");

  }else{
    this._salary=value;
  }
}
  
}
let emp=new employee("Alice",-50000);
console.log(emp.salary);
emp.salary=-60000;
