/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // other libraries
      'rxjs':                       'npm:rxjs',
      'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
      '@angular2-material': 'npm:@angular2-material',
      'angular2-google-maps/core': 'npm:angular2-google-maps/core'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      '.': {
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular2-google-maps/core': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      },
      '@angular2-material/core': {
        format: 'cjs',
        main: 'core.umd.js'
      },
      '@angular2-material/card': {
        format: 'cjs',
        main: 'card.umd.js'
      },
      '@angular2-material/checkbox': {
        format: 'cjs',
        main: 'checkbox.umd.js'
      },
      '@angular2-material/button': {
        format: 'cjs',
        main: 'button.umd.js'
      },
      '@angular2-material/toolbar': {
        format: 'cjs',
        main: 'toolbar.umd.js'
      },
      '@angular2-material/sidenav': {
        format: 'cjs',
        main: 'sidenav.umd.js'
      },
      '@angular2-material/icon': {
        format: 'cjs',
        main: 'icon.umd.js'
      },
      '@angular2-material/input': {
        format: 'cjs',
        main: 'input.umd.js'
      },
      '@angular2-material/list': {
        format: 'cjs',
        main: 'list.umd.js'
      }
      
    }
  });
})(this);
