(function(root) {
    'use strict';

    describe('Primary access', function() {
        it('vigenere available in global scope', function() {
            expect(typeof root.vigenere).toBe('object');
        });
        it('vigenere.cipher available in global scope as a function', function() {
            expect(typeof root.vigenere.cipher).toBe('function');
        });
        it('vigenere.decipher available in global scope as a function', function() {
            expect(typeof root.vigenere.decipher).toBe('function');
        });
    });
    describe('Errors', function() {
        it('when word is not a string', function() {
            var error1,
                error2;

            // cipher
            try {
                vigenere.cipher(12345, 'phrase');
            } catch (e) {
                error1 = e;
            }

            // decipher
            try {
                vigenere.decipher(12345, 'phrase');
            } catch (e) {
                error2 = e;
            }

            expect(error1 instanceof Error).toBe(true);
            expect(error2 instanceof Error).toBe(true);
        });
        it('when phrase is not a string', function() {
            var error1,
                error2;

            // cipher
            try {
                vigenere.cipher('phrase', 12345);
            } catch (e) {
                error1 = e;
            }

            // decipher
            try {
                vigenere.decipher('phrase', 12345);
            } catch (e) {
                error2 = e;
            }

            expect(error1 instanceof Error).toBe(true);
            expect(error2 instanceof Error).toBe(true);
        });
        it('when call with not enough arguments', function() {
            var error1,
                error2;

            // cipher
            try {
                vigenere.cipher('phrase');
            } catch (e) {
                error1 = e;
            }

            // decipher
            try {
                vigenere.decipher('phrase');
            } catch (e) {
                error2 = e;
            }

            expect(error1 instanceof Error).toBe(true);
            expect(error2 instanceof Error).toBe(true);
        });
        it('when word contains characters that are not letters', function() {
            var error1,
                error2;

            // cipher
            try {
                vigenere.cipher('w0rd', 'phrase');
            } catch (e) {
                error1 = e;
            }

            // decipher
            try {
                vigenere.decipher('w0rd', 'phrase');
            } catch (e) {
                error2 = e;
            }

            expect(error1 instanceof Error).toBe(true);
            expect(error2 instanceof Error).toBe(true);
        });
    });
    describe('cipher', function() {
        it('with all uppercase letters and no special characters', function() {
            expect(vigenere.cipher('LEMON', 'ATTACKATDAWN')).toBe('LXFOPVEFRNHR');
        });
        it('with all uppercase letters and spaces', function() {
            expect(vigenere.cipher('LEMON', 'ATTACK AT DAWN')).toBe('LXFOPV EF RNHR');
        });
        it('with all lowercase letters and no special characters', function() {
            expect(vigenere.cipher('lemon', 'attackatdawn')).toBe('lxfopvefrnhr');
        });
        it('with lowercase letters and spaces', function() {
            expect(vigenere.cipher('lemon', 'attack at dawn')).toBe('lxfopv ef rnhr');
        });
        it('with mix of upper and lowercase letters and special characters', function() {
            expect(vigenere.cipher('lemon', 'Attack At daWn!')).toBe('Lxfopv Ef rnHr!');
        });
        it('with an empty string as a phrase returns an empty string', function() {
            expect(vigenere.cipher('word', '')).toBe('');
        });
        it('produces same result with key word on lower or uppercase', function() {
            expect(vigenere.cipher('lEmOn', 'ATTACK AT DAWN')).toBe('LXFOPV EF RNHR');
        });
    });
    describe('decipher', function() {
        it('with all uppercase letters and no special characters', function() {
            expect(vigenere.decipher('LEMON', 'LXFOPVEFRNHR')).toBe('ATTACKATDAWN');
        });
        it('with all uppercase letters and spaces', function() {
            expect(vigenere.decipher('LEMON', 'LXFOPV EF RNHR')).toBe('ATTACK AT DAWN');
        });
        it('with all lowercase letters and no special characters', function() {
            expect(vigenere.decipher('lemon', 'lxfopvefrnhr')).toBe('attackatdawn');
        });
        it('with lowercase letters and spaces', function() {
            expect(vigenere.decipher('lemon', 'lxfopv ef rnhr')).toBe('attack at dawn');
        });
        it('with mix of upper and lowercase letters and special characters', function() {
            expect(vigenere.decipher('lemon', 'Lxfopv Ef rnHr!')).toBe('Attack At daWn!');
        });
        it('with an empty string as a phrase returns an empty string', function() {
            expect(vigenere.decipher('word', '')).toBe('');
        });
        it('produces same result with key word on lower or uppercase', function() {
            expect(vigenere.decipher('lEmOn', 'LXFOPV EF RNHR')).toBe('ATTACK AT DAWN');
        });
    });
})(this);
