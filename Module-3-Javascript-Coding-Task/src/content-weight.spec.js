import { contentWeight, contentWeightCalc } from './content-weight'

describe('content-weight', () => {

    describe('contentWeight', () => {
        it('should pass', () => {
            expect(contentWeight()).toBeDefined()
        })
    })

    describe('contentWeightCalc', () => {
        it('should pass', () => {
            expect(contentWeightCalc()).toBeDefined()
        })
    })
})
