import { order, orderNumbers } from './order-elements'

describe('order-elements', () => {

    describe('order', () => {
        it('should pass', () => {
            expect(order()).toBeDefined()
        })
    })

    describe('orderNumbers', () => {
        it('should pass', () => {
            expect(orderNumbers()).toBeDefined()
        })
    })
})