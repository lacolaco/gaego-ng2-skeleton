import {Injectable} from "angular2/core";

@Injectable()
export class Logger {

  log(value: Object) {
    console.log(value.toString());
  }
}
