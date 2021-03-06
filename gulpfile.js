var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./public/src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/dist/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./public/src/scss/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'sass:watch'));
