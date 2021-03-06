import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {DemoApp, Home} from './angularmaterial/demo-app/demo-app';
import {RouterModule} from '@angular/router';
import {MaterialModule} from './angularmaterial/all/all';
import {ProgressBarDemo} from './angularmaterial/progress-bar/progress-bar-demo';
import {RippleDemo} from './angularmaterial/ripple/ripple-demo';
import {IconDemo} from './angularmaterial/icon/icon-demo';
import {GesturesDemo} from './angularmaterial/gestures/gestures-demo';
import {InputDemo} from './angularmaterial/input/input-demo';
import {CardDemo} from './angularmaterial/card/card-demo';
import {RadioDemo} from './angularmaterial/radio/radio-demo';
import {ButtonToggleDemo} from './angularmaterial/button-toggle/button-toggle-demo';
import {ProgressCircleDemo} from './angularmaterial/progress-circle/progress-circle-demo';
import {TooltipDemo} from './angularmaterial/tooltip/tooltip-demo';
import {ListDemo} from './angularmaterial/list/list-demo';
import {BaselineDemo} from './angularmaterial/baseline/baseline-demo';
import {GridListDemo} from './angularmaterial/grid-list/grid-list-demo';
import {LiveAnnouncerDemo} from './angularmaterial/live-announcer/live-announcer-demo';
import {OverlayDemo, SpagettiPanel, RotiniPanel} from './angularmaterial/overlay/overlay-demo';
import {SlideToggleDemo} from './angularmaterial/slide-toggle/slide-toggle-demo';
import {ToolbarDemo} from './angularmaterial/toolbar/toolbar-demo';
import {ButtonDemo} from './angularmaterial/button/button-demo';
import {MdCheckboxDemoNestedChecklist, CheckboxDemo} from './angularmaterial/checkbox/checkbox-demo';
import {SliderDemo} from './angularmaterial/slider/slider-demo';
import {SidenavDemo} from './angularmaterial/sidenav/sidenav-demo';
import {PortalDemo, ScienceJoke} from './angularmaterial/portal/portal-demo';
import {MenuDemo} from './angularmaterial/menu/menu-demo';
import {TabsDemo} from './angularmaterial/tabs/tab-group-demo';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule,
  ],
  declarations: [
    BaselineDemo,
    ButtonDemo,
    ButtonToggleDemo,
    CardDemo,
    CheckboxDemo,
    DemoApp,
    GesturesDemo,
    GridListDemo,
    Home,
    IconDemo,
    InputDemo,
    ListDemo,
    LiveAnnouncerDemo,
    MdCheckboxDemoNestedChecklist,
    MenuDemo,
    OverlayDemo,
    PortalDemo,
    ProgressBarDemo,
    ProgressCircleDemo,
    RadioDemo,
    RippleDemo,
    RotiniPanel,
    ScienceJoke,
    SidenavDemo,
    SliderDemo,
    SlideToggleDemo,
    SpagettiPanel,
    TabsDemo,
    ToolbarDemo,
    TooltipDemo,
  ],
  entryComponents: [
    DemoApp,
    RotiniPanel,
    ScienceJoke,
    SpagettiPanel,
  ],
})
export class DemoAppModule {
  constructor(private _appRef: ApplicationRef) { }

  ngDoBootstrap() {
    this._appRef.bootstrap(DemoApp);
  }
}
