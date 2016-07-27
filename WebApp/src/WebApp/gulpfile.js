/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify");
    //sassCompile = require("gulp-sass");
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
    scripts: ['app/**/*.js', 'app/**/*.ts', 'app/**/*.map', 'app/*.js', 'app/*.ts', 'app/*.map'],
    copy: ['app/**/*.js', 'app/*.js'],
    libs: ['node_modules/angular2/bundles/angular2.js',
           'node_modules/angular2/bundles/angular2-polyfills.js',
           'node_modules/systemjs/dist/system.src.js',
           'node_modules/rxjs/bundles/Rx.js'
    , 'node_modules/core-js/client/shim.min.js', 'node_modules/zone.js/dist/zone.js', 'node_modules/reflect-metadata/Reflect.js', 'node_modules/systemjs/dist/system.src.js']
};

gulp.task('copy:ang', function () {
    gulp.src(pathsAngular.copy).pipe(gulp.dest('wwwroot/app'))
})
gulp.task('watch:ang', function () {
    gulp.watch(pathsAngular.scripts, ['copy:ang']);

});

var pathshtml = {
    scripts: ['app/**/*.html', 'app/*.html', 'app/**/*.css', 'app/*.css'],
   
};
gulp.task('copy:html', function () {
    gulp.src(pathshtml.scripts).pipe(gulp.dest('wwwroot/app'))
})
gulp.task('watch:html', function () {
    gulp.watch(pathshtml.scripts, ['copy:html']);

});
var gutil = require('gutil');
var webpack = require('webpack');
var config = require('./webpack.config');

gulp.task('default1', function (callback) {
    webpack(config, function (error, stats) {
        if (error) throw new gutil.PluginError('webpack', error);
        gutil.log('[webpack]', stats.toString());

        callback();
    });
});

var libs = ['node_modules/angular2/bundles/angular2.js',
'node_modules/angular2/bundles/angular2-polyfills.js',
'node_modules/systemjs/dist/system.src.js',
'node_modules/rxjs/bundles/Rx.js'
, 'node_modules/core-js/client/shim.min.js'
, 'node_modules/zone.js/dist/zone.js'
, 'node_modules/reflect-metadata/Reflect.js']

var js = '.js';
var node_modules = [
'node_modules/rxjs/**/*'
, 'node_modules/zone.js/**/*' + js
, 'node_modules/@angular/**/*' + js
, 'node_modules/es6-shim/**/*' + js
, 'node_modules/reflect-metadata/**/*' + js
, 'node_modules/systemjs/**/*' + js
, 'node_modules/core-js/**/*' + js
, 'node_modules/symbol-observable/**/*' + js
, 'node_modules/@ng-bootstrap/**/*' + js

];
gulp.task('node_module', function (callback) {
    gulp.src(libs).pipe(gulp.dest("./wwwroot/lib"));
    console.log("SSMessage : Loading Libraries End");

    console.log("SSMessage : Loading node_modules Start");
    gulp.src(node_modules, { "base": "." }).pipe(gulp.dest("./wwwroot/"));
});

//var pathssass = {
//    scripts: ['app/**/*.scss', 'app/*.scss', 'app/**/*.scss', 'app/*.scss'],

//};
//var auto_prefixer = require("gulp-autoprefixer");;
//gulp.task('copy:sass', function (callback) {
//        //plugins.rimraf('wwwroot/css/*', cb);


//    gulp.src(pathssass.scripts)
//        .pipe(sassCompile.sass())
//        .pipe(auto_prefixer.autoprefixer())
//        .pipe(gulp.dest('wwwroot/css'));
//});
//gulp.task('watch:sass', function () {
//    gulp.watch(pathssass.scripts, ['copy:sass']);

//});