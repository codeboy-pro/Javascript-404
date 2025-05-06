// const person={
//     greet(){
//         console.log("Hello!");

//     }
// };
// const student={
//     age:78,
// }
// Object.setPrototypeOf(student,person);


// student.greet();//Hello!


function person (name){
    this.name=name;

}
person.prototype.sayHello=function(){
    console.log(`Hi, I am ${this.name}`);

};
const raj=new person("Raj");
raj.sayHello();//Hi ,I am Raj








