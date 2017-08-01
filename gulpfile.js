var gulp = require('gulp');
var browserify = require('browserify');

gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./js/weather-interface.js'] })
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./build/js'));
});
