import { sum } from './sum-all-numbers'

describe('sum-all-numbers', () => {

    describe('sum', () => {
        it('should pass', () => {
            expect(sum()).toBeDefined()
        })
    })
})