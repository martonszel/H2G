import { getLongestString, longestString, otherLongestString } from './longest-string'

describe('longest-string', () => {

    describe('getLongestString', () => {
        it('should return alma', () => {
            const array = [[1, 2, 3, 4, 5], 'alma']
            const actual = getLongestString(array)
            const expected = 'alma'

            expect(actual).toEqual(expected)
        })

        it('should return abc ', () => {
            const array = ['abc', 'a', 'ab']
            const actual = getLongestString(array)
            const expected = 'abc'

            expect(actual).toEqual(expected)
        })

        it('should return empty string', () => {
            const array = [1, 2, 3]
            const actual = getLongestString(array)
            const expected = ''

            expect(actual).toEqual(expected)
        })

        it('should return empty string when undefined', () => {

            const array = undefined
            const actual = getLongestString(array)
            const expected = null

            expect(actual).toEqual(expected)
        })

        it('should return empty string when null', () => {

            const array = null
            const actual = getLongestString(array)
            const expected = null

            expect(actual).toEqual(expected)
        })
    })

    describe('longestString', () => {
        it('should return alma', () => {
            const array = [[1, 2, 3, 4, 5], 'alma']
            const actual = longestString(array)
            const expected = 'alma'

            expect(actual).toEqual(expected)
        })

        it('should return abc ', () => {
            const array = ['abc', 'a', 'ab']
            const actual = longestString(array)
            const expected = 'abc'

            expect(actual).toEqual(expected)
        })

        it('should return empty string', () => {

            const array = [1, 2, 3]
            const actual = longestString(array)
            const expected = ''

            expect(actual).toEqual(expected)
        })

        it('should return empty string when undefined', () => {

            const array = undefined
            const actual = longestString(array)
            const expected = null

            expect(actual).toEqual(expected)
        })

        it('should return empty string when null', () => {

            const array = null
            const actual = longestString(array)
            const expected = null

            expect(actual).toEqual(expected)
        })

    })

    describe('otherLongestString', () => {
        it('should return alma', () => {
            const array = [[1, 2, 3, 4, 5], 'alma']
            const actual = otherLongestString(array)
            const expected = 'alma'

            expect(actual).toEqual(expected)
        })

        it('should return abc ', () => {
            const array = ['abc', 'a', 'ab']
            const actual = otherLongestString(array)
            const expected = 'abc'

            expect(actual).toEqual(expected)
        })

        it('should return empty string', () => {

            const array = [1, 2, 3]
            const actual = otherLongestString(array)
            const expected = ''

            expect(actual).toEqual(expected)
        })

        it('should return empty string when undefined', () => {

            const array = undefined
            const actual = otherLongestString(array)
            const expected = null

            expect(actual).toEqual(expected)
        })

        it('should return empty string when null', () => {

            const array = null
            const actual = otherLongestString(array)
            const expected = null

            expect(actual).toEqual(expected)
        })
    })

})