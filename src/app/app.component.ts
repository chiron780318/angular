import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent, Child],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Test1';
  isEditable = true;
  message = '';

  greet() {
    this.message = 'Hello, there 👋';
  }

  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}
