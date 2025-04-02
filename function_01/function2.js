function calculate_cart_price(val1,val2, ...num1){//here ... is rest operator
return num1;
}

console.log(calculate_cart_price(200,400,500,900));

const user={

    user_name:"Pradip",

    price: 199

}

function handle_obj(any_obj){//argument
    console.log(`Username is ${any_obj.user_name} and price is ${any_obj.price}`);

}
handle_obj(user);//parameter
handle_obj({
    user_name:   "sam",
    price:  390
});

const arr=[200,400,500,700];

function return_second_value(get_array){
    return get_array[1];
}

console.log(return_second_value([200,900,100,1000]));
