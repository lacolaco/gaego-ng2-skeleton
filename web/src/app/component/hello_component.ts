"use strict";

import {Component, bootstrap} from "angular2/angular2";
import {LoggerService, HelloService} from "../service/services";
import {HTTP_PROVIDERS, Response} from "angular2/http";

@Component({
  selector: "lc-hello",
  template: `
  <h1>{{ hello }} {{ greeting | uppercase }}!</h1>
  <input type="text" [value]="greeting" (input)="greet($event.target.value);" placeholder="name"/>
  `,
  styles: [`h1 {color: #8ae6ff; }`]
})
export class HelloComponent {

  public greeting: string = "World";
  public hello: any = "";

  constructor(private logger: LoggerService, private helloService: HelloService) {
    helloService.get().subscribe((resp: Response) => this.hello = resp.text());
  }

  greet(name: string) {
    this.greeting = name;
    this.logger.log(this.greeting);
  }
}

bootstrap(HelloComponent, [HTTP_PROVIDERS, LoggerService, HelloService]);

