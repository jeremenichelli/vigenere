import { cipher, decipher } from '../src/vigenere.js';

describe('Primary access', () => {
    it('vigenere cipher available in global scope as a function', () => {
        expect(typeof cipher).toBe('function');
    });
    it('vigenere decipher available in global scope as a function', () => {
        expect(typeof decipher).toBe('function');
    });
});

describe('Errors', () => {
    it('when word is not a string', () => {
        let error1,
            error2;

        // cipher
        try {
            cipher(12345, 'phrase');
        } catch (e) {
            error1 = e;
        }

        // decipher
        try {
            decipher(12345, 'phrase');
        } catch (e) {
            error2 = e;
        }

        expect(error1 instanceof Error).toBe(true);
        expect(error2 instanceof Error).toBe(true);
    });
    it('when phrase is not a string', () => {
        let error1,
            error2;

        // cipher
        try {
            cipher('phrase', 12345);
        } catch (e) {
            error1 = e;
        }

        // decipher
        try {
            decipher('phrase', 12345);
        } catch (e) {
            error2 = e;
        }

        expect(error1 instanceof Error).toBe(true);
        expect(error2 instanceof Error).toBe(true);
    });
    it('when call with not enough arguments', () => {
        let error1,
            error2;

        // cipher
        try {
            cipher('phrase');
        } catch (e) {
            error1 = e;
        }

        // decipher
        try {
            decipher('phrase');
        } catch (e) {
            error2 = e;
        }

        expect(error1 instanceof Error).toBe(true);
        expect(error2 instanceof Error).toBe(true);
    });
    it('when word contains characters that are not letters', () => {
        let error1,
            error2;

        // cipher
        try {
            cipher('w0rd', 'phrase');
        } catch (e) {
            error1 = e;
        }

        // decipher
        try {
            decipher('w0rd', 'phrase');
        } catch (e) {
            error2 = e;
        }

        expect(error1 instanceof Error).toBe(true);
        expect(error2 instanceof Error).toBe(true);
    });
});

describe('cipher', () => {
    it('with all uppercase letters and no special characters', () => {
        expect(cipher('LEMON', 'ATTACKATDAWN')).toEqual('LXFOPVEFRNHR');
    });
    it('with all uppercase letters and spaces', () => {
        expect(cipher('LEMON', 'ATTACK AT DAWN')).toEqual('LXFOPV EF RNHR');
    });
    it('with all lowercase letters and no special characters', () => {
        expect(cipher('lemon', 'attackatdawn')).toEqual('lxfopvefrnhr');
    });
    it('with lowercase letters and spaces', () => {
        expect(cipher('lemon', 'attack at dawn')).toEqual('lxfopv ef rnhr');
    });
    it('with mix of upper and lowercase letters and special characters', () => {
        expect(cipher('lemon', 'Attack At daWn!')).toEqual('Lxfopv Ef rnHr!');
    });
    it('with an empty string as a phrase returns an empty string', () => {
        expect(cipher('word', '')).toEqual('');
    });
    it('produces same result with key word on lower or uppercase', () => {
        expect(cipher('lEmOn', 'ATTACK AT DAWN')).toEqual('LXFOPV EF RNHR');
    });
});

describe('decipher', () => {
    it('with all uppercase letters and no special characters', () => {
        expect(decipher('LEMON', 'LXFOPVEFRNHR')).toEqual('ATTACKATDAWN');
    });
    it('with all uppercase letters and spaces', () => {
        expect(decipher('LEMON', 'LXFOPV EF RNHR')).toEqual('ATTACK AT DAWN');
    });
    it('with all lowercase letters and no special characters', () => {
        expect(decipher('lemon', 'lxfopvefrnhr')).toEqual('attackatdawn');
    });
    it('with lowercase letters and spaces', () => {
        expect(decipher('lemon', 'lxfopv ef rnhr')).toEqual('attack at dawn');
    });
    it('with mix of upper and lowercase letters and special characters', () => {
        expect(decipher('lemon', 'Lxfopv Ef rnHr!')).toEqual('Attack At daWn!');
    });
    it('with an empty string as a phrase returns an empty string', () => {
        expect(decipher('word', '')).toEqual('');
    });
    it('produces same result with key word on lower or uppercase', () => {
        expect(decipher('lEmOn', 'LXFOPV EF RNHR')).toEqual('ATTACK AT DAWN');
    });
});
