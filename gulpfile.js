var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('vet', function(){
  return gulp.src('./test/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish', {verbose: true}))
  .pipe(jshint.reporter('fail'))
  .pipe(concat('all.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./scripts'))
});

gulp.task('test', ['vet'], function(){
  return gulp.src('./test/apiTest.js')
  .pipe(mocha({reporter:'spec'}));
});
