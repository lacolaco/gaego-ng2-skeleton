import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";

import HelloComponent from "./hello";
import WorldComponent from "./world";

@Component({
  selector: "app",
  template: `
    <div class="root">
      <h1>Angular 2 Sample</h1>
      <ul class="row">
        <li><a [routerLink]="['Hello']">Hello</a></li>
        <li><a [routerLink]="['World']">World</a></li>
      </ul>
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [
    ROUTER_DIRECTIVES
  ],
  styles: [require("./app.css").toString()]
})
@RouteConfig([
  { path: "/", redirectTo: ["Hello"] },
  { path: "/hello", component: HelloComponent, name: "Hello" },
  { path: "/world", component: WorldComponent, name: "World" }
])
export default class AppComponent {
}
