import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: Observable<string>;
  title: string = 'this is my first project';
  username: string;
  password;
  constructor() {
    this.getData();
    this.title = 'this is my first project';
    this.username = "basava";
  }

  getData() {
    let val = document.getElementById('username') as HTMLInputElement;
    console.log(val.value);
    console.log(this.username);
}
    signin() {
      const loginInfo = `{ 
  username: ${this.username},
  password: ${this.password}
  }
  `;
    alert(loginInfo)
    console.log(loginInfo);
    }
  }