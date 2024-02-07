import { generateShortNumericHash } from "./utils";

/**
 * A recoverable number generator that generates pseudorandom integer or floating-point numbers within a given range.
 * The generator can be initialized with a seed value, and its state can be recovered by providing a state code.
 */
export default class NumberGenerator {
    private seed: number = Date.now();
    private state: number = this.seed;

    /**
     * Creates a new instance of the `NumberGenerator` class with the specified seed value.
     * @param seed - (optional) The seed value for the generator, which can be either a number or a string.
     */
    constructor(seed?: number | string) {
        if (seed) {
            this.setSeed(seed);
        }
    }

    /**
     * Converts a string value into a numerical seed value by summing the ASCII values of its characters.
     * @param str - The input string to convert.
     * @returns - The resulting seed value.
     */
    static stringToSeed(str: string): number {
        let seed = generateShortNumericHash(str);
        return parseInt(seed);
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
        if (isNaN(this.state)) {
            this.state = NumberGenerator.stringToSeed(stateCode);
        }
    }

    /**
     * Sets the seed value of the generator, which resets the state to the seed value.
     * @param seed - The new seed value for the generator, which can be either a number or a string.
     */
    public setSeed(seed: number | string): void {
        if (typeof seed === "string") {
            this.seed = NumberGenerator.stringToSeed(seed);
        } else if (typeof seed === "number") {
            this.seed = seed;
        } else {
            throw new Error("Invalid seed value");
        }
        this.state = this.seed;
    }
}
