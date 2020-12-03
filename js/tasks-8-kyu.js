// ------>
// Your goal is to return multiplication table
// for number that is always an integer from 1 to 10.
// For example, a multiplication table (string) 
// for number == 5 looks like below:
// P. S. You can use \n in string to jump to the next line.

// function multiTable(number) {
//   let table=[];

//   for (let i=1; i<=10; i+=1) {
//     table.push(`${i} * ${number} = ${i*number}`);
//   }
//   // return table.join('\n');
//   console.log('table :>> ', table.join('\n'));
// }

// multiTable(5);

// ------> You have to write a function that accepts three parameters:
// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus.
// wait is the number of people waiting to get on to the bus.
// If there is enough space, return 0, and if there isn't, 
// return the number of passengers he can't take.

// function enough(cap, on, wait) {
//   if (on + wait <= cap) {
//     // console.log(0);;
//     return 0;
//   }else {
//     return (on + wait - cap);
// // console.log(on + wait - cap);
//   }
// }

// enough(10, 5, 5);
// enough(100, 60, 50);

// ------> The first input array is the key to the correct 
// answers to an exam, like["a", "a", "b", "d"].The second 
// one contains a student's submitted answers.
// The two arrays are not empty and are the same length. 
// Return the score for this array of answers, 
// giving + 4 for each correct answer, -1 for each 
// incorrect answer, and + 0 for each blank answer, represented 
// as an empty string(in C the space character is used).

// If the score < 0, return 0.

// function checkExam(questionsArray, answersArray) {
//   // const questionsArray = [];
//   let score = 0;
//   for (let i = 0; i < questionsArray.length; i++) {
//     if (questionsArray[i] === answersArray[i]) {
//       score += 4;
//       console.log(`Question: ${questionsArray[i]} - Answer: ${answersArray[i]}. Score: ${score}`);

//     } else if (answersArray[i] === '') {
//       score;
//       console.log(`Question: ${questionsArray[i]} - Answer: ${answersArray[i]}. Score: ${score}`);
    
//     } else {
//       score -= 1;
//       console.log(`Question: ${questionsArray[i]} - Answer: ${answersArray[i]}. Score: ${score}`);
//     }
//   }
//   if (score < 0) {
//     // console.log('final score :>> ', 0);
//     return 0;
//   } else {
//     return score;
//     // console.log('final score :>> ', score);
// }
// }

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) //→ 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) //→ 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) //→ 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) //→ 0

// ----->
// Build a function that returns an array 
// of integers from n to 1 where n > 0.
// Example : n=5 >> [5,4,3,2,1]

// const reverseSeq = n => {

// function reverseSeq(number){
//   let array =[];
//   for (let i = number; i > 0; i-=1) {
//     array.push(i);
//   }
//   console.log('array :>> ', array);
//   return array;
// };
// reverseSeq(10);

// ---->
// When provided with a number between 0 - 9, 
// return it in words.
// Input :: 1
// Output :: "One".
// If your language supports it, 
// try using a switch statement.

// function switchItUp(number){

//   switch (number) {
//     case 0:
//       return 'Zero';
//     case 1:
//       return 'One';
//     case 2:
//       return 'Two';
//     case 3:
//       return 'Three';
//     case 4:
//       return 'Four';
//     case 5:
//       return 'Five';
//     case 6:
//       return 'Six';
//     case 7:
//       return 'Seven';
//     case 8:
//       return 'Eight';
//     case 9:
//       return 'Nine';
//     }
// }

// function switchItUp(n){
//   return ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]
// }

// console.log('switchItUp :>> ', switchItUp(1));

// ----> Now you have to write a function
//   that takes an argument and returns the
// square of it.

// function square(n) {
//   return Math.pow(n,2)
// }

// console.log('square :>> ', square(5));

// ----> Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null.
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges
// 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )
// 2
// Swift, Ruby and Crystal: nil
// Haskell: Nothing
// Python, Rust, Scala: None
// Julia: nothing
// Nim: none(int) (See options)

// function firstNonConsecutive (arr) {
//   // const arr = [];
//   for (let i = 1; i < arr.length; i+=1){
//     if (arr[i] !== arr[i - 1] + 1) {
//       return (`non-consequitive :>>  ${arr[i]} at ${i} position`);
//     } 
//   }
//   return null
// };

// console.log('firstNonConsecutive :>> ', firstNonConsecutive(['a','b','c']));

// ----> Nathan loves cycling.
// Because Nathan knows it is important to
// stay hydrated, he drinks 0.5 litres of
// water per hour of cycling.
// You get given the time in hours and you
// need to return the number of litres Nathan
// will drink, rounded to the smallest value.
// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

// function litres(time) {
//   return Math.floor(time * 0.5)
// }

// console.log('litres :>> ', litres(2.5));
// console.log('litres :>> ', litres(4.67));
// console.log('litres :>> ', litres(7.5));


// ----> It's the academic year's end, fateful
// moment of your school report.The averages
// must be calculated.All the students come
// to you and entreat you to calculate their
// average for them.Easy! You just need to write
// a script.
// Return the average of the given array rounded
// down to its nearest integer.
// The array will never be empty.

// function getAverage(marks) {
//   let total=0;
//   for (const mark of marks) {
//     total += mark;
//   }
//   return Math.floor(total / marks.length)
// }
// console.log('marks :>> ', getAverage([1,2,3,4,5,3,4,5]));

// ----> In this simple assignment you are
// given a number and have to make it negative.
// But maybe the number is already negative ?

// function makeNegative(num) {
//   if (num > 0) {
//     return -num;
//   } else {
//     return num;
//   }
// }
//   // return -Math.abs(num);

// console.log('makeNegative(12) :>> ', makeNegative(12));
// console.log('makeNegative(12) :>> ', makeNegative(0));
// console.log('makeNegative(12) :>> ', makeNegative(-12));