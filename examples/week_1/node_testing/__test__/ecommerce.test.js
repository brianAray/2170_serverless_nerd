const { calculateTotal, createCartMessage} = require("../ecommerce");

/*
    Mocks are essentially dummy objects that can be setup to behave in any way that you need
    The operatons however are focused purely on input and output

    When a mock object is called with this parameter, return back this value

    COde typically has dependencies, however, unit testing requires isolation

    In order to create this isolation, we mock any dependencies a unit of code has

*/

// create a mock function for the calculateTotal function

const mockCalculateTest = jest.fn();

// dummy shopping cart

const dummyCart = [
    {id: 1, name: "product 1", price: 10},
    {id: 2, name: "product 2", price: 20},
    {id: 3, name: "product 3", price: 30},
];

test("create cart message should get the correct message for the cart", () => {
    // configure the mock function to return a fixed value
    mockCalculateTest.mockReturnValue(60);

    const cartMessage = createCartMessage(dummyCart, mockCalculateTest);

    expect(mockCalculateTest).toHaveBeenCalledWith(dummyCart);

    expect(cartMessage).toBe("Total Price is: 60");
})
