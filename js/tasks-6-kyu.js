// The new "Avengers" movie has just been released!
// There are a lot of people at the cinema box office
// standing in a huge line.Each of them has a single
// 100, 50 or 25 dollar bill.An "Avengers" ticket
// costs 25 dollars.

// Vasya is currently working as a clerk.He wants
// to sell a ticket to every single person in this
// line.

// Can Vasya sell a ticket to every person and give
// change if he initially has no money and sells the
// tickets strictly in the order people queue ?

// Return YES, if Vasya can sell a ticket to every
// person and give change with the bills he has at
// hand at that moment.Otherwise return NO.
// Examples:
// tickets([25, 25, 50]) // => YES
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

// function tickets(peopleInLine) {
//   const ticketPrice = 25;
//   let balance = 0, cashBack = 0;
//   for (const ticketSold of peopleInLine) {
//     cashBack = ticketSold - ticketPrice;
//     console.log(`Opening: ${balance}. +income: ${ticketSold} - cash back: ${cashBack}. Closing balance: ${balance+ticketPrice}`);

//     if (balance < cashBack) {
//       return 'NO'
//     }
//     balance += ticketPrice;
//   }
//   return 'YES'
// }

// // console.log(tickets([25, 50, 25, 100, 25, 25, 25, 100, 25, 25, 50, 100, 25, 50, 50, 25]));
// console.log(tickets([25,25,50,100,25,25,50,100,25,25,25,100,100,25]));
// // console.log(tickets([25, 100]));
// ============================================
// function solution(string) {
//   const noCamelString = string.split('');
//   const newArr = [];
//   noCamelString.forEach((item, idx) => {
//     if (item === item.toUpperCase()) {
//       newArr.push(' ');
//       newArr.push(item);
//     } else {
//       newArr.push(item);
//     }
//   });

//   return newArr.join('');
// }

// console.log(solution('camelCase'));
// ============================================
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}. What if the string is empty? Then the result should be empty object literal, {}.

// function count(string) {
//   const arr = string.split('');
//   const obj = {};

//   arr.forEach(item => {
//     if (!obj[item]) {
//       obj[item] = 0;
//     }
//     obj[item] += 1;
//   });

//   return obj;
// }

// console.log(count('aba'));

// ============================================

// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2). For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted. The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array). Based on: http://oj.leetcode.com/problems/two-sum/
// twoSum [1, 2, 3] 4 === (0, 2)

// function twoSum(numbers, target) {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers.length; j++) {
//       if (i === j) break;
//       if (numbers[i] + numbers[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// console.log(twoSum([1, 2, 3], 4));

// ============================================

// Your task, is to create NxN multiplication table, of size provided in parameter. for example, when given size is 3:
// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

// const multiplicationTable = function (size) {
//   const table = [];
//   for (let i = 1; i <= size; i++) {
//     const raw = [];
//     for (let j = 1; j <= size; j++) {
//       raw.push(j * i);
//     }
//     table.push(raw);
//   }
//   return table;
// };

// console.log(multiplicationTable(3));

// ============================================

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.Examples

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// function sortArray(array) {
//   const oddsArr = array.filter(item => item % 2 !== 0).sort((a, b) => a - b);

//   return array.map(item => (item % 2 ? oddsArr.shift() : item));
// }

// console.log(sortArray([1, 11, 2, 8, 3, 4, 5]));
// ============================================

// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.
// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above. For example, decode("h3 th2r2") would return "hi there". For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

// function encode(string) {
//   return string
//     .split('')
//     .map(letter => {
//       switch (letter) {
//         case 'a':
//           return 1;
//         case 'e':
//           return 2;
//         case 'i':
//           return 3;
//         case 'o':
//           return 4;
//         case 'u':
//           return 5;
//         default:
//           return letter;
//       }
//     })
//     .join('');
// }

// function decode(string) {
//   return string
//     .split('')
//     .map(letter => {
//       switch (letter) {
//         case '1':
//           return 'a';
//         case '2':
//           return 'e';
//         case '3':
//           return 'i';
//         case '4':
//           return 'o';
//         case '5':
//           return 'u';
//         default:
//           return letter;
//       }
//     })
//     .join('');
// }

// console.log(encode('hello'));
// console.log(decode('h3 th2r2'));
// ============================================

// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number. ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0) Examples:

// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

function iqTest(numbers) {
  const arr = numbers.split(' ');
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]} + ${arr[i + 1]} = ${Number(arr[i]) + Number(arr[i + 1])}`);
    if ((Number(arr[i]) + Number(arr[i + 1])) % 2 !== 0) return i + 2;
  }
}

console.log(iqTest('2 41 61 81 101'));
