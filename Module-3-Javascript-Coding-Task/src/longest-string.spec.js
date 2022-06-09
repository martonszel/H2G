import { getLongestString, longestString, otherLongestString } from './longest-string'

describe('longest-string', () => {

    describe('getLongestString', () => {
        it('should pass', () => {
            expect(getLongestString()).toBeDefined()
        })
    })

    describe('longestString', () => {
        it('should pass', () => {
            expect(longestString()).toBeDefined()
        })
    })

    describe('otherLongestString', () => {
        it('should pass', () => {
            expect(otherLongestString()).toBeDefined()
        })
    })
})