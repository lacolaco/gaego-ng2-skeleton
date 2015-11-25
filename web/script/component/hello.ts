"use strict";

import {Component} from "angular2/angular2";
import {LoggerService, AppService} from "../service/services";
import {Response} from "angular2/http";

@Component({
  selector: "hello",
  providers: [AppService],
  template: `
  <h2>Hello</h2>
  <pre>{{ data | json }}</pre>
  <button (click)="sayHello()">Say</button>
  `
})
export class HelloComponent {

  private data: any;

  constructor(private logger: LoggerService, private appService: AppService) {
  }

  onInit() {
    this.appService.getData().subscribe((resp: Response) => {
      this.data = resp.json()
    });
  }

  sayHello() {
    alert("Hello!");
  }
}
