// const { src, dest, series, parallel } = require("gulp");
// // var gulp = require("gulp");
// const watch = require("gulp-watch");
// const sass = require("gulp-sass");
// const autoprefixer = require("autoprefixer");
// const cssnano = require("cssnano");
// const postcss = require("gulp-postcss");
// const sourcemaps = require("gulp-sourcemaps");

// function cssTask() {
//   return src("./assets/css/main.scss")
//     .pipe(sourcemaps.init())
//     .pipe(sass({ outputStyle: "compressed" }))
//     .on("error", sass.logError)
//     .pipe(postcss([autoprefixer(), cssnano()]))
//     .pipe(sourcemaps.write("."))
//     .pipe(dest("./assets/css/"));
// }

// function watchFiles() {
//   watch("./_scss/**/*.scss", parallel(cssTask));
// }

// exports.default = parallel(cssTask, watchFiles);
const gulp = require("gulp");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("css", function () {
  return gulp
    .src("./assets/css/main.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .on("error", sass.logError)
    .pipe(gulp.dest("./assets/css/"));
});

gulp.task("watch", function () {
  gulp.watch("./_scss/**/*.scss", gulp.parallel("css"));
});

gulp.task("build", gulp.parallel("css"));
