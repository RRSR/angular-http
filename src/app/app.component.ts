import {Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {


  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getData()
      .subscribe(
        (data: Response) => console.log(data)
      );
  }

}
