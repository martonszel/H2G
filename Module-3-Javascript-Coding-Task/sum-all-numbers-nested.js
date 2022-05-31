
"use strict";

const sumArray = (array) => {
    return array.reduce((sum, current) => {
        return Array.isArray(current) ?
            sum + sumArray(current) :
            typeof current === 'number' && isFinite(current) ?
                sum + current : sum
    }, 0);
}
console.log(sumArray([1, [2, [[[3]]]], [4, 5], 100])); // 15
console.log(sumArray([1, [2, [3], [4, '5', null, undefined, [NaN, Infinity], [true, false], { id: '1' }, 5]]])); // 15