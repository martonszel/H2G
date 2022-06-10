import { sumArray, sumNumbers } from './sum-all-numbers-nested'

describe('sum-all-numbers-nested', () => {

    describe('sumArray', () => {
        it('should return 15 ', () => {
            const array = [1, [2, [[[3]]]], [4, 5]]
            const actual = sumArray(array)
            const expected = 15

            expect(actual).toEqual(expected)
        })

        it('should return 15', () => {
            const array = [1, [2, [3], [4, "5", null, undefined, [NaN, Infinity], [true, false], { id: '1' }, 5]]]
            const actual = sumArray(array)
            const expected = 15

            expect(actual).toEqual(expected)
        })

        it('should return empty string when undefined', () => {

            const array = undefined
            const actual = sumArray(array)
            const expected = 'dájé'

            expect(actual).toEqual(expected)
        })

        it('should return empty string when null', () => {

            const array = null
            const actual = sumArray(array)
            const expected = 'dájé'

            expect(actual).toEqual(expected)
        })
    })

    describe('sumNumbers', () => {
        it('should return 15', () => {
            const array = [1, [2, [[[3]]]], [4, 5]]
            const actual = sumNumbers(array)
            const expected = 15

            expect(actual).toEqual(expected)
        })

        it('should return 15', () => {
            const array = [1, [2, [3], [4, "5", null, undefined, [NaN, Infinity], [true, false], { id: '1' }, 5]]]
            const actual = sumNumbers(array)
            const expected = 15

            expect(actual).toEqual(expected)
        })

        it('should return empty string when undefined', () => {

            const array = undefined
            const actual = sumNumbers(array)
            const expected = 'dájé'

            expect(actual).toEqual(expected)
        })

        it('should return empty string when null', () => {

            const array = null
            const actual = sumNumbers(array)
            const expected = 'dájé'

            expect(actual).toEqual(expected)
        })
    })
})