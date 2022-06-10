"use strict";

// Check if the text is a palindrome. For empty string, it is not considered a palindrome. Whitespaces should not be counted

// solution #1

export const isPalindrome = (text) => !text ? false : text.replace(/ /g, '') === '' ? false : text.toLowerCase().split('').reverse().join('').replace(/ /g, '') === text.toLowerCase().replace(/ /g, '')

// console.log(isPalindrome('')); // false
// console.log(isPalindrome('     ')); // false
// console.log(isPalindrome('anna')); // true
// console.log(isPalindrome('anna    ')); // true
// console.log(isPalindrome('indul a gorog aludni')); // true
// console.log(isPalindrome('alma')); // false

// solution #2

const clean = (str) => str.toLowerCase().replace(/ /g, '')

export const palindrome = (text) => {

    if (!text) {
        return false
    }

    const cleanStr = clean(text)
    const splitted = cleanStr.split('')

    if (cleanStr === '') {
        return false
    }
    for (const letter of splitted) {

        if (letter !== splitted.pop()) {
            return false
        }
    }
    return true
}

// console.log(palindrome('')); // false
// console.log(palindrome('     ')); // false
// console.log(palindrome('anna')); // true
// console.log(palindrome('anna    ')); // true
// console.log(palindrome('indul a gorog aludni')); // true
// console.log(palindrome('alma')); // false
