// karma.conf.js
module.exports = function(config) {
    config.set({
        files: [ '../src/vigenere.js', '../test/vigenere.spec.js' ],
        browsers: [ 'PhantomJS' ],
        frameworks: [ 'jasmine' ],
        reporters: [ 'spec' ]
    });
};