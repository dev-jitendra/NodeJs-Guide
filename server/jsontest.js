const obje = {
    name:'jitendra',
    age: 26,
    address:'indore'
}
console.log(obje.age);

// object to json 
const jsondata= JSON.stringify(obje);
console.log(jsondata);

// json to object
const objedata=JSON.parse(jsondata)
console.log(objedata);