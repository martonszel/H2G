import { sumArray, sumEven } from './sum-all-even-numbers'

describe('sum-all-even-numbers', () => {

    describe('sumArray', () => {
        it('should pass', () => {
            expect(sumArray()).toBeDefined()
        })
    })

    describe('sumEven', () => {
        it('should pass', () => {
            expect(sumEven()).toBeDefined()
        })
    })
})