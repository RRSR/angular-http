import {Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  items: any[] = [];
  asyncString = this.httpService.getData();

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
  }

  onSubmit(username: string, email: string) {
    return this.httpService.postData({username: username, email: email})
      .subscribe(
        (data) => console.log(data)
      );
  }

  onGetData() {
    this.httpService.getOwnData().subscribe(
      (data) => {
        const tempArray = [];
        for (const key in data) {
          tempArray.push(data[key]);
        }
        this.items = tempArray;
      }
    );
  }
}
