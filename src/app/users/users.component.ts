import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserAuthService} from '../user-auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  allProfiles: any;
  Search: any;

  constructor(private userAuthService: UserAuthService, private router: Router, private ref: ChangeDetectorRef) { }
  
  onSearchUser() {
    var keyword = this.Search.toLocaleLowerCase();
    this.allProfiles = this.userAuthService.getAllUsers();
    if (keyword) {
      this.allProfiles = (this.allProfiles.filter((o: any) => { return ((o.firstName.toLocaleLowerCase().includes(keyword)) || (o.lastName.toLocaleLowerCase().includes(keyword))) }));
      this.ref.detectChanges();
    }
  }

  onClear(){
    this.Search = "";
    this.onSearchUser();
  }

  onSelectProfile(id: any) {
    this.userAuthService.getUserByIdCall(id);
  }

  onLogout() {
    this.userAuthService.setUserLoggedInStatus(null);
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
       this.userAuthService.loading = false
    if (this.userAuthService.getUserLoggedInStatus()) {
      this.allProfiles = this.userAuthService.getAllUsers();
      console.log(this.allProfiles)
    }
    else {
      this.onLogout();
    }
  }

}

