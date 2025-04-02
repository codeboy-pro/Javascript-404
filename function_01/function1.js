function say(){
    console.log("P");
    console.log("r");
    console.log("a");
    console.log("d");
    console.log("i");
    console.log("P");
}

// say();


// function add(num1,num2){//arguments
//     console.log(num1+num2);

// }

function add(num1,num2){//arguments
//    let result=num1+num2;
//    return result;
return num1+num2;

}
const result=add(3,5);//parameters


console.log("Result:",result);

function loginusermessage(username="podo"){
    if(!username){

        console.log("Please enter a user name");

return;
    }
    return `${username} just logged in`;
}

console.log( loginusermessage("pradip"));

console.log( loginusermessage());
