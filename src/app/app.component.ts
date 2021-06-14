import { Component } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csci5709-tutorial4';

  constructor(public userAuthService: UserAuthService){}
}
