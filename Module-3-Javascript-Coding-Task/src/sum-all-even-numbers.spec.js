import { sumArray, sumEven } from './sum-all-even-numbers'

describe('sum-all-even-numbers', () => {

    describe('sumArray', () => {
        it('should pass', () => {
            const array = [1, [2, 3], [[4], 5]]
            const actual = sumArray(array)
            const expected = 6

            expect(actual).toEqual(expected)
        })
    })

    describe('sumEven', () => {
        it('should pass', () => {
            const array = [1, [2, 3], [[4], 5]]
            const actual = sumEven(array)
            const expected = 6

            expect(actual).toEqual(expected)
        })
    })
})