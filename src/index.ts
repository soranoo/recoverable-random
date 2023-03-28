/**
 * A recoverable number generator that generates pseudorandom integer or floating-point numbers within a given range.
 * The generator can be initialized with a seed value, and its state can be recovered by providing a state code.
 */
export default class NumberGenerator {
    private seed: number;
    private state: number;

    /**
     * Creates a new instance of the `NumberGenerator` class with the specified seed value.
     * @param seed - (optional) The seed value for the generator, which can be either a number or a string.
     */
    constructor(seed?: number | string) {
        if (!seed)
            seed = Date.now();

        if (typeof seed === "string") {
            this.seed = this.stringToSeed(seed);
        } else {
            this.seed = seed;
        }
        this.state = this.seed;
    }

    /**
     * Converts a string value into a numerical seed value by summing the ASCII values of its characters.
     * @param str - The input string to convert.
     * @returns - The resulting seed value.
     */
    private stringToSeed(str: string): number {
        let seed = 0;
        for (let i = 0; i < str.length; i++) {
            seed += str.charCodeAt(i);
        }
        return seed;
    }

    /**
     * Generates a pseudorandom number between 0 and 1 using the sine function, based on the current state value.
     * @returns - The generated random number.
     */
    private generateRandomNumber(): number {
        const x = Math.sin(this.state++) * 10000;
        return x - Math.floor(x);
    }

    /**
     * Generates a pseudorandom number within the specified range.
     * @param min - The minimum value of the range.
     * @param max - The maximum value of the range.
     * @param isFloat - (optional) Whether to generate a floating-point number (default: false).
     * @returns - The generated random number.
     */
    public random(min: number, max: number, isFloat: boolean = false): number {
        const range = max - min;
        const randomNumber = min + (range * this.generateRandomNumber());
        if (isFloat) {
            return randomNumber;
        } else {
            return Math.floor(randomNumber);
        }
    }

    /**
     * Gets the current state of the generator as a string code.
     * @returns - The state code.
     */
    public getStateCode(): string {
        return this.state.toString();
    }

    /**
     * Sets the state of the generator to a previously obtained state code.
     * @param stateCode - The state code to recover.
     */
    public recoverState(stateCode: string): void {
        this.state = parseInt(stateCode);
        if (isNaN(this.state))
            this.state = this.stringToSeed(stateCode);
    }
}
