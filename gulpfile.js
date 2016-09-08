var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var cleanCss = require('gulp-clean-css');

gulp.task('step1', function() {
    gulp.src('a.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('dist'));
});

gulp.task('step2', function() {
    gulp.src(['dist/a.css', 'b.css'])
        .pipe(sourcemaps.init())
        .pipe(concat('final.css'))
        .pipe(cleanCss())
        //.pipe(sourcemaps.write('maps', sourcemapsConfig))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('dist'));
});
