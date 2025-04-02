// const tinderuser=new Object();//singelton object
const tinderuser={};//Non singleton object

tinderuser.id="123abc";
tinderuser.name="sammy";
tinderuser.isloggedin=false;



// console.log(tinderuser);
const regularuser={
    email:"podo@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Pradip",
            lastname:"Maity"

        }
    }
}
// console.log(regularuser.fullname.userfullname.lastname);
const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2};
// const obj3=Object.assign({},obj1,obj2);
// console.log(obj3);
const obj3={...obj1,...obj2};
console.log(obj3);



// console.log(obj3);



const users=[
    {
        id:1,
        email:"p@gmail.com"
    },
    {
        id:2,
        email:"t@gmail.com"
    },
    {
        id:3,
        email:"6@gmail.com"
    }
]
users[1].email;
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasownproperty('isloggedin'));
