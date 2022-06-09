import { getFileExtension, extension } from './file-extension'

describe('file-extension', () => {

    describe('getFileExtension', () => {
        it('should pass', () => {
            const filename = 'data.txt'
            const actual = getFileExtension(filename)
            const expected = 'txt'

            expect(actual).toEqual(expected)
        })

        it('should pass', () => {
            const filename = 'README'
            const actual = getFileExtension(filename)
            const expected = false

            expect(actual).toEqual(expected)
        })
    })

    describe('extension', () => {
        it('should pass', () => {
            const filename = 'data.txt'
            const actual = extension(filename)
            const expected = 'txt'

            expect(actual).toEqual(expected)
        })

        it('should pass', () => {
            const filename = 'README'
            const actual = extension(filename)
            const expected = false

            expect(actual).toEqual(expected)
        })
    })
})