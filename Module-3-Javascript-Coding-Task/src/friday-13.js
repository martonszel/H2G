"use strict";


// solution #1

const range = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i);

const getFriday13s = (startYear, endYear) => {

    const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    const fridays = []

    if (typeof endYear === "undefined") {
        months.forEach((month) => {
            let newDate = new Date();
            newDate.setFullYear(startYear, month, 13);
            if (newDate.getDay() == 5) {
                let fromattedDate = newDate.toISOString().split('T')[0]
                fridays.push(fromattedDate)
            }
        })
        return fridays
    } else {
        const years = range(startYear, endYear)
        years.forEach((year) => {
            months.forEach((month) => {
                let newDate = new Date();
                newDate.setFullYear(year, month, 13);
                console.log(newDate);
                if (newDate.getDay() == 5) {
                    let fromattedDate = newDate.toISOString().split('T')[0]
                    fridays.push(fromattedDate)
                }
            })
        })
        return fridays
    }
}

console.log(getFriday13s(1999, 2000)); // ['1999.08.13.', '2000.10.13']
console.log(getFriday13s(1999)); // ['2000.10.13']t
console.log(getFriday13s(1999, 2005));


// solution #2

const friday13s = (startYear, endYear) => {
    const rangeStart = new Date(startYear, 0, 1);
    const rangeEnd = endYear ? new Date(endYear, 12, 31) : new Date(startYear, 12, 31);
    const getDaysArray = (start, end) => {
        const arr = []
        for (const dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + 1)) {
            arr.push(new Date(dt));
        }
        return arr;
    };
    return getDaysArray(rangeStart, rangeEnd)
        .filter((date) => {
            return date.getDay() === 5 && date.getDate() === 13
        })
        .map(friday => new Intl.DateTimeFormat('hu').format(friday))
}


console.log(friday13s(1999, 2000)); // ['1999.08.13.', '2000.10.13']
console.log(friday13s(2000)); // ['2000.10.13']
console.log(friday13s(1999, 2005));


// solution #3

export const getDaysArray = (start, end) => {

    const rangeStart = new Date(Date.UTC(start, 0, 1));
    const rangeEnd = end ? new Date(Date.UTC(end, 11, 31)) : new Date(Date.UTC(start, 11, 31));

    const arr = []
    for (const dt = new Date(rangeStart); dt <= new Date(rangeEnd); dt.setDate(dt.getDate() + 1)) {
        arr.push(new Date(dt));
    }
    return arr;
};

export const findfriday13s = (startYear, endYear) =>
    getDaysArray(startYear, endYear)
        .filter((date) => date.getDay() === 5 && date.getDate() === 13)
        .map(friday => new Intl.DateTimeFormat('hu').format(friday))

console.log(findfriday13s(1999, 2000)); // ['1999.08.13.', '2000.10.13']
console.log(findfriday13s(2000)); // ['2000.10.13']
console.log(findfriday13s(1999, 2005));