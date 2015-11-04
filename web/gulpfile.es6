let gulp = require("gulp");
let exec = require('child_process').exec;
let runSequence = require("run-sequence");
let ts = require("gulp-typescript");
let tslint = require("gulp-tslint");
let tsconfig = require("gulp-tsconfig-update");

gulp.task("tslint", ()=> {
  return gulp.src("./src/**/*.ts")
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});

gulp.task("tsconfig", ()=> {
  return gulp.src("./src/**/*.ts")
    .pipe(tsconfig());
});

gulp.task("tsc", ["tslint", "tsconfig"], (cb)=> {
  exec("$(npm bin)/tsc", (err, stdout) => {
    console.log(stdout);
    cb();
  })
});

gulp.task("build", (cb)=> {
  runSequence("tsc", cb);
});

gulp.task("publish", ["build"], ()=> {
  gulp.src([
    "./src/**/*.*"
  ]).pipe(gulp.dest("../api/src/web"));
});

gulp.task("watch", ()=> {
  gulp.watch([
    "./src/**/*.ts"
  ], ["publish"]);
  gulp.watch([
    "./src/**/*.css"
  ], ["publish"]);
  gulp.watch([
    "./src/**/*.html"
  ], ["publish"]);
});

gulp.task("default", ()=> {
  runSequence("publish", "watch");
});
