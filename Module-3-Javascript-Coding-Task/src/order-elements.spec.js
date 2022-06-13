import { order, orderNumbers } from './order-elements'

describe('order-elements', () => {

    describe('order', () => {
        it('should return odd asc and even desc', () => {
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
            const actual = order(array)
            const expected = [1, 3, 5, 7, 9, 8, 6, 4, 2, 0]

            expect(actual).toEqual(expected)
        })

        it('should return empty string when undefined', () => {

            const array = undefined
            const actual = order(array)
            const expected = null

            expect(actual).toEqual(expected)
        })

        it('should return empty string when null', () => {

            const array = null
            const actual = order(array)
            const expected = null

            expect(actual).toEqual(expected)
        })
    })

    describe('orderNumbers', () => {
        it('should return odd asc and even desc', () => {
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
            const actual = orderNumbers(array)
            const expected = [1, 3, 5, 7, 9, 8, 6, 4, 2, 0]

            expect(actual).toEqual(expected)
        })

        it('should return empty string when undefined', () => {

            const array = undefined
            const actual = orderNumbers(array)
            const expected = null

            expect(actual).toEqual(expected)
        })

        it('should return empty string when null', () => {

            const array = null
            const actual = orderNumbers(array)
            const expected = null

            expect(actual).toEqual(expected)
        })
    })
})