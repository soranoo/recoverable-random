"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe("NumberGenerator", () => {
    describe("seed", () => {
        it("should generate the same sequence of random numbers when initialized with the same seed", () => {
            const generator1 = new index_1.default("test");
            const generator2 = new index_1.default("test");
            const num1 = generator1.random(0, 10);
            const num2 = generator2.random(0, 10);
            expect(num1).toBe(num2);
        });
        it("can be initialized with a number", () => {
            const generator = new index_1.default(123);
            const num = generator.random(0, 10);
            expect(num).toBeGreaterThanOrEqual(0);
            expect(num).toBeLessThanOrEqual(10);
        });
        it("can be initialized with a string", () => {
            const generator = new index_1.default("test");
            const num = generator.random(0, 10);
            expect(num).toBeGreaterThanOrEqual(0);
            expect(num).toBeLessThanOrEqual(10);
        });
        it("can be initialized with no seed value", () => {
            const generator = new index_1.default();
            const num = generator.random(0, 10);
            expect(num).toBeGreaterThanOrEqual(0);
            expect(num).toBeLessThanOrEqual(10);
        });
    });
    describe("random", () => {
        it("should return a random integer between the specified range", () => {
            const generator = new index_1.default("test");
            const result = generator.random(0, 10);
            expect(result).toBeGreaterThanOrEqual(0);
            expect(result).toBeLessThanOrEqual(10);
            expect(Number.isInteger(result)).toBe(true);
        });
        it("should return a random floating-point number between the specified range if isFloat is true", () => {
            const generator = new index_1.default("test");
            const result = generator.random(0, 1, true);
            expect(result).toBeGreaterThanOrEqual(0);
            expect(result).toBeLessThanOrEqual(1);
            expect(Number.isInteger(result)).toBe(false);
        });
    });
    describe("getStateCode", () => {
        it("should return the current state of the generator as a string code", () => {
            const generator = new index_1.default("test");
            const stateCode = generator.getStateCode();
            expect(typeof stateCode).toBe("string");
            expect(stateCode.length).toBeGreaterThan(0);
        });
    });
    describe("recoverState", () => {
        it("should recover the state of the generator from a state code", () => {
            const generator1 = new index_1.default("test");
            const stateCode1 = generator1.getStateCode();
            const num1 = generator1.random(0, 10);
            const generator2 = new index_1.default("expect");
            generator2.recoverState(stateCode1);
            const num2 = generator2.random(0, 10);
            expect(num1).toBe(num2);
        });
        it("can be recovered by (text)string not limited to (number)string a.k.a. state code", () => {
            const generator1 = new index_1.default();
            generator1.recoverState("test");
            const num1 = generator1.random(0, 10);
            const generator2 = new index_1.default("test");
            const num2 = generator2.random(0, 10);
            expect(num1).toBe(num2);
        });
    });
});
