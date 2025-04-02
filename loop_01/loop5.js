const coding=["js","ruby","java","python","cpp"];


// coding.forEach( function (item){
//     console.log(item);
    
// });
// coding.forEach((item)=>{
// console.log(item);

// });

function printMe(item){
    console.log(item);

}
// coding.forEach(printMe);

// coding.forEach((item,Indx,arr)=>{
//     console.log(item,Indx,arr);
    
// });

const mycoding=[
    {
        language:"Javascript",
        languageFileName:"js",

    },
    {
        language:"java",
        languageFileName:"java",

    },
    {
        language:"python",
        languageFileName:"py",

    },

]

mycoding.forEach(  (item)=>{
    console.log(item.language);
    

});