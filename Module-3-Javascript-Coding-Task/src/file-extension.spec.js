import { getFileExtension, extension } from './file-extension'

describe('file-extension', () => {

    describe('getFileExtension', () => {
        it('should pass', () => {
            expect(getFileExtension()).toBeDefined()
        })
    })

    describe('extension', () => {
        it('should pass', () => {
            expect(extension()).toBeDefined()
        })
    })
})