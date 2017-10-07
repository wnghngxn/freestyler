const gulp = require('gulp');
const ts = require('gulp-typescript');

gulp.task('build-lib', () => {
    return gulp
        .src(['src/**/*.ts', '!src/**/__tests__/**'])
        .pipe(
            ts({
                target: 'es5',
                module: 'commonjs',
                removeComments: false,
                noImplicitAny: false,
                sourceMap: false,
            })
        )
        .pipe(gulp.dest('lib'));
});

gulp.task('build-modules', () => {
    return gulp
        .src(['src/**/*.ts', '!src/**/__tests__/**'])
        .pipe(
            ts({
                target: 'es6',
                module: 'es2015',
                removeComments: false,
                noImplicitAny: false,
                sourceMap: false,
            })
        )
        .pipe(gulp.dest('modules'));
});
