"use strict";

const sumArray = (array) => {
    return array.reduce((sum, current) => {
        return Array.isArray(current) ?
            sum + sumArray(current) :
            typeof current === 'number' && isFinite(current) && current % 2 == 0 ?
                sum + current : sum
    }, 0);
}

console.log(sumArray([1, [2, 3], [[4], 5]])); // 6
console.log(sumArray([1, [1, 1], [[1], 1]])); // 0