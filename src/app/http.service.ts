import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  getData() {
    return this.http.get('https://angualr-http-7a0e1.firebaseio.com/title.json')
      .map((response: Response) => response.json());
  }

  postData(user: any) {
    const data = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://angualr-http-7a0e1.firebaseio.com/data.json', data, {headers: headers})
      .map((response: Response) => response.json());

  }

  getOwnData() {
    return this.http.get('https://angualr-http-7a0e1.firebaseio.com/data.json')
      .map((response: Response) => response.json());
  }
}
