const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean');
const rebaseUrls = require('gulp-css-rebase-urls');


gulp.task('images-clean-src', () =>
    gulp.src('./generate/src/images', {read: false})
        .pipe(clean())
);

gulp.task('images', ['images-clean-src'], () =>
    gulp.src('./src/images/**/*')
        .pipe(gulp.dest('./generate/src/images'))
);

gulp.task('images:watch', ['images'],  () =>
    gulp.watch('./src/images/**/*', ['images'])
);

gulp.task('sass', () =>
    gulp.src('./src/styles/default.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(rebaseUrls())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./generate/src/styles'))
);

gulp.task('sass:watch', ['sass'], () =>
    gulp.watch('./src/styles/**/*.scss', ['sass'])
);


// common
gulp.task('build', ['sass', 'images']);
gulp.task('default', ['sass:watch', 'images:watch']);