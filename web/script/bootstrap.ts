///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../typings/bundle.d.ts"/>

// Angular 2 Dependencies
import "es6-promise";
import "es6-collections";
import "zone.js";
import "reflect-metadata";
import "rxjs/Rx";

import {bootstrap} from "angular2/platform/browser";
import {provide, PLATFORM_PIPES, PLATFORM_DIRECTIVES} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from "angular2/router";

import {App} from "./app";
import {APP_SERVICES} from "./service";
import {APP_PIPES} from "./pipe";

bootstrap(App, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(PLATFORM_DIRECTIVES, { useValue: ROUTER_DIRECTIVES, multi: true }),
  APP_SERVICES,
  provide(PLATFORM_PIPES, { useValue: APP_PIPES, multi: true }),
]);
