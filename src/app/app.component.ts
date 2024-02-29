import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [
    `
      h3 {
        color: dodgerblue;
        font-weight: bold;
      }
    `,
  ], // inline styles is taking over
})
export class AppComponent {}
