require("../index.css");

import "../node_modules/angular2/bundles/angular2-polyfills.js";
import "rxjs/Rx";

import {bootstrap} from "angular2/platform/browser";
import {provide, PLATFORM_PIPES} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from "angular2/router";

import AppComponent from "./component/app";
import AppService from "./service/app";
import LoggerService from "./service/logger";
import ReversePipe from "./pipe/reversePipe";

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  AppService,
  LoggerService,
  provide(PLATFORM_PIPES, { useValue: [ReversePipe], multi: true })
]);
