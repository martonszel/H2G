"use strict";

// Check if the text is a palindrome. For empty string, it is not considered a palindrome. Whitespaces should not be counted

const isPalindrome = (text) => text.replace(/ /g, '') === '' ? false : text.toLowerCase().split('').reverse().join('').replace(/ /g, '') === text.toLowerCase().replace(/ /g, '')

console.log(isPalindrome('')); // false
console.log(isPalindrome('     ')); // false
console.log(isPalindrome('anna')); // true
console.log(isPalindrome('anna    ')); // true
console.log(isPalindrome('indul a gorog aludni')); // true
console.log(isPalindrome('alma')); // false


const clean = (str) => str.toLowerCase().replace(/ /g, '')
const Palindrome = (text) => {

    const cleanStr = clean(text)
    const splitted = cleanStr.split('')

    if (cleanStr === '') {
        return false
    }
    for (const c of splitted) {

        if (c !== splitted.pop()) {
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
