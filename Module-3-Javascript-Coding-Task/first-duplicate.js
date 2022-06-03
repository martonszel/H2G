"use strict";

// solution #1

const getFirstDuplicate = (text) => {
    for (let i = 0; i < text.length; i++) {
        //          indexof (a)   !==  lastindex (a)
        //            0                     0  
        //          indexof (b)   !==  lastindex (b)
        //              1               4
        if (text.indexOf(text.charAt(i)) !== text.lastIndexOf(text.charAt(i))) {
            return text.charAt(i)
        }
    }
    return ''
}

console.log(getFirstDuplicate('abccb')); // 'b'
console.log(getFirstDuplicate('abc')); // ''


// solution #2 - not working

const firstDuplicate = (text) => {

    let tempMap = new Map();

    [...text].forEach((el, index) => {
        tempMap.set(index, el)
    })

    console.log(tempMap);
    for (const [key, char] of tempMap) {
        if (tempMap.has(char)) {
            return char
        } else {
            tempMap.set(char, true)
        }
    }
    return ''
}

console.log(firstDuplicate('abccb')); // 'b'
console.log(firstDuplicate('bcabc')); // 'b'
console.log(firstDuplicate(["1", "2", "3", "4", "3", "2"])); // '2'


// solution #3

const findFirstDuplicate = (text) => ([...text].find((element, index) => text.lastIndexOf(element) !== index)) || '';

console.log(findFirstDuplicate('abccb')); // 'b'
console.log(findFirstDuplicate('abc')); // ''
console.log(findFirstDuplicate('abbcca')); // 'a'