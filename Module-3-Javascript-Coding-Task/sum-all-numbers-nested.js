
"use strict";

const arr = ['kaki', "maki"]

const sumArray = (array) => {
    return array.reduce((sum, current) => {
        return Array.isArray(current) ?
            sum + sumArray(current) :
            typeof current === 'number' && isFinite(current) ?


                sum + current : sum
    }, 0);
}
console.log(sumArray([1, [2, [[[3]]]], [4, 5]])); // 15
console.log(sumArray([1, [2, [3], [4, "5", null, undefined, [NaN, Infinity], [true, false], { id: '1' }, 5]]])); // 15


const sumNumbers = (inputArray) => inputArray.flat(4).reduce((sum, current) => typeof current === 'number' && isFinite(current) ? sum + current : sum, 0);

console.log(sumNumbers([1, [2, [[[3]]]], [4, 5]])); // 15
console.log(sumNumbers([1, [2, [3], [4, '5', null, undefined, [NaN, Infinity], [true, false], { id: '1' }, 5]]])); // 15
