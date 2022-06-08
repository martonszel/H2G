"use strict";

// Check if the text is a palindrome. For empty string, it is not considered a palindrome. Whitespaces should not be counted

// solution #1

const isPalindrome = (text) => text.replace(/ /g, '') === '' ? false : text.toLowerCase().split('').reverse().join('').replace(/ /g, '') === text.toLowerCase().replace(/ /g, '')

console.log(isPalindrome('')); // false
console.log(isPalindrome('     ')); // false
console.log(isPalindrome('anna')); // true
console.log(isPalindrome('anna    ')); // true
console.log(isPalindrome('indul a gorog aludni')); // true
console.log(isPalindrome('alma')); // false

// solution #2

const clean = (str) => str.toLowerCase().replace(/ /g, '')
const Palindrome = (text) => {

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

console.log(Palindrome('')); // false
console.log(Palindrome('     ')); // false
console.log(Palindrome('anna')); // true
console.log(Palindrome('anna    ')); // true
console.log(Palindrome('indul a gorog aludni')); // true
console.log(Palindrome('alma')); // false
