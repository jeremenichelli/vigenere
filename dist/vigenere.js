/*
 * vigenere - v1.0.0
 * https://github.com/jeremenichelli/vigenere
 * 2015 (c) Jeremias Menichelli - MIT License
*/

(function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        root.vigenere = factory();
    }
})(this, function() {
    'use strict';
    var lowerReference = 'abcdefghijklmnopqrstuvwxyz',
        upperReference = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var isalpha = function(string) {
        return (/^[a-zA-Z]+$/).test(string);
    };

    var process = function(word, phrase, flag) {
        // check if arguments are correct
        if (typeof word !== 'string' || typeof phrase !== 'string') {
            throw new Error('vignere: key word and phrase must be strings');
        }

        // throw error if word is not valid
        if (!isalpha(word)) {
            throw new Error('vignere: key word can only contain letters');
        }

        // pass key word all to lower case
        word = word.toLowerCase();

        // initial position on key word
        var wi = 0,
            pos,
            ci,
            i = 0,
            len = phrase.length,
            wlen = word.length,
            result = '';

        for (; i < len; i++) {
            pos = phrase[i];
            if (isalpha(pos)) {
                if (flag > 0) {
                    ci = lowerReference.indexOf(pos.toLowerCase()) + lowerReference.indexOf(word[wi]);
                } else {
                    ci = lowerReference.indexOf(pos.toLowerCase()) - lowerReference.indexOf(word[wi]);
                    ci = ci < 0 ? 26 + ci : ci;
                }
                ci %= 26;
                // take cipher from lower or upper reference
                result = lowerReference.indexOf(pos) === -1 ? result + upperReference[ci] : result + lowerReference[ci];
                // reset word index when it exceeds word length
                wi = wi + 1 === wlen ? 0 : wi + 1;
            } else {
                result += pos;
            }
        }

        return result;
    };

    return {
        cipher: function(w, p) {
            return process(w, p, 1);
        },
        decipher: function(w, p) {
            return process(w, p, -1);
        }
    };
});
