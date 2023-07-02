//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Array of ages are " + ages)
        // a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
        //  - Do not use numbers to reference the last element, find it programmatically.
        // - ages[7] - ages[0] is not allowed!
        console.log("1.a: The difference of first element of array from last element of the array is " + (ages[ages.length-1] - ages[0]));
    // b.  Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
    ages.push(37);
    console.log("Updated array of ages are " + ages);
    console.log("1.b: The difference of first element of array from last element of the array is " + (ages[ages.length-1] - ages[0]));
    // c. Use a loop to iterate through the array and calculate the average age.
    const average = ages.reduce((a, b) => a + b, 0) / ages.length;
    console.log("1.c: The average age from the array is " + Math.ceil(average))

//2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log("Array of names are " + names); 
    // a. Use a loop to iterate through the array and calculate the average number of letters per name.
    for (let i = 0; i < names.length; i++) {
        console.log("2.a: The name " + names[i] + " has " + names[i].length + " letters.")
        }    
    // b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
    for (let i = 0; i < names.length; i++) {
        console.log("2.b: The names are " + names.join(" "))
        }    
//3. How do you access the last element of any array?
console.log("3. You can access the last element of any array by using array(array.length[-1]. For example, the last element on the names array is " + names[names.length-1]) 

//4. How do you access the first element of any array?
console.log("4. You can access the first element of any array by using array[0]. For example, the first element on the names array is " + names[0]) 

//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
    // For example:
    // let names = ["Kelly", "Sam", "Kate"];    // starting with this array
    // let nameLengths = [5, 3, 4];             // create a new array
let nameLengths = names.map(function(element){
    return element.length
});
console.log("5. New array nameLengths: " + nameLengths)

//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array
let result = nameLengths.reduce((a, b) => {
    return a + b;
  });
  
  console.log("6. The sum of all the elements nameLengths is " + result);

//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
let functionGreeting = (a, b) => {
    let result = ''
    for (let i = 0; i < b; i++){
    result += a;}
    return result;
};
   console.log("7. function greeting: " + functionGreeting('Hello',3)) 

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
let createFullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log("My full name is " + createFullName('Marnilyn','Ramirez'));

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function GreaterThan(result){
    if (result > 100) {
      return true;
    } else {
      return false;
    }
    return result;
  }
console.log("9. Is the sum of nameLengths from #6 is greater than 100? " + GreaterThan(result))

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
function average2(array) {
    sum = 0;
    array.forEach((element) => {
      sum += element;
    });
    return sum / array.length;
  }
  console.log("10. The average number between 10,20,35,41,65 is: " + average2([10,20,35,41,65]))
  
    
//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function higherAverage(array1, array2) {
       sum = 0;
    array.forEach((element) => {
      sum += element;
    });
    return sum / array1.length;
    return sum / array2.length;
   
  }
  console.log("11. : " + higherAverage([10,20,35,41,65], [5,37,45,82]))
  

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.