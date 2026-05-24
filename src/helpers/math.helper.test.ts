import { describe, expect, test } from 'vitest';
import { add, divide, multiply, subtract } from './math.helper';


describe('add', () => {
    test(`should add two positives numbers`, () => {

    // ! 1. Arrange (es la preparacion)
    const a = 1;
    const b = 2;

    // ! 2. Act (es aplicar estimulos)
    const result = add(a, b)

    // ! 3. Assert
    expect(result).toBe(a + b);


    //const result = add(1,3)
    //console.log({result});
    //expect(result).toBe(4);

    });
    
    test(`should add two negative numbers`, () => {

    // ! 1. Arrange (es la preparacion)
    const a = -1;
    const b = -4;

    // ! 2. Act (es aplicar estimulos)
    const result = add(a, b)

    // ! 3. Assert
    expect(result).toBe(a + b);
    });
});


describe('subtract', () => {
    test('test subtract', () => {
        const a = 4;
        const b= 0;

        const result = subtract(a, b)

        expect(result).toBe(a - b);
    });
    test('test negative subtract ', () => {
        const a = 4;
        const b= -3;

        const result = subtract(a, b)

        expect(result).toBe(a - b);
    });
});


describe('multiply', () => {
    test('test negative multiply', () => {
        const a = 4;
        const b = -5;

        const result = multiply(a, b)
        expect(result).toBe(a * b)
    });
    test('test multiply', () => {
        const a = 4;
        const b = 0;

        const result = multiply(a, b)
        expect(result).toBe(a * b)
    });
});
describe('multiply', () => {
    test('should divide positive two positive numbers', () => {
        const a = 4;
        const b = 6;

        const result = divide(a, b)
        expect(result).toBe(a / b)
    });

});


