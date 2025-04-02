const user={
    username:"Pradip",
    price:999,
welcomeMessage:  function(){
    console.log(`${this.username}, welcome to website`);
    console.log(this);
}

}
// user.welcomeMessage();
// user.username="ram";
// user.welcomeMessage();
// console.log(this);

// function chai(){
//     let username="pradip";
//    console.log(this.username);
// }
// chai();

// const chai=function(){
//     let username="Pradip";
//     console.log(this.username);
// }










const chai=()=>  {
    let username="Pradip";
    console.log(this);
}



chai();



// const addTwo=  (num1,num2)=>{
// return num1+num2;
// }//explicitely return 



// const addTwo=  (num1,num2)=> num1+num2;



// const addTwo=  (num1,num2)=> (num1+num2);//implicit return 
const addTwo=  (num1,num2)=> ({username:"Pradip"});





console.log(addTwo(8,1));


const array=[2,4,6,8,9,10];
array.forEach(()=>{

})

