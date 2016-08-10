"use strict";
var demo_app_1 = require('./demo-app');
var button_demo_1 = require('../button/button-demo');
exports.routesmaterial = [
    { path: '', component: demo_app_1.Home },
    { path: 'button', component: button_demo_1.ButtonDemo },
];
//export const DEMO_APP_ROUTE_PROVIDER = provideRouter(routes);
//# sourceMappingURL=routes.js.map