/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component } from '@angular/core';

@Component({
  selector: 'template-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'ToDo App';

  constructor() {
    this.setTitle( 'To Do Application' );
  }

  setTitle( title: string ): void {
    this.title = title
  }
}
