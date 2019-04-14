const { src, dest, watch, parallel, task } = require('gulp');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const sass = require('gulp-sass');

const paths = {
  styles: {
    src: 'src/scss/**/*.scss',
    dest: 'public/css'
  }
}

function style() {
  return src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: ['node_modules']
    }).on('error', sass.logError))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.styles.dest));
}

function see() {
  browserSync.init({
    server: {
      baseDir: "./public"
    },
  })

  watch(paths.styles.src, style).on('change', browserSync.reload)
  watch("public/*.html").on('change', browserSync.reload)
}

exports.watch = watch
exports.style = style
var build = parallel(style, see)
task('default', build)