import { isPalindrome, palindrome } from './palindrome'

describe('palindrome', () => {

    describe('isPalindrome', () => {
        it('should pass', () => {
            const text = 'indul a gorog aludni'
            const actual = isPalindrome(text)
            const expected = true

            expect(actual).toEqual(expected)
        })

        it('should pass', () => {
            const text = ''
            const actual = isPalindrome(text)
            const expected = false

            expect(actual).toEqual(expected)
        })

        it('should pass', () => {
            const text = 'karalábé'
            const actual = isPalindrome(text)
            const expected = false

            expect(actual).toEqual(expected)
        })
    })

    describe('Palindrome', () => {
        it('should pass', () => {
            const text = 'indul a gorog aludni'
            const actual = palindrome(text)
            const expected = true

            expect(actual).toEqual(expected)
        })

        it('should pass', () => {
            const text = 'karalábé'
            const actual = palindrome(text)
            const expected = false

            expect(actual).toEqual(expected)
        })

        it('should pass', () => {
            const text = ''
            const actual = palindrome(text)
            const expected = false

            expect(actual).toEqual(expected)
        })
    })


})