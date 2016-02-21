import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AppBackend {
  constructor(private http: Http) {
  }

  getData(): Observable<any> {
    return this.http.get("/api/data")
      .map((res) => res.json());
  }
}
