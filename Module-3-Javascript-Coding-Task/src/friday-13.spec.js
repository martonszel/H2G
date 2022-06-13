import { getFriday13s, friday13s, findfriday13s } from './friday-13'

describe('friday-13', () => {

    describe('getFriday13s', () => {
        it('should return multiple dates', () => {
            const startYear = 1999
            const endYear = 2000
            const actual = getFriday13s(startYear, endYear)
            const expected = ['1999.08.13.', '2000.10.13.']

            expect(actual).toEqual(expected)
        })

        it('should return one date', () => {
            const startYear = 2000
            const actual = getFriday13s(startYear)
            const expected = ['2000.10.13.']

            expect(actual).toEqual(expected)
        })

        it('should return empty string when undefined', () => {

            const startYear = undefined
            const endYear = undefined
            const actual = getFriday13s(startYear, endYear)
            const expected = null

            expect(actual).toEqual(expected)
        })

        it('should return empty string when null', () => {

            const startYear = null
            const endYear = null
            const actual = getFriday13s(startYear, endYear)
            const expected = null

            expect(actual).toEqual(expected)
        })
    })

    describe('friday13s', () => {
        it('should return multiple dates', () => {
            const startYear = 1999
            const endYear = 2000
            const actual = friday13s(startYear, endYear)
            const expected = ['1999.08.13.', '2000.10.13.']

            expect(actual).toEqual(expected)
        })

        it('should return one date', () => {
            const startYear = 2000
            const actual = friday13s(startYear)
            const expected = ['2000.10.13.']

            expect(actual).toEqual(expected)
        })

        it('should return empty string when undefined', () => {

            const startYear = undefined
            const endYear = undefined
            const actual = friday13s(startYear, endYear)
            const expected = null

            expect(actual).toEqual(expected)
        })

        it('should return empty string when null', () => {

            const startYear = null
            const endYear = null
            const actual = friday13s(startYear, endYear)
            const expected = null

            expect(actual).toEqual(expected)
        })
    })

    describe('findfriday13s', () => {
        it('should return multiple dates', () => {
            const startYear = 1999
            const endYear = 2000
            const actual = findfriday13s(startYear, endYear)
            const expected = ['1999.08.13.', '2000.10.13.']

            expect(actual).toEqual(expected)
        })

        it('should return one date', () => {
            const startYear = 2000
            const actual = findfriday13s(startYear)
            const expected = ['2000.10.13.']

            expect(actual).toEqual(expected)
        })

        it('should return empty string when undefined', () => {

            const startYear = undefined
            const endYear = undefined
            const actual = findfriday13s(startYear, endYear)
            const expected = null

            expect(actual).toEqual(expected)
        })

        it('should return empty string when null', () => {

            const startYear = null
            const endYear = null
            const actual = findfriday13s(startYear, endYear)
            const expected = null

            expect(actual).toEqual(expected)
        })
    })
})