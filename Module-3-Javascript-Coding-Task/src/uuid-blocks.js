"use strict";

// solution #1

export const getUUIDBlocks = uuid => {

    if (!uuid) {
        return null
    }

    const fromatted = uuid.replace(/-/g, '')

    const chunkSize = 2;

    let splittedArray = []

    for (let i = 0; i < fromatted.length; i += chunkSize) {
        let chunk = fromatted.slice(i, i + chunkSize);
        splittedArray.push(chunk)
    }
    return splittedArray
}

// console.log(getUUIDBlocks('f782f011-636a-4d8b-9f63-dc34a4503c01')); // ['f7', '82', 'f0', '11', '63', '6a', '4d', '8b', '9f', '63', 'dc', '34',' a4', '50', '3c', '01']

// solution #2

const formatArray = (str, number) => {

    const fromatted = str.replace(/-/g, '')

    let splittedArray = []

    for (let i = 0; i < fromatted.length; i += number) {
        splittedArray.push(fromatted.slice(i, i + number));
    }

    return splittedArray
}

export const UUIDBlocks = uuid => !uuid ? null : formatArray(uuid, 2)

// console.log(UUIDBlocks('f782f011-636a-4d8b-9f63-dc34a4503c01')); // ['f7', '82', 'f0', '11', '63', '6a', '4d', '8b', '9f', '63', 'dc', '34',' a4', '50', '3c', '01']

// solution #3

export const formatUUIDBlocks = uuid => !uuid ? null : [...uuid.replace(/-/g, '')].join('').match(/.{1,2}/g);

// console.log(formatUUIDBlocks('f782f011-636a-4d8b-9f63-dc34a4503c01')); // ['f7', '82', 'f0', '11', '63', '6a', '4d', '8b', '9f', '63', 'dc', '34',' a4', '50', '3c', '01']
