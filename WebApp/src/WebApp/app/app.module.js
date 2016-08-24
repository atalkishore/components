"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var platform_browser_1 = require('angular2-modal/platform-browser');
var forms_1 = require('@angular/forms');
//ang-mat
var core_2 = require('@angular/core');
var platform_browser_2 = require('@angular/platform-browser');
var http_2 = require('@angular/http');
var forms_2 = require('@angular/forms');
var demo_app_1 = require('./angularmaterial/demo-app/demo-app');
var router_1 = require('@angular/router');
var all_1 = require('./angularmaterial/all/all');
var progress_bar_demo_1 = require('./angularmaterial/progress-bar/progress-bar-demo');
var ripple_demo_1 = require('./angularmaterial/ripple/ripple-demo');
var icon_demo_1 = require('./angularmaterial/icon/icon-demo');
var gestures_demo_1 = require('./angularmaterial/gestures/gestures-demo');
var input_demo_1 = require('./angularmaterial/input/input-demo');
var card_demo_1 = require('./angularmaterial/card/card-demo');
//import {RadioDemo} from './angularmaterial/radio/radio-demo';
var button_toggle_demo_1 = require('./angularmaterial/button-toggle/button-toggle-demo');
var progress_circle_demo_1 = require('./angularmaterial/progress-circle/progress-circle-demo');
var tooltip_demo_1 = require('./angularmaterial/tooltip/tooltip-demo');
var list_demo_1 = require('./angularmaterial/list/list-demo');
var baseline_demo_1 = require('./angularmaterial/baseline/baseline-demo');
var grid_list_demo_1 = require('./angularmaterial/grid-list/grid-list-demo');
var live_announcer_demo_1 = require('./angularmaterial/live-announcer/live-announcer-demo');
var overlay_demo_1 = require('./angularmaterial/overlay/overlay-demo');
var slide_toggle_demo_1 = require('./angularmaterial/slide-toggle/slide-toggle-demo');
var toolbar_demo_1 = require('./angularmaterial/toolbar/toolbar-demo');
var button_demo_1 = require('./angularmaterial/button/button-demo');
var checkbox_demo_1 = require('./angularmaterial/checkbox/checkbox-demo');
var slider_demo_1 = require('./angularmaterial/slider/slider-demo');
var sidenav_demo_1 = require('./angularmaterial/sidenav/sidenav-demo');
var portal_demo_1 = require('./angularmaterial/portal/portal-demo');
var menu_demo_1 = require('./angularmaterial/menu/menu-demo');
var tab_group_demo_1 = require('./angularmaterial/tabs/tab-group-demo');
var options = {
    autoDismiss: false,
    positionClass: 'toast-bottom-right',
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_2.NgModule({
            imports: [platform_browser_2.BrowserModule,
                forms_2.FormsModule,
                http_2.HttpModule,
                all_1.MaterialModule,
                router_1.RouterModule],
            declarations: [
                baseline_demo_1.BaselineDemo,
                button_demo_1.ButtonDemo,
                button_toggle_demo_1.ButtonToggleDemo,
                card_demo_1.CardDemo,
                checkbox_demo_1.CheckboxDemo,
                demo_app_1.DemoApp,
                gestures_demo_1.GesturesDemo,
                grid_list_demo_1.GridListDemo,
                demo_app_1.Home,
                icon_demo_1.IconDemo,
                input_demo_1.InputDemo,
                list_demo_1.ListDemo,
                live_announcer_demo_1.LiveAnnouncerDemo,
                checkbox_demo_1.MdCheckboxDemoNestedChecklist,
                menu_demo_1.MenuDemo,
                overlay_demo_1.OverlayDemo,
                portal_demo_1.PortalDemo,
                progress_bar_demo_1.ProgressBarDemo,
                progress_circle_demo_1.ProgressCircleDemo,
                //RadioDemo,
                ripple_demo_1.RippleDemo,
                overlay_demo_1.RotiniPanel,
                portal_demo_1.ScienceJoke,
                sidenav_demo_1.SidenavDemo,
                slider_demo_1.SliderDemo,
                slide_toggle_demo_1.SlideToggleDemo,
                overlay_demo_1.SpagettiPanel,
                tab_group_demo_1.TabsDemo,
                toolbar_demo_1.ToolbarDemo,
                tooltip_demo_1.TooltipDemo,
                app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: platform_browser_1.MODAL_BROWSER_PROVIDERS.concat([
                app_routes_1.APP_ROUTER_PROVIDERS,
                core_1.provide(ng2_toastr_1.ToastOptions, { useValue: new ng2_toastr_1.ToastOptions(options) }),
                http_1.HTTP_PROVIDERS,
                forms_1.disableDeprecatedForms(),
                forms_1.provideForms()
            ]),
            entryComponents: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map