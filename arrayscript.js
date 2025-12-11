// JavaScript File -- Practice Arrays

const array = [1, 2, 3, 4, 5];

function sumOfTripledEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        // step 1: if the element is an even number
        if (array[i] % 2 === 0) {
            // step 2: multiply this number by three
            const tripleEvenNumber = array[i] * 3;
            // step 3: add the new number to the total
            sum += tripleEvenNumber;
        }
    }
    return sum;
}

console.log(sumOfTripledEvens(array));

// Example of using map method

const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.map((num) => num + 1); // map array method automatically iterates over an array for us

console.log(mappedArr); 
console.log(arr); // no change to original array

// Example using the filter method
// filter is somewhat similar to map. 
// It still iterates over the array and applies the callback function on every item. 
// However, instead of transforming the values in the array, 
// it returns a new array where each item is only included if the callback function returns true for it.

function isOdd(num) {
    return num % 2 !== 0;
}
const oddNums = arr.filter(isOdd);

console.log(oddNums); // outputs [1, 3, 5]; -- original array unchanged

// Example usin the recude method
// Mmultiply all of the numbers in our arr together like this: 1 * 2 * 3 * 4 * 5.
// Just like .map() and .filter(), it expects a callback function. 
// However, there are two key differences with this array method:
// 1. The callback function takes two arguments instead of one. 
//    The first argument is the accumulator, which is the current value of the result at that point in the loop. 
//    The first time through, this value will either be set to the initialValue (described in #2 below), 
//    or the first element in the array if no initialValue is provided. 
//    The second argument for the callback is the current value, which is the item currently being iterated on.
// 2. reduce itself also takes in an initialValue as an optional second argument (after the callback), 
//    which helps when we don’t want our initial value to be the first element in the array. 
//    For instance, if we wanted to sum all numbers in an array, we could call reduce without an initialValue, 
//    but if we wanted to sum all numbers in an array and add 10, we could use 10 as our initialValue.

const productOfAllNums = arr.reduce((total, currentItem) => {
    return total * currentItem;
}, 1);

console.log(productOfAllNums); // outputs 120; -- original array unchanged

// My version of SumOfTripledEvens(array) function using map, filter, and reduce
// filter > map > reduce

const evenNums = array.filter(num => num % 2 === 0);
const tripleNums = evenNums.map(num => num * 3);
const addOfTripledEvens = tripleNums.reduce((total, currentItem) => {
    return total + currentItem;
}, 0);

// Cleaner version (rename original function) -- as provided by The Odin Project

function sumOfTripledEvens2(array) {
    return array
        .filter((num) => num % 2 === 0)
        .map((num) => num * 3)
        .reduce((acc, curr) => acc + curr);
}

console.log(evenNums);
console.log(tripleNums);
console.log(addOfTripledEvens);
console.log("Simpler way: " + sumOfTripledEvens2(array));

// Translate border-left-width to borderLeftWidth (camelcase)
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”. 
// That is: removes all dashes, each word after dash becomes uppercased.
// Examples: 
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

function camelize(str) {
    return str
        .split('-')
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('');
}

console.log(camelize("list-style-image"));

// Filter Range exercise
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values 
// higher or equal to "a" and lower or equal to "b" and return a result as an array.
// The function should not modify the array. It should return the new array.

let arrNum = [5, 3, 8, 1];

function filterRange(arrNum, a, b) {
   return arrNum.filter((num) => num >= a && num <= b);    
}

console.log(filterRange(arrNum, 1, 4));

// Filter range "in place"
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes 
// from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.

function filterRangeInPlace(arrNum, a, b) {
    const filtered = arrNum.filter(num => num >= a && num <=b);
    arrNum.length = 0;
    arrNum.push(filtered);
}

filterRangeInPlace(arrNum, 1, 4);
console.log(arrNum);

// Sort in decreasing order -- Sort then reverse

let arrSort = [5, 2, 1, -10, 8];
arrSort.sort((a, b) => a - b); // OR just 1 line (no need for reverse) --> arrSort.sort((a, b) => b - a);
arrSort.reverse();

console.log(arrSort);

// Copy and sort array
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.

let arrStr = ["HTML", "JavaScript", "CSS"];

function copySorted(arrStr) {
    return arrStr.slice().sort();
}

let sortedCopy = copySorted(arrStr);

console.log("Sorted Copy of Array: " + sortedCopy);
console.log("Original Array: " + arrStr);

// Shuffle an Array
// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
// Multiple runs of shuffle may lead to different orders of elements.
// All element orders should have an equal probability. 
// For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.

let arrShfl = [1, 2, 3];

function shuffleArr(arrShfl) {
    for (let i = arrShfl.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arrShfl[i], arrShfl[j]] = [arrShfl[j], arrShfl[i]];
    }
    return arrShfl;
}

console.log("Shuffled Array: " + shuffleArr(arrShfl));