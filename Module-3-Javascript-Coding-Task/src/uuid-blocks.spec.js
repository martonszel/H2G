import { getUUIDBlocks, UUIDBlocks, formatUUIDBlocks } from './uuid-blocks'


describe('uuid-blocks', () => {

    describe('getUUIDBlocks', () => {
        it('should pass', () => {
            expect(getUUIDBlocks()).toBeDefined()
        })
    })

    describe('UUIDBlocks', () => {
        it('should pass', () => {
            expect(UUIDBlocks()).toBeDefined()
        })
    })

    describe('formatUUIDBlocks', () => {
        it('should pass', () => {
            expect(formatUUIDBlocks()).toBeDefined()
        })
    })
})