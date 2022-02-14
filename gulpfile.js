const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

function scss() {
    return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css/'));
};
function watch() {
    gulp.watch('./src/scss/**/*.scss', scss);
};

function prefixer() {
    return gulp.src('./dist/css/style.css')
    .pipe(autoprefixer({
		cascade: false
        }))
        .pipe(gulp.dest('dist/css/'))
};

exports.scss = scss;
exports.watch = watch;
exports.prefixer = prefixer;


//-----------------------------here----------------------------------//