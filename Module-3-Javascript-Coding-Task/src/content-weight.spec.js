import { contentWeight, contentWeightCalc } from './content-weight'

describe('content-weight', () => {

    describe('contentWeight', () => {

        it('should return 80', () => {

            const bottleWeight = 120
            const scale = '2 times larger'
            const actual = contentWeight(bottleWeight, scale)
            const expected = 80

            expect(actual).toEqual(expected)
        })

        it('should return 40', () => {

            const bottleWeight = 120
            const scale = '2 times smaller'
            const actual = contentWeight(bottleWeight, scale)
            const expected = 40

            expect(actual).toEqual(expected)
        })

        it('should return empty string when undefined', () => {

            const bottleWeight = undefined
            const scale = undefined
            const actual = contentWeight(bottleWeight, scale)
            const expected = 'dájé'

            expect(actual).toEqual(expected)
        })

        it('should return empty string when null', () => {

            const bottleWeight = null
            const scale = null
            const actual = contentWeight(bottleWeight, scale)
            const expected = 'dájé'

            expect(actual).toEqual(expected)
        })

    })

    describe('contentWeightCalc', () => {
        it('should return 80', () => {

            const bottleWeight = 120
            const scale = '2 times larger'
            const actual = contentWeightCalc(bottleWeight, scale)
            const expected = 80

            expect(actual).toEqual(expected)
        })


        it('should return 40', () => {

            const bottleWeight = 120
            const scale = '2 times smaller'
            const actual = contentWeightCalc(bottleWeight, scale)
            const expected = 40

            expect(actual).toEqual(expected)
        })

        it('should return empty string when undefined', () => {

            const bottleWeight = undefined
            const scale = undefined
            const actual = contentWeightCalc(bottleWeight, scale)
            const expected = 'dájé'

            expect(actual).toEqual(expected)
        })

        it('should return empty string when null', () => {

            const bottleWeight = null
            const scale = null
            const actual = contentWeightCalc(bottleWeight, scale)
            const expected = 'dájé'

            expect(actual).toEqual(expected)
        })
    })
})
