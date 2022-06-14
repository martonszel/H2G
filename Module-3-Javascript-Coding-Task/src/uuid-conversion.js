"use strict";

// solution #1

export const getConvertedUUIDBlocks = uuid => {

    if (!uuid) {
        return null
    }

    const formatted = [...uuid.replace(/-/g, '')].join('').match(/.{1,2}/g)

    const hexColors = []

    formatted.forEach(element => {
        hexColors.push(parseInt(element, 16))
    });

    return hexColors
}

// console.log(getConvertedUUIDBlocks('f782f011-636a-4d8b-9f63-dc34a4503c01')); // [247, 130, 240, 17, 99, 106, 77, 139, 159, 99, 220, 52, 164, 80, 60, 1]


// solution #2

export const convertedUUIDBlocks = uuid => !uuid ? null : [...uuid.replace(/-/g, '')].join('').match(/.{1,2}/g).map((element) => element = parseInt(element, 16))

// console.log(convertedUUIDBlocks('f782f011-636a-4d8b-9f63-dc34a4503c01')); // [247, 130, 240, 17, 99, 106, 77, 139, 159, 99, 220, 52, 164, 80, 60, 1]