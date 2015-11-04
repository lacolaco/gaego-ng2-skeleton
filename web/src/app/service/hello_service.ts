import {Injectable, Inject} from "angular2/angular2";
import {Http} from "angular2/http";

@Injectable()
export class HelloService {
  private http: Http;

  constructor(@Inject(Http) http: Http) {
    this.http = http;
  }

  get(): any {
    return this.http.get("/api/hello");
  }
}
