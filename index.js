'use strict';
/*const name="Kishore";
const age=18;
const job="Developer";

 const kise= `I'm ${name} a ${age} years old ${job}`;
console.log(
`Kiee
kkki 🛩`);


//🖐  use `` - for string literal

const eli= age >= 18;

if(eli){
    console.log(`Hey ${name} you are eligible to drive 😇`);
}
else{
    console.log(`Your not eligible because your age is ${age}`);
}
console.log('10'* '2');
let ans=Number(prompt(`What is ${name}'s favorite number`));

if (ans===23){
    console.log(`Yes you madde it ${ans} is a lucky number`);
}
else if(ans!==24){
    console.log(`Damnnnnn`);
}
*/
//Challenge 2
/*
let a1=105,a2=111,a3=100;
let b1=120,b2=85,b3=110;

let a=(a1+a2+a3)/3,b=(b1+b2+b3)/3;
if (a===b && a>=100){
    console.log(`Its a tie. Score is ${a}`)
}
else if(a>b && a>=100){
    console.log(`A is Winner 🏆  and leading with ${a-b}`);
}
else if(b>=100){
    console.log(`B is winner 🏆  and leading wiht ${b-a}`);
}
else{
    console.log('No team won');
}
*/ 
/*
k=prompt('Enter the day');
console.log(k);
switch(k){
    case 'monday':
        console.log('Entered kise');
        break;
    case 'mon':
        console.log('OOOOps');
        console.log('Wine 🍷')
        break;
    default:
        console.log('Deafault');
        break;
}

const val= k ==='kise' ? 'Sucess' : 'Error';
console.log(val);

const value=prompt('Enter name');
console.log(`Hi name is ${value}  and i am the ${value==='kishore'?'CEO':'Staff'}`);
*/

/*
const bill=Number(prompt('Enter Bill amount'));

let val = bill>=50 && bill<=300 ? 15:20;
let tips=bill/100*val;
console.log(`THe bill was ${bill}, the tips was ${tips} and 
the total amount is ${bill+tips}`);
let kise= (name,game)=> {
    return 'Kishore'+name+game};
console.log(kise('me','welcome'));
*/
/*
let calavg=(a,b,c)=> (a+b+c)/3;
let winner=(avg1,avg2)=>{
    if (avg1>avg2 && avg1>=(2*avg2)){
        console.log(`Dolphins is Winner (${avg1} vs ${avg2})`);
    }
    else if(avg2>avg1 && avg2>=(2*avg1)){
        console.log(`Koalas is Winner (${avg2} vs ${avg1})`);
    }
    else{
        console.log(`Its a tie ${avg1} and ${avg2}`);
    }
}

let avg1=calavg(30,35,25);
let avg2=calavg(20,12,12);
winner(avg1,avg2);
*/
// let kise= new Array('me',123,'le','test');
// console.log(kise);
// console.log(kise[kise.length-1]);
// let me=['welcome','try'];
// console.log(me);
// kise.push(me);
// console.log(kise);

// let obj={
//     name:'Kishore',
//     age:20,
//     location:'Coimbatore'
// };
// let newobj=Object(obj);
// let usr=prompt('E=Whart your frnd best friend? 📅 ');
// console.log(obj);

const temp=function(temps){
    let ab='';
    for(let i=0;i<temps.length;i++){
        ab+=`... ${temps[i]}°C in ${i+1} days `;
    }
    ab+='...';
    console.log(ab);
}

const arr=[-5,2,4];
const arr1=[10,-3,2,7];

temp(arr);
temp(arr1)