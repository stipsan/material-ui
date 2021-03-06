var gulp = require('gulp'),
  less = require('gulp-less'),
  sourcemaps = require('gulp-sourcemaps'),
  handleErrors = require('../util/handleErrors'),
  autoprefixer = require('gulp-autoprefixer'),
  config = require('../config').less;

gulp.task('less', function() {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(autoprefixer({cascade: false, browsers: ['last 2 versions']}))
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest));
});
