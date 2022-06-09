import { getConvertedUUIDBlocks, convertedUUIDBlocks } from './uuid-conversion'

describe('uuid-conversion', () => {

    describe('getConvertedUUIDBlocks', () => {
        it('should pass', () => {
            expect(getConvertedUUIDBlocks()).toBeDefined()
        })

    })
    describe('convertedUUIDBlocks', () => {
        it('should pass', () => {
            expect(convertedUUIDBlocks()).toBeDefined()
        })

    })


})
