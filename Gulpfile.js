var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();


/* css */
gulp.task('css', function() {
  return gulp.src('./sass/styles.scss')
            .pipe(sass())
            .pipe(gulp.dest('./css'))
            .pipe(browserSync.stream())
});

/* serve */
gulp.task('serve', function() {
  //var files = ['./css/styles.css'];

  browserSync.init({
    proxy: 'html-starter.test'
  })

  gulp.watch('./sass/**/*.scss', ['css'], function() {
    console.log('re compiling ...')
  })
})

/* default */
gulp.task('default', ['serve']);
