const gulp = require('gulp');
const {src, dest, task, series, watch} = require('gulp');
const sass = require('gulp-sass');
const rm = require( 'gulp-rm' );
const browserSync = require('browser-sync').create();
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
sass.compiler = require('node-sass');
const babel = require('gulp-babel');
const postcss = require('gulp-postcss');
const cleanCSS = require('gulp-clean-css');
const pxToRem = require('gulp-px2rem-converter');
const svgo = require('gulp-svgo');
const svgSprite = require('gulp-svg-sprite');


task('copy:html', () => {
 return src('src/**.html').pipe(dest('dist'))
 .pipe(browserSync.reload({ stream:true }));
});

task('scripts', () => {
  return src('src/js/**.js')
  .pipe(concat('main.js'))
  .pipe(babel({presets: ['@babel/env']}))
  .pipe(dest('dist'))
  .pipe(browserSync.reload({ stream:true }));
})

task('clean', () => {
  return src('dist/**/*', { read: false }).pipe(rm())
  .pipe(browserSync.reload({ stream:true }));
});

const styles = [
  'node_modules/normalize.css/normalize.css',
  'src/scss/**.scss'
]

task('styles', () => {
  return src(styles)
  .pipe(sass())
  .pipe(postcss([ autoprefixer() ]))
  .pipe(concat('main.css'))
  .pipe(pxToRem())
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(dest('dist'))
  .pipe(browserSync.reload({ stream:true }));
});

task('icons', () => {
  return src('src/images/sprite/**.svg')
  .pipe(svgo({
    plugins: [
      {
        removeAttrs: {
          attrs: "(stroke|style|width|height|opacity|data*)"
        }
      }
    ]
  }))
  .pipe(svgSprite({
    mode: {
      symbol: {
        sprite: "../sprite.svg"
      }
    }
  }))
  .pipe(dest('dist/images'))
})

const images = [
  'src/images/svg/*',
  'src/images/png/*',
  'src/images/jpg/*'
]

task('copy:images', () => {
  return src(images).pipe(dest('dist/images'))
})

task('server', () => {
  browserSync.init({
    server: {baseDir: "dist"}
  })
})

watch('src/**.html', series('copy:html')).on('change', browserSync.reload);
watch('src/scss/**.scss', series('styles')).on('change', browserSync.reload);
watch('src/images/sprite/**.svg', series('icons')).on('change', browserSync.reload);
watch('src/images/**/*', series('copy:images')).on('change', browserSync.reload);
watch('src/js/*.js', series('scripts')).on('change', browserSync.reload);

task('build', series("clean", 'styles', 'icons', 'scripts', 'copy:images', 'copy:html'));
task('dev', series("clean", 'styles', 'icons', 'scripts', 'copy:images', 'copy:html', 'server'));





