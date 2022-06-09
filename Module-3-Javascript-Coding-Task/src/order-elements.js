"use strict";

// The order should be odd followed by even numbers
// - odd numbers should be ascendig
// - even numbers should be descending

// solution #1

export const order = (array) => {

    const even = [];
    const odd = [];

    array.sort((a, b) => a - b)

    array.forEach(element => {
        if (element % 2 == 0) {
            even.push(element)
        } else odd.push(element)
    });

    return odd.concat(even.reverse())
}

// console.log(order([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // [1, 3, 5, 7, 9, 8, 6, 4, 2, 0]
// console.log(order([13, 22, 34, 41, 56, 67, 78, 89, 92]));

// solution #2

export const orderNumbers = (array) => array.sort((a, b) => (b % 2 - a % 2) || (b % 2 ? a - b : b - a));

// console.log(orderNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // [1, 3, 5, 7, 9, 8, 6, 4, 2, 0]
// console.log(orderNumbers([13, 22, 34, 41, 56, 67, 78, 89, 92])); 