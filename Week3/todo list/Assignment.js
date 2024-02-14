const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
];
/////////////Filter and show the product that will be bought when you don't have much money (Cheap one)
const result = items.filter((notExpensive) => notExpensive.price < 100);
// console.log(result);

//////////Filter and show the product that will be expensive in the array
const expensive = items.filter((expensive) => expensive.price > 500);
// console.log(expensive);
expensive.map((item)=> 
console.log(item.name)
)

//////////////////Calculate the full price of all products combined
const totalPrice = items.reduce((item1,item2) => {
    item1 + item2.price,0;
})
    
// console.log(totalPrice);
 
// const totalPrice = items.reduceRight(total)
// function total(a,b) {
//     return a+b.price
// }
// console.log(totalPrice);

////////////Filter and show the product that will  be start with letter b at first postion
const startWithB = items.filter((withB) => withB.name.charAt(0) .toString().toLowerCase() , ('b'))
// console.log(startWithB);

/////////////Calculate the full price of all products combined and remove products that are under $10

const expensiveItems = items.filter(item => item.price > 10);
const totalExclusiveTeens = totalPrice - expensiveItems

console.log( totalExclusiveTeens);

