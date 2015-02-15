var gulp = require('gulp'),
    shell = require('gulp-shell'),
    connect = require('gulp-connect'),
    htmlreplace = require('gulp-html-replace'),
    subtree = require('gulp-subtree'),
    clean = require('gulp-clean');

// Directories
var TEMP = './temp/',
    DIST = './dist/';

gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        port: 1337,
        livereload: true
    });
});

gulp.task('htmlreplace', shell.task([
        'cp ./jspm_packages/traceur-runtime.js ./dist',
        'cp ./jspm_packages/traceur-runtime.js.map ./dist',
        'jspm bundle-sfx --minify lib/main.jsx! dist/app.js'
    ])
);

gulp.task('build', ['htmlreplace'], function() {
    return gulp.src('./index.html')
        .pipe(htmlreplace({
            js: {
                src: ['traceur-runtime.js', 'app.js'],
                tpl: '<script src="%s"></script>'
            }
        }))
        .pipe(gulp.dest(DIST));
    });


gulp.task('temp', ['build'], function() {
    return gulp.src(DIST + '/**/*')
        .pipe(gulp.dest(TEMP));
});

gulp.task('deploy', ['temp'], function() {
    return gulp.src(TEMP)
        .pipe(subtree())
        .pipe(clean());
});

gulp.task('default', ['build', 'connect']);