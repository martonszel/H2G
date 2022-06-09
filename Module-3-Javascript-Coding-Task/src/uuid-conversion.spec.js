import { getConvertedUUIDBlocks, convertedUUIDBlocks } from './uuid-conversion'

describe('uuid-conversion', () => {

    describe('getConvertedUUIDBlocks', () => {
        it('should pass', () => {
            const text = 'f782f011-636a-4d8b-9f63-dc34a4503c01'
            const actual = getConvertedUUIDBlocks(text)
            const expected = [247, 130, 240, 17, 99, 106, 77, 139, 159, 99, 220, 52, 164, 80, 60, 1]

            expect(actual).toEqual(expected)
        })

    })
    describe('convertedUUIDBlocks', () => {
        it('should pass', () => {
            const text = 'f782f011-636a-4d8b-9f63-dc34a4503c01'
            const actual = convertedUUIDBlocks(text)
            const expected = [247, 130, 240, 17, 99, 106, 77, 139, 159, 99, 220, 52, 164, 80, 60, 1]

            expect(actual).toEqual(expected)
        })

    })


})
