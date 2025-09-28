for (let i=0; i<=5; i++){
    console.log(i);
}

for (let i=0; i<=6; i++){
    document.write("<h3>Namaskara"+i+"</h3>");
}
for (let i=5; i>0; i--){
    document.write("<h3>HI</h3>")
}

for (let i=0; i<20; i++){
    if(i%2==0){
        document.write('<h4>'+i+'</h4>');
    }
}
for (let i=1; i<10; i++){
    console.log("2 x", i,"=",2*i);
}

console.log("While Loop");
let i=0;
while (i<5){
    console.log(i);
    i++;
}

console.log("Print 10 number");
let j=0;
while (j<10){
    console.log(j);
    j++;
}

console.log("2 Multiplication Table");
let h=1;
while(h<10){
    console.log("2 x",h,"=",2*h);
    h++;
}

document.write("while loop");

let numb = 0;
while (numb<20){
    if(numb%3==0){
        document.write('<h4>'+numb+'</h4>');
    }
    numb++
}

console.log("do..while loop");
let i1 =0;
do{
    console.log(i);
    i1 ++;
}while(i<5);

let r=1;
do{console.log("2x",r,"=",2*r);
    r++;
} while(r<10);

console.log("for...in loop");
const person = {fname:'jone', lname:'doe', age:25};
for (let key in person){
    console.log(key+":"+person[key]);
}

console.log("for...of loop");
const number = [1,2,3,4,5];
for(let no in number){
    console.log(no);
}

console.log("Nested loops");
for (let i=0; i<3; i++){
    console.log("***");
}

for (let i=0; i<3; i++){
    for(let j=0; j<3; j++){
        console.log("*");
    }
    console.log('\n');
}