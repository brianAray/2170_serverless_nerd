const mathOperations = require('../mathOperations');

/*
    Describe
    The describe block is an outer description for the test suite

    Individual Tests
    These test blocks represent a single test, the string in quotes is the test description

    Expect block
    Expect is an assertion of some kind of verification

*/

// Version 1

describe("Calculator Tests Version 1", () => {
    test("Adding 1 + 2 should return 3", () => {
        expect(mathOperations.sum(1, 2)).toBe(3);
    })
})

// Version 2 - Cleaner

describe("Calculator Tests Version 2", () => {
    test("Adding 4 + 5 should return 9", () => {
        // AAA

        // Arrange
        let result = 0;
        let a = 4;
        let b = 5;
        let expectedAnswer = 9;

        // Action
        result = mathOperations.sum(a, b);

        // Assert
        expect(result).toBe(expectedAnswer);
    })

    test("Subtracting 2 from 10 should return 8", () => {
        // arrange and act
        let result = mathOperations.diff(10, 2);

        // assert
        expect(result).toBe(8);
    })
})