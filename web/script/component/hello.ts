"use strict";

import {Component, Observable} from "angular2/angular2";
import {LoggerService, AppService} from "../service/services";
import {Response} from "angular2/http";

@Component({
  selector: "hello",
  providers: [AppService],
  template: `
  <h2>Hello</h2>
  <button (click)="sayHello()">Say Hello</button>
  <hr>
  <pre>{{ time | date:"medium" }}</pre>
  `
})
export class HelloComponent {

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
  }
}
