import {Injectable} from "angular2/angular2";

@Injectable()
export class LoggerService {

  log(value: Object) {
    console.log(value.toString());
  }
}
