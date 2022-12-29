import slugger from "./index.js"

describe('testing slugger basic functionality', () => {
    it('slugger can slug string with spaces', () => {
        slugger("hello ", "i", "am", "the", "slugger")
        expect(...words).toEqual(" ")
    })
    test('slugger can slug any number of spacy strings', () => {
        slugger("and","i","am","working")
        expect(...words).toEqual(expect.any(String))
    })
})