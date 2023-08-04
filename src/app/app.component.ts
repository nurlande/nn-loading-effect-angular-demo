import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loader-demo';
  colors = {
    color1: 'red',
    color2: 'orange',
    color3: 'yellow'
  }
}
