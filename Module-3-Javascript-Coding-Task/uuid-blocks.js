"use strict";

const getUUIDBlocks = uuid => {

    const fromatted = uuid.replace(/-/g, '')

    const chunkSize = 2;

    let splittedArray = []

    for (let i = 0; i < fromatted.length; i += chunkSize) {
        let chunk = fromatted.slice(i, i + chunkSize);
        splittedArray.push(chunk)
    }
    return splittedArray
}

console.log(getUUIDBlocks('f782f011-636a-4d8b-9f63-dc34a4503c01')); // ['f7', '82', 'f0', '11', '63', '6a', '4d', '8b', '9f', '63', 'dc', '34',' a4', '50', '3c', '01']