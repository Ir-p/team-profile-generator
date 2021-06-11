// Import Intern
const Intern = require("../lib/Intern")

describe('Intern Class Test', () => {

    // test initialization
    test('Intern Initialization', () => {

        // arange, act
        const internObj = new Intern();

        // assert
        expect(internObj instanceof Intern).toBe(true)
    })

    // test success(properties, methods)
    describe('Intern Props', () => {
        test('School Prop', () => {
            // arrange
            const expectedSchoolValue = 2

            // act
            internObj = new Intern (expectedSchoolValue)

            // assert

           expect(internObj.name).toBe(expectedSchoolValue)

        })
    })

})