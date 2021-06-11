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
        test('should return a string if a string is entered as an input', () => {
            // arrange
            const expectedNameValue = "Joanna"

            // act
            employeeObj = new Employee(expectedNameValue)

            // assert
           expect(employeeObj.name).toBe(expectedNameValue)

        });

        test('should return a number if a number is entered as input', () => {
            const num = 123;
            const employeeObj = new Employee("Joanna", num);
            expect(employeeObj.id).toBe(num)
        });

        test('should return an email if an email entered as input', () => {
            const email = "joanna@gmail.com";
            const employeeObj = new Employee("Joanna", 123, email);
            expect(employeeObj.email).toBe(email)
        });
    });

})