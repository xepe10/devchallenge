import { sieve, findPrime } from '../src/index.js'

describe('Sieve of Erotosthenes', () => {
    test('Prime numbers from 1 to 5', () => {
        expect(sieve(5)).toEqual([2,3]);
    });
    test('Prime numbers from 1 to 10', () => {
        expect(sieve(10)).toEqual([2,3,5,7]);
    });
    test('find prime number with longer sum from 100', () => {
        expect(findPrime(100)).toBe(41);
    });
});