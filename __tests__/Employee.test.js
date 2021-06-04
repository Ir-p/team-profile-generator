// Import Employee
const Employee = require("../lib/Employee")

describe('Employee Class Test', () => {

    // test initialization
    test('Employee Initialization', () => {

        // arange, act
        const employeeObj = new Employee();

        // assert
        expect(employeeObj instanceof Employee).toBe(true)
    })

    // test success(properties, methods)
    describe('Employee Props', () => {
        test('Name Prop', () => {
            // arrange
            const expectedNameValue = "Joanna"

            // act
            employeeObj = new Employee(expectedNameValue)

            // assert
           expect(employeeObj.name).toBe(expectedNameValue)

        })
    })
    // test failures, undefined, errors
})