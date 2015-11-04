import {Pipe} from "angular2/angular2";

@Pipe({
  name: "uppercase"
})
class UpperCasePipe {

  transform(value: string): any {
    return value.toUpperCase();
  }
}
