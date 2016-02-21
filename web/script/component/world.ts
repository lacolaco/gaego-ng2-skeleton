import {Component} from "angular2/core";

@Component({
  selector: "app-world",
  template: `
  <h2>World</h2>
  <input type="text" [value]="text" (input)="changeText($event.target.value)">
  <p>{{ text | reverse }}</p>
  `
})
export class WorldComponent {
  private text = "Yah";

  changeText(value: string) {
    this.text = value;
  }
}
