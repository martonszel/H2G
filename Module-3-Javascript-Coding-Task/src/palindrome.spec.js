import { isPalindrome, palindrome } from './palindrome'

describe('palindrome', () => {

    describe('isPalindrome', () => {
        it('should return true', () => {
            const text = 'indul a gorog aludni'
            const actual = isPalindrome(text)
            const expected = true

            expect(actual).toEqual(expected)
        })

        it('should return true', () => {
            const text = 'anna      '
            const actual = isPalindrome(text)
            const expected = true

            expect(actual).toEqual(expected)
        })

        it('should return false', () => {
            const text = ''
            const actual = isPalindrome(text)
            const expected = false

            expect(actual).toEqual(expected)
        })

        it('should return false', () => {
            const text = 'karalábé'
            const actual = isPalindrome(text)
            const expected = false

            expect(actual).toEqual(expected)
        })

        it('should return null when undefined', () => {

            const text = undefined
            const actual = isPalindrome(text)
            const expected = false

            expect(actual).toEqual(expected)
        })

        it('should return null when null', () => {

            const text = null
            const actual = isPalindrome(text)
            const expected = false

            expect(actual).toEqual(expected)
        })
    })

    describe('Palindrome', () => {
        it('should return true', () => {
            const text = 'indul a gorog aludni'
            const actual = palindrome(text)
            const expected = true

            expect(actual).toEqual(expected)
        })

        it('should return true', () => {
            const text = 'anna      '
            const actual = palindrome(text)
            const expected = true

            expect(actual).toEqual(expected)
        })

        it('should return false', () => {
            const text = 'karalábé'
            const actual = palindrome(text)
            const expected = false

            expect(actual).toEqual(expected)
        })

        it('should return false', () => {
            const text = ''
            const actual = palindrome(text)
            const expected = false

            expect(actual).toEqual(expected)
        })

        it('should return null when undefined', () => {

            const text = undefined
            const actual = palindrome(text)
            const expected = false

            expect(actual).toEqual(expected)
        })

        it('should return null when null', () => {

            const text = null
            const actual = palindrome(text)
            const expected = false

            expect(actual).toEqual(expected)
        })
    })
})