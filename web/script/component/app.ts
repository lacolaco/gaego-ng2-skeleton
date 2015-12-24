import {Component, Inject} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";

import HelloComponent from "./hello";
import WorldComponent from "./world";

@Component({
  selector: "app",
  template: `
    <div class="root">
      <h1>Angular 2 Sample</h1>
      <p>Powered by <a href="http://momentjs.com/">Moment.js</a>: {{ clock }}</p>
      <hr>
      <p>Router sample</p>
      <ul class="row">
        <li><a [routerLink]="['Hello']">Hello</a></li>
        <li><a [routerLink]="['World']">World</a></li>
      </ul>
      <p>↓ ↓ Router outlet ↓ ↓</p>
      <hr>
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

  private clock: string;

  constructor( @Inject("moment") private moment: moment.MomentStatic) {
  }

  ngOnInit() {
    setInterval(() => {
      this.clock = this.moment().format("YYYY/MM/DD HH:mm:ss.SS");
    }, 1)
  }
}
