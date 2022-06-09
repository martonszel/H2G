import { contentWeight, contentWeightCalc } from './content-weight'

describe('content-weight', () => {

    describe('contentWeight', () => {

        it('should pass', () => {

            const bottleWeight = 120
            const scale = '2 times larger'
            const actual = contentWeight(bottleWeight, scale)
            const expected = 80

            expect(actual).toEqual(expected)
        })

        it('should pass', () => {

            const bottleWeight = 120
            const scale = '2 times smaller'
            const actual = contentWeight(bottleWeight, scale)
            const expected = 40

            expect(actual).toEqual(expected)
        })
    })

    describe('contentWeightCalc', () => {
        it('should pass', () => {

            const bottleWeight = 120
            const scale = '2 times larger'
            const actual = contentWeightCalc(bottleWeight, scale)
            const expected = 80

            expect(actual).toEqual(expected)
        })

        it('should pass', () => {

            const bottleWeight = 120
            const scale = '2 times smaller'
            const actual = contentWeightCalc(bottleWeight, scale)
            const expected = 40

            expect(actual).toEqual(expected)
        })
    })
})
