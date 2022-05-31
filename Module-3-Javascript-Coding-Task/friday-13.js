"use strict";

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