/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify");
var webroot = "./wwwroot/";

var paths = {
    js: webroot + "js/**/*.js"
    , minJs: webroot + "js/**/*.min.js"
    , css: webroot + "css/**/*.css"
    , minCss: webroot + "css/**/*.min.css"
    , concatJsDest: webroot + "js/site.min.js"
    , concatCssDest: webroot + "css/site.min.css"
    , scripts: ['scripts/**/*.js', 'scripts/**/*.ts', 'scripts/**/*.map', 'scripts/*.js', 'scripts/*.ts', 'scripts/*.map']

};


var pathsAngular = {
    scripts: ['views/**/*.js', 'views/**/*.ts', 'views/**/*.map', 'views/*.js', 'views/*.ts', 'views/*.map'],
    libs: ['node_modules/angular2/bundles/angular2.js',
           'node_modules/angular2/bundles/angular2-polyfills.js',
           'node_modules/systemjs/dist/system.src.js',
           'node_modules/rxjs/bundles/Rx.js'
    , 'node_modules/core-js/client/shim.min.js', 'node_modules/zone.js/dist/zone.js', 'node_modules/reflect-metadata', 'node_modules/systemjs/dist/system.src.js']
};

gulp.task('lib:ang', function () {
    gulp.src(pathsAngular.libs).pipe(gulp.dest('wwwroot/lib'))
});

gulp.task('copy:ang', function () {
    gulp.src(pathsAngular.scripts).pipe(gulp.dest('wwwroot/app'))    
})
gulp.task('default:ang', ['lib:ang', 'copy:ang'], function () {
    
});
gulp.task('watch:ang', function () {
    gulp.watch('views/**/*.ts', ['copy:ang']);
})

var plunk = {
    scripts: ['plunk/**/*.js', 'plunk/**/*.ts', 'plunk/**/*.map', 'plunk/*.js', 'plunk/*.ts', 'plunk/*.map'],
    libs: ['node_modules/angular2/bundles/angular2.js',
           'node_modules/angular2/bundles/angular2-polyfills.js',
           'node_modules/systemjs/dist/system.src.js',
           'node_modules/rxjs/bundles/Rx.js'
    , 'node_modules/core-js/client/shim.min.js', 'node_modules/zone.js', 'node_modules/reflect-metadata', 'node_modules/systemjs/dist/system.src.js'],
    html: ['plunk/**/*.html','plunk/*.html'],
};
gulp.task('copy:plunk', function () {
    gulp.src(plunk.scripts).pipe(gulp.dest('wwwroot/plunk/script'))
})
gulp.task('watch:plunk', function () {
    gulp.watch('plunk/**/*.ts', ['copy:plunk']);
})
gulp.task('Copyhtml:plunk', function () {
    gulp.src(plunk.html).pipe(gulp.dest('wwwroot/plunk/html'))

})