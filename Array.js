let fruits = ['Apple','Banana','Cherry'];
console.log(fruits);

let vajeed = [89,90,86,149];
let vijay = [20,65,78,32];
let arun = [89,35,35,68];
console.log(vajeed);
console.log(vijay);
console.log(arun);

var cources = ['HTML', 'CSS', 'Js', true, 56];
console.log(cources);

let fruits1 = new Array ('Mango', 'Pinnaple');
console.log(fruits1);
let firstfruit = fruits[0];
console.log(firstfruit);

console.log(fruits.length);

fruits[1] = 'Blueberry';
console.log(fruits);

fruits.push('Date');
console.log(fruits);

let f1 = fruits.pop();
console.log(f1);
console.log(fruits);

let fruits2 = fruits.shift();
console.log(fruits2);
console.log(fruits);

fruits.unshift('Grappes');
console.log(fruits);

fruits.splice(1,1,'Chery');
console.log(fruits);

fruits.forEach(function(fruit){
    console.log(fruit);
});
console.log(fruits);

let upperCaseFruits = fruits.map
(fruit=>fruit.toUpperCase());
console.log(upperCaseFruits);

let longName = fruits.filter(fruit=>fruit.length>6);
console.log(longName);

let totallength = fruits.reduce((total,fruit)=>total+fruit.length,0);
console.log(totallength);

console.log(cources.indexOf('CSS'));

console.log(fruits1.sort());

let shashi = new Array(100,101,102);
let size = shashi.length;
for(let i=0; i<size; i++){
    console.log(shashi[i]);
}
vajeed.forEach((item)=>{
    console.log(item);
})
