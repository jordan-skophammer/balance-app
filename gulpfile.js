const gulp = require('gulp');
var eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const minify = require('gulp-minify')

gulp.task('eslint', function() {
  return gulp.src('.src/pages/*.js')
    .pipe(eslint({
      baseConfig: {
        "ecmaFeatures": {
           "jsx": true
         }
      }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('default', function() {     
  return gulp.src(
    ['src/pages/*.js'])       
  .pipe(babel({presets: ['es2015', 'react']}))
  // .pipe(minify())       
  .pipe(gulp.dest('./src/dist')) 
});
