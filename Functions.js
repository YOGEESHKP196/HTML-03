function greet(){
    console.log("Hello World");
}
greet();

function displayName(){
    console.log("Yogee");
}
displayName();

function sayHello(){
    document.write("Namaskara");
}
sayHello();

const geet1 = function(){
    console.log("Hello World!");
};
geet1();

const greet2 = () =>{
    console.log("Arrow Function");
}
greet2();

(function(){
    console.log("This is Invoked function");
})
();

console.log("Parameters and Arguments");
function add(a,b){
    return a+b;
}
console.log(add(5,3));

function displayName(name){
    console.log(name);
}
displayName("Yogee");
displayName("Shiva");

function display1 (name,age){
    console.log(name,age);
    if(age>18){
        return "Elegebel for vote";
    }else{
        return "Go watch Pogo";
    }
}
let a=display1("A",32);
let b=display1("B",22);
let c=display1("C",20);
console.log(a);
console.log(b);
console.log(c);

function sayHello1(){
    let name = 'Ankita';
    document.write('Namaskara'+name);
}
sayHello1();

function sayHello2(name){
    document.write('<p>Shubodaya '+name,'</p>');
}
sayHello2("Harshita");

function d1(name,age){
    console.log(name,age);
    return age+10;
}
let a1=d1('vajeed',24);
console.log(a1);

function sayHello3(name,age){
    document.write('<p>Namaskara '+name+' you are '+age);
}
sayHello3('Yogee',25);

function add(num1, num2){
    return num1 + num2;
}
document.write('<p>'+add(3,6)+'</p>');

function exitMsg(name){
    document.write('<h3> Thank you '+name+' for visiting </h3>');
}

function multiply(a,b){
    return a*b;
}
console.log(multiply(4,5));

function example(){
    let message = "Hello";
    console.log(message);
}
example();

function returnOne (one){
    if(one==1){
        return 1;
    }else{
        return returnOne(one-1);
    }
}
let a2=returnOne(10);
console.log(a2);

function fact(num){
    if(num<=1){
        return 1;

    }else{
        return num*fact(num-1);
    }
}
let a3=fact(5);
console.log(a3);