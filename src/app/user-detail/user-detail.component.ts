import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user:any

  constructor(private router: Router, private userAuthService: UserAuthService) { }

  onBack() {
    this.router.navigate(['/profile'])
  }  

  onLogout() {
    this.userAuthService.setUserLoggedInStatus(null);
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.userAuthService.loading = false
    if (this.userAuthService.getUserLoggedInStatus()) {
      this.user = this.userAuthService.getSelectedUserProfile();
    }
    else {
      this.onLogout();
    }
  }

}
