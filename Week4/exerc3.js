// Consider the following object representing a car:
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "blue",
    mileage: 5000,
    isAutomatic: true,
  };
  
  /* Write a function called "carInfo" that takes a car object as a parameter and returns a string containing 
  information about the car in the following*/ 

  const carInfo = () => {
    console.log(`The ${car.make} with the model of ${car.model}`);
  }
  carInfo()
  



  // "The [year] [make] [model] is a [color] car with [mileage] miles on it."
  /* For example, if the car object passed to the function is the one defined above,
   the function should return:*/
  // "The 2020 Toyota Corolla is a blue car with 5000 miles on it."
  
  // function carInfo(carObject) {
  //   return `The ${carObject.year} ${carObject.make} ${carObject.model} is a ${carObject.color} car with ${carObject.mileage} miles on it.`;
  // }
  
//   Test the function with the provided car object
  // console.log(carInfo(car));


  const numbers = [65, 44, 12, 4];

  const newArr = numbers.map(index => {
			return index * 2})

  console.log(numbers);

  