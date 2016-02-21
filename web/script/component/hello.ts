import {Component} from "angular2/core";

import {AppBackend, Logger} from "../service";

@Component({
  selector: "app-hello",
  template: `
  <div class="app-hello">
    <h2>Hello</h2>
    <button (click)="sayHello()">Say Hello</button>
    <hr>
    <pre>{{ time | date:"short" }}</pre>
    <pre>{{ time | date:"medium" }}</pre>
  </div>
  `
})
export class HelloComponent {

  private time: Date;

  constructor(private logger: Logger, private backend: AppBackend) {
  }

  onInit() {
    this.updateData();
    setInterval(() => {
      this.updateData();
    }, 1000);
  }

  updateData() {
    this.backend.getData().subscribe((resp) => {
      if (resp.json()) {
        let data = <{ time: number }>resp.json();
        this.time = new Date(data.time);
      }
    });
  }

  sayHello() {
    alert("Hello!");
    this.logger.log(`${new Date().toString()}: Hello!`);
  }
}
