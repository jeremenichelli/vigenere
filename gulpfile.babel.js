import gulp from 'gulp';
import plugins from 'gulp-load-plugins';
import { Server as karmaServer } from 'karma';
import del from 'del';
import project from './package.json';


// load gulp plugins under $ namespace
const $ = plugins();

// paths
const src = `./src/${project.name}.js`;
const spec = `./test/${project.name}.js`;
const output = `./dist`;

// distribution banner
const banner = `/*` +
    `\n * ${project.title} - v${project.version}` +
    `\n * ${project.url}` +
    `\n * ${project.copyright} (c) ${project.author} - ${project.license} License` +
    `\n*/\n\n`;

// TASKS

/*
 * deletes dist directory
 *
 * gulp clean
 */
gulp.task('clean', (done) => {
    del(output);
    done();
});

/*
 * checks syntax in source files
 *
 * gulp lint:src
 */
gulp.task('lint:src', () => {
    return gulp.src(src)
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.eslint.failAfterError());
});

/*
 * checks syntax in test files
 *
 * gulp lint:src
 */
gulp.task('lint:spec', () => {
    return gulp.src(spec)
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.eslint.failAfterError());
});

/*
 * groups lint tasks
 *
 * gulp lint
 */
gulp.task('lint', [ 'lint:src', 'lint:spec' ]);

/*
 * checks general syntax and run tests on source files
 *
 * gulp test
 */
gulp.task('test', [ 'lint' ], (done) => {
    let server = new karmaServer({
        configFile: `${__dirname}/test/karma.conf.js`,
        singleRun: true
    }, done);

    return server.start();
});

/*
 * run tests and creates ES5 distribution files
 *
 * gulp build:es5
 */
gulp.task('build:es5', [ 'test' ], () => {
    return gulp.src(src)
        .pipe($.babel())
        .pipe($.concatUtil.header(banner))
        .pipe($.rename({
            suffix: '.es5'
        }))
        .pipe(gulp.dest(output))
        .pipe($.uglify())
        .pipe($.rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(output));
});

/*
 * run tests and creates ES6 distribution file
 *
 * gulp build:es6
 */
gulp.task('build:es6', [ 'test' ], () => {
    return gulp.src(src)
        .pipe($.concatUtil.header(banner))
        .pipe(gulp.dest(output));
});

/*
 * groups build tasks
 *
 * gulp build
 */
gulp.task('build', [ 'build:es5', 'build:es6' ]);

/*
 * default task
 */
gulp.task('default', [ 'build' ]);
