//bootstrap(AppComponent, [
//    ...MODAL_BROWSER_PROVIDERS,
//    APP_ROUTER_PROVIDERS,
//    provide(ToastOptions, { useValue: new ToastOptions(options) }),
//    HTTP_PROVIDERS,
//    disableDeprecatedForms(),
//    provideForms()
//]);
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
// The app module
var app_module_1 = require('./app.module');
// Compile and launch the module
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map