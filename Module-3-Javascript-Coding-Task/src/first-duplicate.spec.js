import { getFirstDuplicate } from './first-duplicate'

describe('getFirstDuplicate', () => {
    it('should return b', () => {

        const text = 'abccb'
        const actual = getFirstDuplicate(text)
        const expected = 'b'

        expect(actual).toEqual(expected)

    })
    it('should return empty string', () => {

        const text = 'abc'
        const actual = getFirstDuplicate(text)
        const expected = ''

        expect(actual).toEqual(expected)

    })
    it('should return empty string when undefined', () => {

        const text = undefined
        const actual = getFirstDuplicate(text)
        const expected = ''

        expect(actual).toEqual(expected)

    })
})