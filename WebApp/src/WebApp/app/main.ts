
//bootstrap(AppComponent, [
//    ...MODAL_BROWSER_PROVIDERS,
//    APP_ROUTER_PROVIDERS,
//    provide(ToastOptions, { useValue: new ToastOptions(options) }),
//    HTTP_PROVIDERS,
//    disableDeprecatedForms(),
//    provideForms()
//]);

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module
import { AppModule } from './app.module';

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);