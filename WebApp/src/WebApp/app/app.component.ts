import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';


@Component({
  selector: 'my-app',

  template: `
    <h1>App</h1>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}