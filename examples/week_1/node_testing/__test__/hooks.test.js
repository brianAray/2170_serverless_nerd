const mathOperations = require("../mathOperations");

// hooks
// setups and teardowns

/*
    There are 4 hooks
    
    beforeEach and afterEach
    Executed before and after each test in the test suite

    beforeAll and afterAll
    Executed just once for each test suite
*/

describe("Calculator with hooks", () => {
    let input1 = 0;
    let input2 = 0;

    beforeAll(() => {
        console.log("Before all called");
        input1 = 0;
        input2 = 0;
    })

    afterAll(() => {
        console.log("afterAll called")
        input1 = 0;
        input2 = 0;
    })

    beforeEach(() => {
        console.log("before each called");
        input1 = 1;
        input2 = 2;
    })

    afterEach(() => {
        console.log("after each");
    })

    test("Adding 1 + 2 should return 3", () => {
        let result = mathOperations.sum(input1, input2);
        expect(result).toBe(3);
    })
})