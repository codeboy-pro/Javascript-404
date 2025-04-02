const name="Pradip";
const repoCount=50;
console.log(name+ repoCount +"value");

console.log(`Hello my name is ${name} and my repo is ${repoCount}`);//string interpolation


let game_Name= new String('Pradip');
console.log(game_Name);


console.log(game_Name[0]);
console.log(game_Name[1]);
console.log(game_Name[2]);
console.log(game_Name[3]);
console.log(game_Name[4]);
console.log(game_Name.__proto__);


console.log(game_Name.length);
console.log(game_Name.toLowerCase());
console.log(game_Name.charAt(4));
console.log(game_Name.indexOf('d'));



const newString= game_Name.substring(0,4);
console.log(newString);

const anotherString= game_Name.slice(-5,4);
console.log(anotherString);


const newString1="   Pradip  ";
console.log(newString1);
console.log(newString1.trim());



const url= "https//p-rad-ip.com/pradip20%Ma-ity";
console.log(url.replace('20%','_'));
console.log(url.includes('Maity'));
console.log(url.split('-'));