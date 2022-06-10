import { sumArray, sumEven } from './sum-all-even-numbers'

describe('sum-all-even-numbers', () => {

    describe('sumArray', () => {
        it('should return 6', () => {
            const array = [1, [2, 3], [[4], 5]]
            const actual = sumArray(array)
            const expected = 6

            expect(actual).toEqual(expected)
        })

        it('should return 0', () => {
            const array = [1, [1, 1], [[1], 1]]
            const actual = sumArray(array)
            const expected = 0

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

    describe('sumEven', () => {
        it('should return 6', () => {
            const array = [1, [2, 3], [[4], 5]]
            const actual = sumEven(array)
            const expected = 6

            expect(actual).toEqual(expected)
        })

        it('should return 0', () => {
            const array = [1, [1, 1], [[1], 1]]
            const actual = sumEven(array)
            const expected = 0

            expect(actual).toEqual(expected)
        })

        it('should return empty string when undefined', () => {

            const array = undefined
            const actual = sumEven(array)
            const expected = 'dájé'

            expect(actual).toEqual(expected)
        })

        it('should return empty string when null', () => {

            const array = null
            const actual = sumEven(array)
            const expected = 'dájé'

            expect(actual).toEqual(expected)
        })
    })
})