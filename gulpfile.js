const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

const paths = {
    
    styles : {
        src: 'app/scss/**/*.scss',
        dest: 'dist/styles'
    },

    scripts:{
        src: 'app/scripts/**/*.js',
        dest: 'dist/scripts'
    },

    images: {
        src: 'app/images/**/*',
        dest: 'dist/images'
    }
}

function styles(){
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([cssnano()]))
        .pipe(sourcemaps.write(['.']))
        .pipe(gulp.dest(paths.styles.dest));
}

function scripts(){
    return gulp.src(paths.scripts.src)
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(paths.scripts.dest));
}

function minify(){
    return gulp.src(paths.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest));
}

function watch(){
    gulp.watch(paths.styles.src,styles);
    gulp.watch(paths.scripts.src,scripts);
}


gulp.task('build', gulp.series(
    gulp.parallel(styles,scripts),
    watch
));

// var setup = gulp.series(
//     gulp.parallel(styles,scripts),
//     watch
// )

exports.minify = minify;
exports.scripts = scripts;
// exports.default = setup;