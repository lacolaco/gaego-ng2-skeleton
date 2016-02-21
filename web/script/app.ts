import * as moment from "moment";

import {Component} from "angular2/core";
import {RouteConfig} from "angular2/router";

import {HelloComponent} from "./component/hello";
import {WorldComponent} from "./component/world";

@Component({
  selector: "app",
  template: `
    <div class="root">
      <h1>Angular 2 Example</h1>
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
  `
})
@RouteConfig([
  { path: "*", redirectTo: ["Hello"] },
  { path: "/hello", component: HelloComponent, name: "Hello" },
  { path: "/world", component: WorldComponent, name: "World" }
])
export class App {

  private clock: string;

  ngOnInit() {
    setInterval(() => {
      this.clock = moment().format("YYYY/MM/DD HH:mm:ss.SS");
    }, 1)
  }
}
