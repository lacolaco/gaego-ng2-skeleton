import {AppBackend} from "./service/app";
export {AppBackend} from "./service/app";
import {Logger} from "./service/logger";
export {Logger} from "./service/logger";

export const APP_SERVICES: any[] = [
  AppBackend,
  Logger
];
