"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var mqpacker = require("css-mqpacker");
var csso = require("gulp-csso");
var server = require("browser-sync").create();
var imagemin = require("gulp-imagemin");
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-svgmin");
var sequence = require("gulp-sequence");
var clean = require("gulp-delete-directory-files");
/*
gulp.task("clean", function() {
  return gulp.src(".")
  .pipe(clean("atik"));
});
*/
gulp.task("svgstore", function() {
  return gulp.src("img/*.svg")
  .pipe(svgmin())
  .pipe(svgstore())
  .pipe(rename("sprite.svg"))
  .pipe(gulp.dest("svg-sprite"));
});

gulp.task("imagemin", function() {
  return gulp.src("img/**/*.{jpg,png,gif}")
  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.jpegtran({progressive: true})
  ]))
  .pipe(gulp.dest("img-min"));
});

gulp.task("style", function() {
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: ["last 2 versions"]}),
      mqpacker({sort: true})
    ]))
    .pipe(gulp.dest("css"))
    .pipe(csso())
    .pipe(rename("style-min.css"))
    .pipe(gulp.dest("css"));

});

gulp.task("server", function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});

gulp.task("sequence", function(end) {
  gulp.sequence ("svgstore","imagemin","style","server")(end)
});
