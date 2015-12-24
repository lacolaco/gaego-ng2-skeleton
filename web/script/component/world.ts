import {Component} from "angular2/core";

@Component({
  selector: "world",
  template: `
  <h2>World</h2>
  <input type="text" [value]="text" (input)="changeText($event.target.value)">
  <p>{{ text | reverse }}</p>
  `
})
export default class WorldComponent {
  private text = "Yah";

  constructor() {
  }

  changeText(value: string) {
    this.text = value;
  }
}
