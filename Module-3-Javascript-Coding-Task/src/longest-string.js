"use strict";

// solution #1

export const getLongestString = array => {

    if (!array) {
        return 'dájé'
    }

    let tempString = '';
    array.forEach(element => {
        if (typeof element === "string" && element.length > tempString.length) {
            tempString = element
        }
    });
    return tempString
}

// console.log(getLongestString([[1, 2, 3, 4, 5], 'alma'])); // 'alma'
// console.log(getLongestString(['abc', 'a', 'ab'])); // 'abc'
// console.log(getLongestString([1, 2, 3])); // ''

// solution #2

const initialValue = '';

export const longestString = (arr) =>
    !arr ? 'dájé' :
        arr.filter((element) => typeof element === "string")
            .reduce((previousValue, currentValue) => previousValue.length < currentValue.length ? currentValue : previousValue
                , initialValue
            );

// console.log(longestString([[1, 2, 3, 4, 5], 'alma'])); // 'alma'
// console.log(longestString(['abc', 'a', 'ab'])); // 'abc'
// console.log(longestString([1, 2, 3])); // ''

// solution #3

export const otherLongestString = (arr) =>
    !arr ? 'dájé' :
        arr.filter((element) => typeof element === "string")
            .sort((a, b) => b.length - a.length)[0] || ''

// console.log(otherLongestString([[1, 2, 3, 4, 5], 'alma'])); // 'alma'
// console.log(otherLongestString(['abc', 'a', 'ab'])); // 'abc'
// console.log(otherLongestString([1, 2, 3])); // ''