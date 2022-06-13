import { squareAndSum, sumAndSquare } from './square-negatives-and-sum'

describe('square-negatives-and-sum', () => {

    describe('squareAndSum', () => {
        it('should return [1, 1, 3, 7, 7, 9] ', () => {
            const array = [-1, 1, 12, -4, -5, 999]
            const actual = squareAndSum(array)
            const expected = [1, 1, 3, 7, 7, 9]

            expect(actual).toEqual(expected)
        })

        it('should return empty string when undefined', () => {

            const array = undefined
            const actual = squareAndSum(array)
            const expected = null

            expect(actual).toEqual(expected)
        })

        it('should return empty string when null', () => {

            const array = null
            const actual = squareAndSum(array)
            const expected = null

            expect(actual).toEqual(expected)
        })
    })

    describe('sumAndSquare', () => {
        it('should return [1, 1, 3, 7, 7, 9]', () => {
            const array = [-1, 1, 12, -4, -5, 999]
            const actual = sumAndSquare(array)
            const expected = [1, 1, 3, 7, 7, 9]

            expect(actual).toEqual(expected)
        })

        it('should return empty string when undefined', () => {

            const array = undefined
            const actual = sumAndSquare(array)
            const expected = null

            expect(actual).toEqual(expected)
        })

        it('should return empty string when null', () => {

            const array = null
            const actual = sumAndSquare(array)
            const expected = null

            expect(actual).toEqual(expected)
        })
    })
})