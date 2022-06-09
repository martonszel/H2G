import { getFriday13s, friday13s, findfriday13s } from './friday-13'

describe('friday-13', () => {

    describe('getFriday13s', () => {
        it('should pass', () => {
            expect(getFriday13s()).toBeDefined()
        })
    })

    describe('friday13s', () => {
        it('should pass', () => {
            expect(friday13s()).toBeDefined()
        })
    })

    describe('findfriday13s', () => {
        it('should pass', () => {
            expect(findfriday13s()).toBeDefined()
        })
    })
})