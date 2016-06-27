var gulp = require('gulp');

/**
 * General tools
 * */
var gulp_concat = require('gulp-concat');

/**
 * JS tools
 **/

var gulp_rename = require('gulp-rename');
var gulp_ngAnnotate = require('gulp-ng-annotate');
var gulp_uglify = require('gulp-uglify');



gulp.task('vendorComponentsScripts', function() {
    return gulp.src([
            './bower_components/angular/angular.min.js',
            './bower_components/angular-route/angular-route.min.js'
        ])
        .pipe(gulp_concat('vendorComponentsScripts.js'))
        .pipe(gulp.dest('./public/vendor_components'))
        .pipe(gulp_rename('vendorComponentsScripts.js'))
        .pipe(gulp_ngAnnotate())
        .pipe(
            gulp_uglify()
        )
        .pipe(gulp.dest('./public/vendor_components'));
});





// Default Task
gulp.task('default', gulp.series('vendorComponentsScripts', function(done) {

    done();
}));