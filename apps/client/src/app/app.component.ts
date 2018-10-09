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
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users/1').subscribe(console.log);
  }
}
