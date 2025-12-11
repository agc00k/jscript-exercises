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

// Rewrite SumOfTripledEvens(array) function using map, filter, and reduce
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