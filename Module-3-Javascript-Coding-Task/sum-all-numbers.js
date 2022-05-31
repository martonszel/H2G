"use strict";

const sum = (array) => array.reduce((sum, current) => typeof current === 'number' && isFinite(current) ? sum + current : sum, 0);


console.log(sum([1, 2, 3, 4, 5])); // 15
console.log(sum([1, 2, 3, 4, '5', null, undefined, NaN, Infinity, true, false, { id: '1' }, [true, 456], 5, false])); // 15
