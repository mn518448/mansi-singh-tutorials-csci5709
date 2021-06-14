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

  allUsers: any
  Search: any
  constructor(private router: Router, private userAuthService: UserAuthService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    
    this.userAuthService.loading = false
    if (this.userAuthService.getLoggedInStatus()) {
      console.log("In profile Page")
      this.allUsers = this.userAuthService.getAllUsers();
      console.log(this.allUsers)
    }
    else {
      this.logout();
    }
  }
  clear(){
    this.Search = "";
    this.searchKeyword();
  }
  searchKeyword() {
    var keyword = this.Search.toLocaleLowerCase();
    this.allUsers = this.userAuthService.getAllUsers();
    if (keyword) {
      this.allUsers = (this.allUsers.filter((o: any) => { return ((o.firstName.toLocaleLowerCase().includes(keyword)) || (o.lastName.toLocaleLowerCase().includes(keyword))) }));
      this.ref.detectChanges();
    }
  }
  logout() {
    this.userAuthService.setLoggedInStatus(null)
    this.router.navigate(['/login'])
  }

  openCard(id: any) {
    this.userAuthService.getUserById(id);
  }
}

