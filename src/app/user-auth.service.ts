import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpCallsService } from './http-calls.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  allProfiles: any[] = [];
  loggedinUser: any;
  allUserList: any;
  selectedUser:any;
  loggedInStatus: any;
  loading : boolean = false;
  constructor(private httpservice: HttpCallsService, private router: Router) { }

  public addNewUser(obj:any){
    this.allProfiles.push(obj)
  }

  public validateUser(email:string, password:string){
  
  this.loading = true;
  this.httpservice.loginUser(email, password)
  .subscribe((result: any) => {
    console.log(result)
    if(result && result.status){
      this.setLoggedInStatus(result);
      this.getAllUsersCall();
        
    }
  },
  (error: any) =>{
    console.log(error.error)
    this.setLoggedInStatus(error.error);
    this.loading =false
  });
  }

  getAllUsersCall(){
    this.loading =true
    this.httpservice.getAllUsers()
    .subscribe( 
      (result: any) => {
      if(result && result.data){
        this.setAllUsers(result.data);
        this.loading = false
        this.router.navigate(['/profile'])
      }
    },
    (error: any) =>{
      console.log(error)
      this.loading =false
    })    
  }

  getUserById(id : any){
    this.loading =true
    this.httpservice.getUserById(id)
    .subscribe( (result: any) => {
      if(result && result.data){
        this.setSelectedUsers(result.data);
        this.loading = false
        this.router.navigate(['/user-details'])
      }
    },
    (error: any) =>{
      console.log(error)
      this.loading =false
      //this.setSelectedUsers(error);
    }
    );

  }

  getLoggedInStatus(){
    return this.loggedInStatus;
  }

  setLoggedInStatus(status: boolean){
    this.loggedInStatus = status;
  }

  public getLoggedinUser(){
    return this.loggedinUser;
  }  
  public setLoggedinUser(user : any){
    this.loggedinUser = user;
  }

  setAllUsers(userList: any){
    this.allUserList = userList;  
  }

  getAllUsers(){
    return this.allUserList;
  }
  setSelectedUsers(user: any){
    this.selectedUser = user;
  }
  getSelectedUser(){
    return this.selectedUser;
  }
}