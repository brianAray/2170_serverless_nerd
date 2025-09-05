// Jest matchers
// Improved Expect

// AAA
// Arrange Act Assert

// Equality
test('Equally Matchers', () => {
    expect(2*2).toBe(4);
    expect(4*2).not.toBe(1);
});

// Truthiness
test("Truthy Operators", () => {
    let name = "revature";
    let n = null;

    expect(n).toBeNull();
    expect(name).not.toBeNull();

    expect(name).toBeTruthy();

    expect(n).toBeFalsy();
})