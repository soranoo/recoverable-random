/**
 * A recoverable number generator that generates pseudorandom integer or floating-point numbers within a given range.
 * The generator can be initialized with a seed value, and its state can be recovered by providing a state code.
 */
export default class NumberGenerator {
    private seed;
    private state;
    /**
     * Creates a new instance of the `NumberGenerator` class with the specified seed value.
     * @param seed - (optional) The seed value for the generator, which can be either a number or a string.
     */
    constructor(seed?: number | string);
    /**
     * Converts a string value into a numerical seed value by summing the ASCII values of its characters.
     * @param str - The input string to convert.
     * @returns - The resulting seed value.
     */
    private stringToSeed;
    /**
     * Generates a pseudorandom number between 0 and 1 using the sine function, based on the current state value.
     * @returns - The generated random number.
     */
    private generateRandomNumber;
    /**
     * Generates a pseudorandom number within the specified range.
     * @param min - The minimum value of the range.
     * @param max - The maximum value of the range.
     * @param isFloat - (optional) Whether to generate a floating-point number (default: false).
     * @returns - The generated random number.
     */
    random(min: number, max: number, isFloat?: boolean): number;
    /**
     * Gets the current state of the generator as a string code.
     * @returns - The state code.
     */
    getStateCode(): string;
    /**
     * Sets the state of the generator to a previously obtained state code.
     * @param stateCode - The state code to recover.
     */
    recoverState(stateCode: string): void;
}
