// TODO: Create an array called numbers with values 1 through 5 
let numbers = ["1","2","3","4","5"]
// TODO: Write a for loop that prints each number in the array 
for ( let num1 of numbers){
console.log(num1);
}
// TODO: Write a while loop that counts down from 5 to 1 
let num2 = numbers.length
while (num2 > 0) {
  console.log(num2);
num2--
}
// TODO: Create a loop that prints only even numbers from the numbers array 
for (let numEven of numbers){
  if (numEven%2 == 0) {
    console.log(numEven);
  }
}
// TODO: Create a loop that calculates the sum of all numbers in the array
sum = 0
while (sum < numbers.length) {
  sum = numbers.length + numbers.length
  console.log(sum);
}
