"use strict";

import {Component, bootstrap} from "angular2/angular2";
import {LoggerService, HelloService} from "../service/services";
import {HTTP_PROVIDERS, Response} from "angular2/http";

@Component({
  selector: "lc-hello",
  providers: [LoggerService, HelloService],
  template: `
  <div class="root">
    <h1>{{ hello }} {{ greeting | uppercase }}!</h1>
    <input type="text" [value]="greeting" (input)="greet($event.target.value);" placeholder="name"/>
  </div>
  `,
  styleUrls: ["./app/component/hello_component.css"]
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

bootstrap(HelloComponent, [HTTP_PROVIDERS]);

