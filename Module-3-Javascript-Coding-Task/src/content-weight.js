
"use strict";
// Takes a bottleWeight and scale of the bottle to its contents and returns the weight of its contents Acceptable values for scale: ('2 times larger', '4 times larger', '50 times smaller')

/**
 * @param {number} bottleWeight: The weight of the entire bottle and contents
 * @param {string} scale: A string comparing the weight of the bottle contents to the weight of the bottle by itself
 */


// solution #1

export const contentWeight = (bottleWeight, scale) => {

    if (!bottleWeight || !scale) {
        return null
    }

    const splittedScale = scale.split(' ')

    if (splittedScale[2] === 'larger') {

        return (bottleWeight / (Number(splittedScale[0]) + 1)) * Number(splittedScale[0])

    } else return (bottleWeight / (Number(splittedScale[0]) + 1))

}

// console.log(contentWeight(120, '2 times larger')); // 80
// console.log(contentWeight(120, '2 times smaller')); // 40
// console.log(contentWeight(125, '4 times larger')); // 100
// console.log(contentWeight(250, '4 times smaller')); // 50
// console.log(contentWeight(1020, '50 times smaller')); // 20


// solution #2

export const contentWeightCalc = (bottleWeight, scale) =>
    !bottleWeight || !scale ? null :
        /larger/.test(scale) ? bottleWeight * Number(scale.substring(0, 2)) / (Number(scale.substring(0, 2)) + 1) : bottleWeight / (Number(scale.substring(0, 2)) + 1)

// console.log(contentWeightCalc(120, '2 times larger')); // 80
// console.log(contentWeightCalc(120, '2 times smaller')); // 40
// console.log(contentWeightCalc(125, '4 times larger')); // 100
// console.log(contentWeightCalc(250, '4 times smaller')); // 50
// console.log(contentWeightCalc(1020, '50 times smaller')); // 20