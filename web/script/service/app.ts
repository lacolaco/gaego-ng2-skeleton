import {Injectable, Inject} from "angular2/angular2";
import {Http} from "angular2/http";

@Injectable()
export class AppService {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  getData(): any {
    return this.http.get("/api/data");
  }
}
