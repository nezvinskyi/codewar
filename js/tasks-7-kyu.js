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

// ------> Mumbling
// function accum(s) {
// 	// let toArray = (s.split(''));
// 	// let newArray = [];
// 	// for (let i = 0; i < toArray.length; i++) {
// 	// 	let newWord = [s[i].toUpperCase()];
// 	// 	for (let j = 1; j <= i; j++) {
// 	// 		newWord.push(s[i].toLowerCase())
// 	// 	}
// 	// 	newArray.push(newWord.join(''));
// 	// }
// 	// return newArray.join('-')

// 	/*
// 	*  shorter version
// 	*/
// 	return s.split('').map((value, index) => (value.toUpperCase() + value.toLowerCase().repeat(index))).join('-');
// }

// console.log(accum("abcd")); //-> "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); //-> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt")); //-> "C-Ww-Aaa-Tttt"

// ------> Count the Digit
// function nbDig(n, d) {
// 	let squaredDigits = [];
// 	let counter = 0;
// 	for (let i = 0; i <= n; i++){
// 		squaredDigits.push(i*i)
// 	}
// 	let newStr = squaredDigits.join('').split('');
// 	newStr.reduce((acc, value) => {
// 		if (value == d) {
// 			counter += 1;
// 			return acc;
// 		}
// 	}, 0)
// 	return counter
// }
// console.log(nbDig(5750, 0)); // 4700

// ------> Ce*s*r*d Strings
// function uncensor(infected, discovered) {
// 	let infectedArray = [...infected];
// 	let discoveredArray = [...discovered];
// 	let counter = 0;
// 	for (let i = 0; i < infectedArray.length; i++){
// 		if (infectedArray[i] === '*') {
// 			infectedArray[i] = discoveredArray[counter];
// 			counter += 1;
// 		};
// 	}
//   return infectedArray.join('');
// }
// console.log(uncensor("*h*s *s v*ry *tr*ng*", "Tiiesae")); // ➜ "This is very strange"
// console.log(uncensor("A**Z*N*", "MAIG")); // ➜ "AMAZING"
// console.log(uncensor("xyz", "")); // ➜ "xyz"

// ------> Even numbers in an array

// function evenNumbers(array, number) {
// 	// let newArray = [];
// 	// for (let i = array.length; i >= 0; i--){
// 	// 	if (array[i] % 2 === 0 && newArray.length <= (number-1)) {
// 	// 		newArray.unshift(array[i]);
// 	// 	}
// 	// }
// 	// return newArray;

// 	/*
// 	* shorter version
// 	*/
// 	return array.filter(item=>item%2===0).slice(-number)
// }

// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // => [4, 6, 8]
// console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)); // => [-8, 26]
// console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)); // => [6]

// ------>

// function apparently(string) {
// 	let arr = string.split(' ')
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i + 1] !== 'apparently' && arr[i] === 'but' || arr[i + 1] !== 'apparently' && arr[i] === 'and' ) {
// 			arr.splice(i + 1, 0, 'apparently');
// 		}
// 	}
// 	return arr.join(' ')
// }

// console.log(apparently("It was great and I've never been on live television before but sometimes I don't watch this."));

// console.log(apparently("but apparently"));

// ------>
// function isTriangular(t) {
//   for (let i = 1; i <= t / 2; i++) {
//     if ((i * (i + 1)) / 2 === t) return true;
//   }
//   return false;
// }
// console.log(isTriangular(15));

// // ------>
// function getSum(a, b) {
//   let result = null;

//   for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
//     result += i;
//   }
//   return result;
// }

// console.log(getSum(-1, 1));

// // ------>

// function bump(x) {
//   console.log('x.split("n") :>> ', x.split('n'));
//   if (x.split('n').length > 15) {
//     return 'Car Dead';
//   } else {
//     return 'Woohoo!';
//   }
// }
// console.log(bump('_nnnnnnn_n__n______nn__nn_nnn'));

// ------>
// function annulusArea(a) {
//   return Math.round(Math.PI * Math.pow(a / 2, 2) * 100) / 100;
//   // your code
// }

// console.log(annulusArea(13));

// ------>
// function cost(mins) {
//   if (mins <= 0) return;

//   return 30 + (mins > 65 ? Math.ceil((mins - 60 - 5) / 30) : 0) * 10;
// }

// console.log(cost(126));

// ------>

// function balancedNum(number) {
//   const array = Array.from(String(number), Number);

//   let left = null;
//   let right = null;
//   let middleIdx = null;
//   if (array.length % 2 === 0) {
//     middleIdx = array.length / 2 - 1;
//   } else {
//     middleIdx = Math.floor(array.length / 2);
//   }

//   for (let i = 0; i < middleIdx; i++) {
//     left += array[i];
//     right += array[array.length - i - 1];
//   }

//   if (left === right) {
//     return 'Balanced';
//   } else {
//     return 'Not Balanced';
//   }
// }
// console.log(balancedNum(1234554321));

// ------>

// function strong(n) {
//   const string = String(n);
//   let result = null;

//   for (let i = 0; i < string.length; i++) {
//     result += factoralize(Number(string[i]));
//   }

//   function factoralize(number) {
//     if (number < 0) {
//       return -1;
//     } else if (number === 0) {
//       return 1;
//     } else {
//       return number * factoralize(number - 1);
//     }
//   }

//   return result === n ? 'STRONG!!!!' : 'Not Strong !!';
// }
// console.log(strong(1451));

// ------>

// function disariumNumber(n) {
//   let result = null;
//   const str = String(n);
//   for (let i = 0; i < str.length; i++) {
//     result += Math.pow(Number(str[i]), i + 1);
//   }

//   return result === n ? 'Disarium !!' : 'Not !!';
// }

// console.log(disariumNumber(89));

// ------>
// function jumpingNumber(n) {
//   const arr = n.toString().split('');
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (Number(arr[i]) - Number(arr[i + 1]) !== 1 && Number(arr[i]) - Number(arr[i + 1]) !== -1) {
//       return 'Not!!';
//     }
//   }
//   return 'Jumping!!';
//   //your code here
// }

// console.log(jumpingNumber(12345));

// ------>

// function specialNumber(n) {
//   const arr = Array.from(n.toString());
//   //your code here
//   return arr.some(x => Number(x) > 5 || Number(x) < 0) ? 'Not!!' : 'Special!!';
// }
// console.log(specialNumber(40522305215));

// ------>

// function automorphic(n) {
//   //your code here
//   const str = n.toString();
//   const powered = (n * n).toString();
//   return Number(powered.slice(-str.length)) === n ? 'Automorphic' : 'Not!!';
// }

// console.log(automorphic(125));

// ------>

function grid(N) {
  if (N < 0) return null;
  const codeA = 'a'.charCodeAt();
  let grid = [];

  for (let row = 0; row < N; row++) {
    const cells = [];
    for (let cell = 0; cell < N; cell++) {
      cells.push(String.fromCharCode(codeA + ((row + cell) % 26)));
    }
    grid.push(cells.join(' '));
  }
  return grid.join('\n');
}

console.log(grid(35));
