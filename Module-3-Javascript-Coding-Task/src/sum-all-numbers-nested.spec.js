import { sumArray, sumNumbers } from './sum-all-numbers-nested'

describe('sum-all-numbers-nested', () => {

    describe('sumArray', () => {
        it('should pass', () => {
            expect(sumArray()).toBeDefined()
        })
    })

    describe('sumNumbers', () => {
        it('should pass', () => {
            expect(sumNumbers()).toBeDefined()
        })
    })
})