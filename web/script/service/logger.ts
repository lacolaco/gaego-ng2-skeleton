import {Injectable} from "angular2/core";

@Injectable()
export default class LoggerService {

  log(value: Object) {
    console.log(value.toString());
  }
}
