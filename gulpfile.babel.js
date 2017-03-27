import gulp from 'gulp';
import gutil from 'gulp-util';
import babel from 'gulp-babel';
import babelify from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import uglify from 'gulp-uglify';
import stringify from 'stringify';

gulp.task('default', ['bundle']);

gulp.task('bundle', () => {
  gutil.log('bundle called');
  const bundler = browserify('src/bookmarklet.js');
  bundler.transform(babelify);
  bundler.transform(stringify, {
    appliesTo: { includeExtensions: ['.html', '.css'] },
    minify: true
  });

  bundler.bundle()
    .on('error', (err) => { console.error(err); })
    .pipe(source('bookmarklet.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});
