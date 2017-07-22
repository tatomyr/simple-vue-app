const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const connect = require('gulp-connect');
const del = require('del');

// Combine all sass files
gulp.task('styles', () => {
  return gulp.src('src/styles/main.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(csso())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(connect.reload())
});

// Assemble scripts
gulp.task('scripts', () => {
  return gulp.src([
    'src/scripts/main.js'
  ])
    .pipe(plumber())
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(connect.reload())
});

// Copy all files (including 3rd party scripts) to dist/ forlder keeping base structure
gulp.task('files', () => {
  return gulp.src([
    'src/*.html',
    'src/content/**/*',
    'src/lib/**/*'
  ], { base: './src/' })
    .pipe(plumber())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
});

// Cleaning dist/ folder
gulp.task('clean:dist', () => del.sync('dist'));

// Starting dev server on specified port with root in dist/ folder
gulp.task('connect', () => {
  connect.server({
    name: 'dev server',
    root: ['dist'],
    port: 3000,
    livereload: true
  });
});

// Watching files changings
gulp.task('watch', () => {
  gulp.watch('src/styles/**/*.scss', ['styles']);
  gulp.watch('src/scripts/**/*.js', ['scripts']);
  gulp.watch('src/*.html', ['files']);
  gulp.watch('src/content/**/*', ['files']);
});

// Production build (BE AWARE THAT THE SEQUENCE MAY BE ASYNC!)
gulp.task('build', ['clean:dist', 'files', 'styles', 'scripts']);

// Development
gulp.task('default', ['clean:dist', 'files', 'styles', 'scripts', 'connect', 'watch']);
