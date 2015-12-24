import {Component} from "angular2/core";
import {Response} from "angular2/http";

import AppService from "../service/app";
import LoggerService from "../service/logger";

@Component({
  selector: "hello",
  template: `
  <h2>Hello</h2>
  <button (click)="sayHello()">Say Hello</button>
  <hr>
  <pre>{{ time | date:"short" }}</pre>
  <pre>{{ time | date:"medium" }}</pre>
  `
})
export default class HelloComponent {

  private time: Date;

  constructor(private logger: LoggerService, private appService: AppService) {
  }

  onInit() {
    this.updateData();
    setInterval(() => {
      this.updateData();
    }, 1000);
  }

  updateData() {
    this.appService.getData().subscribe((resp: Response) => {
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
