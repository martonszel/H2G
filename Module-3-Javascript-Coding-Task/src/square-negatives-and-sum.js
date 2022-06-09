"use strict";

// solution #1

export const formattedElement = (number) => [...number.toString()].reduce((total, current) => total + Number(current), 0)

export const squareAndSum = (array) => {

    const formattedArray = [];

    array.forEach(element => {

        if (element < 0) {
            element = Math.pow(element, 2)
        }

        let tempElement = formattedElement(element)

        while (tempElement.toString().length > 1) {
            tempElement = formattedElement(tempElement)
        }

        formattedArray.push(tempElement)
    });

    return formattedArray
}

// console.log(squareAndSum([-1, 1, 12, -4, -5, 999])); // [1, 1, 3, 7, 7, 9]


// const sumAndSquare = (array) => {
//     return array.map((element) => element < 0 ? Math.pow(element, 2) : element)
//         .map((item) => item.toString().length < 2 ? item : [...item.toString()].reduce((total, current) => {
//             return total + Number(current)
//         }, 0))

// }

// console.log(sumAndSquare([-1, 1, 12, -4, -5, 999])); // [1, 1, 3, 7, 7, 9]


export const sumAndSquare = (array) =>
    array.map((element) => element < 0 ? Math.pow(element, 2) : element)
        .map((item) => item % 9 || 9)


// console.log(sumAndSquare([-1, 1, 12, -6, -5, 999])); // [1, 1, 3, 7, 7, 9]



