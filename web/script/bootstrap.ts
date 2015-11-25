"use strict";

import "reflect-metadata";
import "zone.js";

import {bootstrap, provide, Component} from "angular2/angular2";
import {HTTP_PROVIDERS} from "angular2/http";
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, LocationStrategy, PathLocationStrategy} from "angular2/router";

import {
HelloComponent,
WorldComponent
} from "./component/components";

import {
LoggerService
} from "./service/services";

@Component({
  selector: "app",
  template: `
    <div class="root">
    <ul>
      <li><a [router-link]="['Hello']">Hello</a></li>
      <li><a [router-link]="['World']">World</a></li>
    </ul>
    <router-outlet></router-outlet>
    </div>
  `,
  directives: [
    ROUTER_DIRECTIVES
  ]
})
@RouteConfig([
  { path: "/", redirectTo: "/hello" },
  { path: "/hello", component: HelloComponent, name: "Hello" },
  { path: "/world", component: WorldComponent, name: "World" }
])
class AppComponent {
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: PathLocationStrategy }),
  LoggerService
]);
