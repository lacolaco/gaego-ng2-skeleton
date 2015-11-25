"use strict";

import {Component} from "angular2/angular2";

@Component({
  selector: "world",
  template: `
  <h2>World</h2>
  <input type="text" [value]="text" (input)="changeText($event.target.value)">
  <p>{{ text | uppercase }}</p>
  `
})
export class WorldComponent {
  private text = "Yah";

  constructor() {
  }

  changeText(value: string) {
    this.text = value;
  }
}
