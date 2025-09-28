let age = 18;
if (age>=18){
    console.log("Your are Elegebel to Vote");
}

let salary = 20;
if (salary==20){
    console.log("purchase Z900");
}

let hour = 5;
if(hour>=5 && hour<=10){
    document.write("Shubodaya");
}

let age1 = 16;
if (age1>=18){
    console.log("Your are Elegeble to Vote");
}else{
    console.log("Your are not Elegebel to Vote");
}

let salary01 = 10;
if(salary01==20){
    console.log("Purchase1 Z900");
}else{
    console.log("Purchase1 GT");
}

let hour1 = 17;
if(hour1>=5 && hour1<=10){
    document.write("Good Morning");
}else{
    document.write("Good Evening");
}

let score = 85;
if(score>=90){
    console.log("Grade:A");
}else if(score>=80){
    console.log("Grade:B");
}else{
    console.log("Grade:C");
}

let hour2=17;
if(hour2>=5 && hour2<=10){
    document.write("Very Good");
}else if(hour2>=16 && hour2<=20){
    document.write("Good");
}else{
    console.log("Evening");
}

let salary2 = 15;
if(salary2>=20){
    console.log("Purchase Benze");
}else if(salary2==15){
    console.log("purchase Scorpio");
}else{
    console.log("Purchase Maruthi 800");
}

let salary3 = 2;
if (salary3>=20){
    console.log("Purchase A");
} else if(salary3==15){
    console.log("Purchase: B");
}else if(salary3==10){
    console.log("purchase :c");
}else{
    console.log("Purchase: D");
}

let num = 10;
if(num>0){
    if(num%2===0){
        console.log("The number is positive and even");
    }else{
        console.log("The number is positive and odd");
    }
}else{
    console.log("The number is not a positive");
}

let salary4 = 2;
let emi=66;
if(salary4==20){
    if(emi==null){
        console.log("Purchase Z");
    }else{
        console.log("Settle your Emi");
    }
}else{
    console.log("Use tax");
}

let signalcolor = 'red';
switch(signalcolor){
    case 'red':
        document.write('<p>STOP</p>');
        break;
    case 'yellow':
        document.write('<p>Ready</p>');
        break;
    case 'green':
        document.write('<p>Go</p>');
        break;
    default:
        document.write('<p>Weight</p>');

}

let day = 3;
let dayName;
switch(day){
    case 1 : dayName = "Monday";
    break;
    case 2 :dayName = "Tuesday";
    break;
    case 3 : dayName = "Wednesday";
    break;
    case 4 : dayName = "Thursday";
    break;
    case 5 : dayName = "Friday";
    break;
    case 6 :dayName = "Saturday";
    break;
    case 7 :dayName = "Sunday";
    break;
    default: dayName = "Invalid day";
}
console.log(dayName);

let alpa = 'a';
switch (alpa){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u': console.log("Vowel");
    break;
    default :console.log("Not vowel");
    break;
}

let alph  = 'i';
switch (alph){
    case 'a' : console.log("Vowel");
    break;
    case 'e' : console.log("Vowel");
    break;
    case 'i' : console.log("vowel");
    break;
    case 'o' : console.log("vowel");
    break;
    case 'u' :console.log("vowel");
    break;
    default : console.log("Not vowel");
    break;
}

