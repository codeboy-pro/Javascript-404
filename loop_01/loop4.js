const myObj={
    js:"javascript",
    cpp:"c++",
    rb: "ruby",
    swift:"swift by apple"
}

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
    
}
const programming=["js","cpp","py","java","rb"];
for (const key in programming) {
//    console.log(programming[key]);
   
}

const map= new Map()
map.set('IN',"India");
map.set('USA',"United state of america");
map.set('Fr',"France");

for (const key in map) {
    console.log(key);

    
   
}