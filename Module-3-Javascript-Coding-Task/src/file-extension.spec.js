import { getFileExtension, extension } from './file-extension'

describe('file-extension', () => {

    describe('getFileExtension', () => {
        it('should return txt', () => {
            const filename = 'data.txt'
            const actual = getFileExtension(filename)
            const expected = 'txt'

            expect(actual).toEqual(expected)
        })

        it('should return js', () => {
            const filename = 'component.test.js'
            const actual = getFileExtension(filename)
            const expected = 'js'

            expect(actual).toEqual(expected)
        })

        it('should return false', () => {
            const filename = 'README'
            const actual = getFileExtension(filename)
            const expected = false

            expect(actual).toEqual(expected)
        })

        it('should return false', () => {
            const filename = '.git'
            const actual = getFileExtension(filename)
            const expected = false

            expect(actual).toEqual(expected)
        })

        it('should return empty string when undefined', () => {

            const filename = undefined
            const actual = getFileExtension(filename)
            const expected = null

            expect(actual).toEqual(expected)
        })

        it('should return empty string when null', () => {

            const filename = null
            const actual = getFileExtension(filename)
            const expected = null

            expect(actual).toEqual(expected)
        })
    })

    describe('extension', () => {
        it('should return txt', () => {
            const filename = 'data.txt'
            const actual = extension(filename)
            const expected = 'txt'

            expect(actual).toEqual(expected)
        })

        it('should return js', () => {
            const filename = 'component.test.js'
            const actual = extension(filename)
            const expected = 'js'

            expect(actual).toEqual(expected)
        })

        it('should return false', () => {
            const filename = 'README'
            const actual = extension(filename)
            const expected = false

            expect(actual).toEqual(expected)
        })

        it('should return false', () => {
            const filename = '.git'
            const actual = extension(filename)
            const expected = false

            expect(actual).toEqual(expected)
        })

        it('should return empty string when undefined', () => {

            const filename = undefined
            const actual = extension(filename)
            const expected = null

            expect(actual).toEqual(expected)
        })

        it('should return empty string when null', () => {

            const filename = null
            const actual = extension(filename)
            const expected = null

            expect(actual).toEqual(expected)
        })
    })
})