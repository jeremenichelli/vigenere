// karma.conf.js
module.exports = function(config) {
    config.set({
        basePath: '',

        frameworks: [ 'browserify', 'jasmine' ],

        files: [
            '../src/**/*.js',
            './**/*.js'
        ],

        exclude: [],

        preprocessors: {
            '../src/**/*.js': [ 'browserify' ],
            './**/*.js': [ 'browserify' ]
        },

        browserify: {
            debug: true,
            transform: [ 'babelify' ]
        },

        browsers: [ 'PhantomJS' ],

        reporters: [ 'spec' ]
    });
};