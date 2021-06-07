// Import Manager
const Manager = require("../lib/Manager")

describe('Manager Class Test', () => {

    // test initialization
    test('Manager Initialization', () => {

        // arange, act
        const managerObj = new Manager();

        // assert
        expect(managerObj instanceof Manager).toBe(true)
    })

    // test success(properties, methods)
    describe('Manager Props', () => {
        test('Office Number Prop', () => {
            // arrange
            const expectedOfficeNumberValue = 10

            // act
            officeNumberObj = new Manager (expectedOfficeNumberValue)

            // assert

           expect(officeNumberObj.name).toBe(expectedOfficeNumberValue)

        })
    })
    // test failures, undefined, errors
})