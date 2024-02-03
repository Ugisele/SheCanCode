// function evenNbr(w) {
//     if (w%2 === 0) {
//         return "it's any even number ";   
//     }else if(w%2 !== 0){
//         return "Odd number";
//     }else{
//         console.log("it should be a number");
//     }
// }

// console.log(evenNbr('hh'));

// //SWITCH CASE

// // switch (new Date().getDay()) {
// //     case 0:
// //         day ='Sunday'
// //         break;
// //         case 1:
// //         day ='monday'
// //         break;
// //         case 2:
// //         day ='Tue'
// //         break;
// //         case 3:
// //         day ='Wed'
// //         break;
// //         case 4:
// //         day ='Thur'
// //         break;
// //         case 5:
// //         day ='Fri'
// //         break;
// //         case 6:
// //         day ='Satur'
// //         break;

// //     default:
// //         break;
// // }


// //OBJECTSSSSSSSSSSSSSSSSS...........


// const me = new Date();
// const pow= Math.pow(me,2);
// console.log(me , pow)

// //LOOPS


// for (let i = 0; i < 5; i++) {
//     console.log('hey you!!');
    
// }
// const carArray = [21,34,56,55,6,78]
// for (let i = 0; i < carArray.length; i++) {
//     console.log(carArray[i]+1);
    
// }
// const car = [21,34,56,55,6,78]
// for (let i = 0; i < car.length; i++) {
//     if (car[i]%2 == 0) {
//         console.log(car[i] + ' this is any even number');
        
//     }else{
//         console.log(car[i] + ' it,s odd number');
//     }
//     // console.log(car[i]+1);
    
// }

// console.log(carArray);



// function fact(a){
//     let fact =1

//     // b = a; MINEEEEEEEEEEEEEE
//     // b *= a
//     if(a == 0){
//         console.log('not a number');
//     }
//     for (let i=1; i<= a; i++){
//         fact=fact * i;

//     }  
//     return fact;  
// }
// console.log(fact(7));

///// FUNCTION THST ADD TWO NBR

// function Sum(a,b) {
//     const sum =a+b;
//     return sum;
    
// }
// console.log(Sum(4,5));

/// USING ARROW FUNCTION
// const result = (a,b) => {
//     const result = a+b;
//     return result;
// }
// console.log(result(1,6));

// //2
// import readline from "readline";

// let rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// let a,b
// rl.question('enter the second number: ', (inputA) => {
//     a = parseFloat(inputA);
//     rl.question('enter the second number: ', (inputB) => {
//         b = parseFloat(inputB);
//     }

// })

////MAX NBR IN ANY ARRAY

// const arr = [2000000000,4,6,7,8,99,55500];
// const result = Math.max(...arr)

// console.log(result);


// function maxNbr()

import {dataElement} from "./data.js";

const text = () => {
    
   
        if (dataElement !== isNaN && dataElement.includes('w') && dataElement.length===8) {
            return true;
        }else{
            return false;
        }
        
    }  
     
console.log(text());
