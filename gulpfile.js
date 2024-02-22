const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");

function compileSass() {
  return gulp
    .src("sass/*.scss")
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(gulp.dest("dist/css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/css/minified"));
}

exports.default = compileSass;
