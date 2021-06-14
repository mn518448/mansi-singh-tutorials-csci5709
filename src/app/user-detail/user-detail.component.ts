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

  ngOnInit(): void {
    this.userAuthService.loading = false
    if (this.userAuthService.getLoggedInStatus()) {
      console.log("In profile details Page")
      this.user = this.userAuthService.getSelectedUser();
      console.log(this.user)
    }
    else {
      this.logout();
    }
  }
  back() {
    this.router.navigate(['/profile'])
  }  
  logout() {
    this.userAuthService.setLoggedInStatus(null)
    this.router.navigate(['/login'])
  }
}
