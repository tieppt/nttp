import { Component, OnInit } from '@angular/core';
import { environment } from '@client-env/environment';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'np-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client: ' + environment.production;
  array = [1, 2, 3, 4];
  panels = [
    {
      active: true,
      name: 'This is panel header 1'
    },
    {
      active: false,
      name: 'This is panel header 2'
    },
    {
      active: false,
      name: 'This is panel header 3'
    }
  ];

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users/1').subscribe(console.log);
  }
}
