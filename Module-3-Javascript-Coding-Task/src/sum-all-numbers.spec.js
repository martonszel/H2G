import { sum } from './sum-all-numbers'

describe('sum-all-numbers', () => {

    describe('sum', () => {
        it('should return 15', () => {
            const array = [1, 2, 3, 4, 5]
            const actual = sum(array)
            const expected = 15

            expect(actual).toEqual(expected)
        })

        it('should return 15', () => {
            const array = [1, 2, 3, 4, '5', null, undefined, NaN, Infinity, true, false, { id: '1' }, [true, 456], 5, false]
            const actual = sum(array)
            const expected = 15

            expect(actual).toEqual(expected)
        })

        it('should return null when undefined', () => {

            const array = undefined
            const actual = sum(array)
            const expected = null

            expect(actual).toEqual(expected)
        })

        it('should return null when null', () => {

            const array = null
            const actual = sum(array)
            const expected = null

            expect(actual).toEqual(expected)
        })
    })
})