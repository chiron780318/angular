import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [FormsModule, LowerCasePipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  name = input<string>('youngTech');
  username = 'youngTech';

  favoriteFramework = 'Angular';
  showFramework(){
    alert(this.favoriteFramework);
  }
}
