import { isPalindrome, Palindrome } from './palindrome'

describe('palindrome', () => {

    describe('isPalindrome', () => {
        it('should pass', () => {
            expect(isPalindrome()).toBeDefined()
        })
    })

    describe('Palindrome', () => {
        it('should pass', () => {
            expect(Palindrome()).toBeDefined()
        })
    })


})