/**
* System configuration for Angular 2 samples
* Adjust as necessary for your application needs.
*/
(function (global) {

    // map tells the System loader where to look for things
    var map = {
        'app': '/app', // 'dist',

        '@angular': '/node_modules/@angular',
        'angular2-in-memory-web-api': '/node_modules/angular2-in-memory-web-api',
        'rxjs': '/node_modules/rxjs',
        'symbol-observable': '/node_modules/symbol-observable',
        '@ng-bootstrap/ng-bootstrap': '/node_modules/@ng-bootstrap/ng-bootstrap',
        'ng2-toastr': '/node_modules/ng2-toastr',
        'angular2-modal': '/node_modules/angular2-modal',
        'angular2-modal/platform-browser': '/node_modules/angular2-modal/platform-browser',
        '@angular2-material': '/node_modules/@angular2-material'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
        'symbol-observable': { defaultExtension: 'js', main: 'index.js' },
        '@ng-bootstrap/ng-bootstrap': { defaultExtension: 'js', main: 'index.js' },
        'ng2-toastr': { defaultExtension: 'js' },
        'angular2-modal': { main: 'index.js', defaultExtension: 'js' },
        'angular2-modal/platform-browser': { main: 'index.js', defaultExtension: 'js' },
        'angular2-modal/plugins/bootstrap': { main: 'index.js', defaultExtension: 'js' },
        'angular2-modal/plugins/vex': { main: 'index.js', defaultExtension: 'js' },
        'angular2-modal/plugins/js-native': { main: 'index.js', defaultExtension: 'js' }
    };

    var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
    ];

    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
    }
    var ngMaterialPkgs = [
    'button',
    'button-toggle',
    'card',
    'checkbox',
    'core',
    'grid-list',
    'icon',
    'input',
    'list',
    'menu',
    'progress-bar',
    'progress-circle',
    'radio',
    'sidenav',
    'slider',
    'slide-toggle',
    'tabs',
    'toolbar',
    'tooltip'
    ];

    function materialPkgs(pkgName) {
        packages['@angular2-material/' + pkgName] = { main: pkgName+'.js', defaultExtension: 'js' };
    }
    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    }

    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);

    ngMaterialPkgs.forEach(materialPkgs);
    // No umd for router yet
    packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

    var config = {
        map: map,
        packages: packages
    };

    System.config(config);

})(this);