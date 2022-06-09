"use strict";

// solution #1

export const getFileExtension = filename => {
    const splittedName = filename.split('.')
    return splittedName.length === 1 || splittedName[0] === '' ? false : splittedName[splittedName.length - 1]
}

console.log(getFileExtension('data.txt')); // 'txt'
console.log(getFileExtension('component.test.js')); // 'js'
console.log(getFileExtension('README')); // false
console.log(getFileExtension('.git')); // false


// solution #2

const searchTerm = '.';
export const extension = (word) => word.indexOf(searchTerm) > 0 ? word.substring(word.lastIndexOf(searchTerm) + 1) : false

console.log(extension('data.txt')); // 'txt'
console.log(extension('component.test.js')); // 'js'
console.log(extension('README')); // false
console.log(extension('.git')); // false