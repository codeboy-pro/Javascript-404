//singleton
//objlect literals
// Object.create()

const mysym=Symbol("key1");

const jsuser={
    name:"Pradip",
    "full name":"Pradip Maity",
    [mysym]:"mykey1",
    location:"Tamluk",
    useremail:"pradip@gmail.com",
    isloggin:false,
    lastlogindate:["Monday","sunday"]
  
};
console.log(jsuser.location);
console.log(jsuser["location"]);
console.log(jsuser["full name"]);
console.log(jsuser[mysym]);
console.log(typeof jsuser[mysym]);



// jsuser.email="Malay.com";
// Object.freeze(jsuser);
// jsuser.email="Malay.com";
// console.log(jsuser);

jsuser.greetings=function(){
    console.log("Hello,Pradip Maity");

}
jsuser.greetings2=function(){
    console.log(`Hello,js user,${this["full name"]}`);

}
console.log(jsuser.greetings());
console.log(jsuser.greetings2());