import { generateShortNumericHash } from "./utils";

describe("generateShortNumericHash", () => {

  it("should generate a consistent short hash for a given string", () => {
    // Arrange
    const testData = "Hello, World!";

    // Act
    const result = generateShortNumericHash(testData);

    // Assert
    expect(typeof result).toBe("string");
    expect(result).toHaveLength(18);
  });

  it("should generate different hashes for different inputs", () => {
    // Arrange
    const testData1 = "Hello, World!";
    const testData2 = "Hello, Worl!d";

    // Act
    const result1 = generateShortNumericHash(testData1);
    const result2 = generateShortNumericHash(testData2);

    // Assert
    expect(result1).not.toEqual(result2);
  });

  it("should handle empty string input", () => {
    // Arrange
    const testData = "";

    // Act
    const result = generateShortNumericHash(testData);

    // Assert
    expect(typeof result).toBe("string");
    expect(result).toHaveLength(18);
  });

  it("should handle very long string input", () => {
    // Arrange
    const testData = "a".repeat(10000); // Very long string

    // Act
    const result = generateShortNumericHash(testData);

    // Assert
    expect(typeof result).toBe("string");
    expect(result).toHaveLength(18);
  });

  it("should throw an error if input is not a string", () => {
    // Arrange
    const testData: any = 12345; // Invalid input

    // Act & Assert
    expect(() => generateShortNumericHash(testData)).toThrow(TypeError);
  });
});