describe("Subtraction", function() {
  it("should subtract two numbers", function() {
    const calculator = new Calculator();
    const expectedResult = 2;
    const actualResult = calculator.subtract(4, 2);
    expect(actualResult).to.equal(expectedResult);
  });

  it("should subtract a negative number from a positive number", function() {
    const calculator = new Calculator();
    const expectedResult = 6;
    const actualResult = calculator.subtract(8, 2);
    expect(actualResult).to.equal(expectedResult);
  });

  it("should subtract a negative number from a negative number", function() {
    const calculator = new Calculator();
    const expectedResult = -4;
    const actualResult = calculator.subtract(-6, 2);
    expect(actualResult).to.equal(expectedResult);
  });
});
