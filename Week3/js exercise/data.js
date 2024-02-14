`use string`
// export const dataElement = 'ateryer';

//////////////////////////////////CURRENT DAY

const currentDate = new Date();
const currentDay=currentDate.getDay();
const currentHour = currentDate.getHours();
const currentmin = currentDate.getMinutes()

console.log(`Today: ${currentHour} ${currentmin}` );

////////////////////////////////Largest number

function largest(a, b, c) {
    if(a > b > c){
        return a;
     }else if(b > a > c){
        console.log(b)
    }else{
        return c;
    }
}
 
console.log(largest(2,6,9));
    

////////////////////////////////// ////50 -- 99

const nbr = (num1, num2,num3) => {

if ((num1 >= 50 && num1<=90) || (num2 <= 50 && num2 >= 90) || (num3 === 50 && num3 !== 90) ) {
    return true;
}else{
    return false
}

}
console.log(nbr(886,966,5));




















































































































































