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
    describe('cipher', function() {
        it('works with all uppercase words and no special characters', function() {
            expect(vigenere.cipher('LEMON', 'ATTACKATDAWN')).toBe('LXFOPVEFRNHR');
        });
    });
    describe('decipher', function() {
        it('works with all uppercase words and no special characters', function() {
            expect(vigenere.decipher('LEMON', 'LXFOPVEFRNHR')).toBe('ATTACKATDAWN');
        });
    });
})(this);
