import {Injectable} from "angular2/core";
import {Http} from "angular2/http";

@Injectable()
export default class AppService {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  getData(): any {
    return this.http.get("/api/data");
  }
}
