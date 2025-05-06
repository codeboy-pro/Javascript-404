let computer={
    cpu:  12,
}
let lenovo={
    screen: " HD",
    __proto__:computer,
}
// console.log(`lenovo`,lenovo.__proto__);


let generic_car={tyres:4,

};
let tesla={driver:"AI"};

Object.setPrototypeOf(tesla,generic_car)

const student={
    age:78,
}
console.log(`tesla `,generic_car); 

// console.log(`tesla `,tesla.tyres); 
// console.log(`tesla `,Object.getPrototypeOf(tesla)); 

