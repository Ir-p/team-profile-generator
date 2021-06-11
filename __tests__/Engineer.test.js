// Import Engineer
const Engineer = require("../lib/Engineer")

describe('Engineer Class Test', () => {

    // test initialization
    test('Engineer Initialization', () => {

        // arange, act
        const engineerObj = new Engineer();

        // assert
        expect(engineerObj instanceof Engineer).toBe(true)
    })

    // test success(properties, methods)
    describe('Engineer Props', () => {
        test('Github Prop', () => {
            // arrange
            const expectedGithubValue = "https://github.com"

            // act
            engineerObj = new Engineer(expectedGithubValue)

            // assert

           expect(engineerObj.name).toBe(expectedGithubValue)

        })
    })

})