import { getUUIDBlocks, UUIDBlocks, formatUUIDBlocks } from './uuid-blocks'


describe('uuid-blocks', () => {

    describe('getUUIDBlocks', () => {
        it('should pass', () => {
            const text = 'f782f011-636a-4d8b-9f63-dc34a4503c01'
            const actual = getUUIDBlocks(text)
            const expected = ['f7', '82', 'f0', '11', '63', '6a', '4d', '8b', '9f', '63', 'dc', '34', ' a4', '50', '3c', '01']

            expect(actual).toEqual(expected)
        })
    })

    describe('UUIDBlocks', () => {
        it('should pass', () => {
            const text = 'f782f011-636a-4d8b-9f63-dc34a4503c01'
            const actual = UUIDBlocks(text)
            const expected = ['f7', '82', 'f0', '11', '63', '6a', '4d', '8b', '9f', '63', 'dc', '34', ' a4', '50', '3c', '01']

            expect(actual).toEqual(expected)
        })
    })

    describe('formatUUIDBlocks', () => {
        it('should pass', () => {
            const text = 'f782f011-636a-4d8b-9f63-dc34a4503c01'
            const actual = formatUUIDBlocks(text)
            const expected = ['f7', '82', 'f0', '11', '63', '6a', '4d', '8b', '9f', '63', 'dc', '34', ' a4', '50', '3c', '01']

            expect(actual).toEqual(expected)
        })
    })
})