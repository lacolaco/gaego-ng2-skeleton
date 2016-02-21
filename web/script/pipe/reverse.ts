import {Pipe} from "angular2/core";

@Pipe({
  name: "reverse"
})
export class ReversePipe {

  transform(value: string): any {
    return value.split("").reverse().join("");
  }
}
