
// ----> Given an integral number, determine
// if it's a square number

// var isSquare = function (n) {
//   if (Number.isInteger(Math.sqrt(n))) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log('isSquare :>> ', isSquare(25));


// ----> Write a function that can return the
// smallest value of an array or the index of
// that value.The function's 2nd parameter will 
// tell whether it should return the value or the index.

// Assume the first parameter will always be an
// array filled with at least 1 number and no
// duplicates.Assume the second parameter will be a
// string holding one of two values: 'value' and 'index'.

// function min(arr, toReturn) {
//   let min = arr[0];
//   let index = 0;
  
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//       index = i;
//     }
//   }
//   switch (toReturn) {
//     case 'value': return min;
//     case 'index': return index;
//     }
// }

// console.log('min value :>> ', min([1, 2, 3, 4, -5], 'value'));
// console.log('index of min :>> ', min([1,2,3,-4,5], 'index'));
// //   min([1,2,3,4,5], 'value') // => 1
// // min([1,2,3,4,5], 'index') // => 0


// ----> you are asked to square every digit
// of a number and concatenate them.
// For example, if we run 9119 through the function,
// 811181 will come out, because 9^2 is 81 and 1^2 is 1.
// Note: The function accepts an integer and returns an integer

// function squareDigits(num){
//   const digits = num.toString().split('');
//   let sqrdDigits = [];
//   console.log('digits :>> ', digits);
//   for (const digit of digits) {
//     console.log('Squared num', (Math.pow(Number(digit), 2)).toString());
//     sqrdDigits += Math.pow(Number(digit), 2).toString()
//   }
//   return +sqrdDigits;
// }

// console.log('num :>> ', squareDigits(19191));
 
// ------> Vowel Count
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//   let vowelsCount = 0;
	
// 		vowelsCount = (str.match(/[aeiou]/ig)||[]).length

  
//   return vowelsCount;
// }

// console.log(getCount('The input string will only consist of lower case letters and/or spaces'));
// console.log(getCount('abracadabra'));
// console.log(getCount('pear tree'));
// console.log(getCount('o a kak ushakov lil vo kashu kakao'));
// console.log(getCount('my pyx'));

