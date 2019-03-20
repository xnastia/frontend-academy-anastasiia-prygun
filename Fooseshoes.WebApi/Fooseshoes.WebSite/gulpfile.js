/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    sass = require("gulp-sass");


gulp.task("sass", function () {
    return gulp.src('sass/styles.scss')
            .pipe(sass("/css"))
            
});