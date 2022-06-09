import { sum } from './sum-all-numbers'

describe('sum-all-numbers', () => {

    describe('sum', () => {
        it('should pass', () => {
            const array = [1, 2, 3, 4, 5]
            const actual = sum(array)
            const expected = 15

            expect(actual).toEqual(expected)
        })

        it('should pass', () => {
            const array = [1, [2, [3], [4, "5", null, undefined, [NaN, Infinity], [true, false], { id: '1' }, 5]]]
            const actual = sum(array)
            const expected = 15

            expect(actual).toEqual(expected)
        })
    })
})