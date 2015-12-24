import {Pipe} from "angular2/core";

@Pipe({
  name: "reverse"
})
export default class ReversePipe {

  transform(value: string): any {
    return value.split("").reverse().join("");
  }
}
