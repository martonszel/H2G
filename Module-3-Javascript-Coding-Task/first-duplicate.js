"use strict";


const getFirstDuplicate = (text) => {
    for (let i = 0; i < text.length; i++) {
        if (text.indexOf(text.charAt(i)) !== text.lastIndexOf(text.charAt(i))) {
            return text.charAt(i)
        }
    }
    return ''
}

console.log(getFirstDuplicate('abccb')); // 'b'
console.log(getFirstDuplicate('abc')); // ''


const firstDuplicate = (text) => {

    let tempMap = new Map()
    for (const char of text) {
        if (tempMap.has(char)) {
            return char
        } else {
            tempMap.set(char, true)
            console.log(tempMap);
        }
    }
    return ''
}

console.log(firstDuplicate('abccb')); // 'b'
console.log(firstDuplicate('bcabc')); // 'b'


const findFirstDuplicate = (text) => ([...text].find((element, index) => text.lastIndexOf(element) !== index)) || '';

console.log(findFirstDuplicate('abccb')); // 'b'
console.log(findFirstDuplicate('abc')); // ''
console.log(findFirstDuplicate('abbcca')); // 'a'